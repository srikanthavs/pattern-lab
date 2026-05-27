import { useState, useMemo } from 'react';

// Hooks & data
import { useStorage } from './hooks/useStorage.js';
import { INITIAL_STATE, INITIAL_SETTINGS, MODULES, RANKS, getRankIdx, getRankProgress } from './data/modules.js';
import { todayStr } from './utils/helpers.js';

// Layout components
import SpaceBackground from './components/SpaceBackground.jsx';
import BottomNav       from './components/BottomNav.jsx';

// Screens
import Welcome        from './screens/Welcome.jsx';
import Home           from './screens/Home.jsx';
import ModuleScreen   from './screens/ModuleScreen.jsx';
import GameplayScreen from './screens/GameplayScreen.jsx';
import LevelComplete  from './screens/LevelComplete.jsx';
import Progress       from './screens/Progress.jsx';
import ParentDashboard from './screens/ParentDashboard.jsx';
import DailyChallenge from './screens/DailyChallenge.jsx';
import Settings       from './screens/Settings.jsx';
import Difficulty     from './screens/Difficulty.jsx';

/* ============================================================
   APP — single-page state-router
   ============================================================ */
export default function App() {
  // ── Persistent state (localStorage) ──────────────────────
  const [appState, setAppState] = useStorage('patternlab-state',    INITIAL_STATE);
  const [settings, setSettings] = useStorage('patternlab-settings', INITIAL_SETTINGS);

  // ── Routing state ─────────────────────────────────────────
  const [screen, setScreen] = useState('welcome');
  const [ctx, setCtx]       = useState({
    moduleId:  null,
    level:     1,
    result:    null,
    hintOpen:  false,
    dailyMode: false,
  });

  // ── Derived: active bottom-nav tab ────────────────────────
  const navTab = useMemo(() => {
    if (['progress', 'parent'].includes(screen)) return 'progress';
    if (screen === 'daily')                       return 'daily';
    if (['settings', 'difficulty'].includes(screen)) return 'settings';
    return 'home';
  }, [screen]);

  // Bottom nav hidden during full-screen screens
  const showNav = !['welcome', 'gameplay', 'levelcomplete'].includes(screen);

  // ── Navigation helpers ────────────────────────────────────
  function navTo(tab) {
    setCtx(c => ({ ...c, hintOpen: false }));
    const map = { home: 'home', progress: 'progress', daily: 'daily', settings: 'settings' };
    setScreen(map[tab] || 'home');
  }

  function openModule(modId) {
    setCtx({ moduleId: modId, level: 1, result: null, hintOpen: false, dailyMode: false });
    setScreen('module');
  }

  function startGame(modId, lv = 1, opts = {}) {
    setCtx({ moduleId: modId, level: lv, result: null, hintOpen: false, dailyMode: opts.dailyMode || false });
    setScreen('gameplay');
  }

  function openHint() {
    setCtx(c => ({ ...c, hintOpen: !c.hintOpen }));
  }

  // Called when a gameplay session ends — awards stars, updates state
  function completeLevel(result) {
    const { stars = 1, time = 60, accuracy = 80, hintUsed = false } = result;
    const starsEarned = hintUsed ? Math.max(1, stars - 1) : stars;

    setAppState(prev => {
      const today    = todayStr();
      const modPrev  = prev.modules[ctx.moduleId] || {};
      const newTotalStars = prev.stars + starsEarned;
      const newRankIdx    = getRankIdx(newTotalStars);

      // Track which levels have been completed + their star count
      const levelStarsCopy = [...(modPrev.levelStars || [0, 0, 0, 0, 0])];
      const lvIdx = (ctx.level || 1) - 1;
      if (lvIdx >= 0 && lvIdx < 5) {
        levelStarsCopy[lvIdx] = Math.max(levelStarsCopy[lvIdx] || 0, Math.min(3, starsEarned));
      }

      // Update streak
      const isNewDay = prev.lastLoginDate !== today;
      const isConsecutive = isNewDay && (
        // within 24 h of previous
        !prev.lastLoginDate ||
        (Date.now() - new Date(prev.lastLoginDate).getTime()) < 1000 * 60 * 60 * 36
      );
      const newStreak = isNewDay
        ? (isConsecutive ? prev.streak + 1 : 1)
        : prev.streak;

      // Update accuracy array (keep last 20)
      const accArr = [...(modPrev.accuracy || []), accuracy].slice(-20);

      return {
        ...prev,
        stars:         newTotalStars,
        streak:        newStreak,
        lastLoginDate: today,
        modules: {
          ...prev.modules,
          [ctx.moduleId]: {
            ...modPrev,
            stars:      (modPrev.stars || 0) + starsEarned,
            levelStars: levelStarsCopy,
            completed:  [...(modPrev.completed || []), `${ctx.moduleId}-L${ctx.level}`],
            accuracy:   accArr,
            hintUsed:   (modPrev.hintUsed || 0) + (hintUsed ? 1 : 0),
          },
        },
      };
    });

    setCtx(c => ({ ...c, result: { ...result, starsEarned } }));
    setScreen('levelcomplete');
  }

  function resetProgress() {
    if (window.confirm('Reset all of Advaith\'s stars, badges and planets?')) {
      setAppState(INITIAL_STATE);
    }
  }

  // ── Render ────────────────────────────────────────────────
  return (
    <>
      <SpaceBackground />

      <div className="stage">
        <div className="frame">

          {screen === 'welcome' && (
            <Welcome onStart={() => {
              // Update streak on first daily launch
              setAppState(prev => {
                const today = todayStr();
                if (prev.lastLoginDate === today) return prev;
                const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
                const isConsecutive = prev.lastLoginDate === yesterday;
                return {
                  ...prev,
                  streak:        isConsecutive ? prev.streak + 1 : (prev.lastLoginDate ? 1 : prev.streak),
                  lastLoginDate: today,
                };
              });
              setScreen('home');
            }} />
          )}

          {screen === 'home' && (
            <Home
              appState={appState}
              settings={settings}
              onOpenModule={openModule}
              onNav={navTo}
              onSettings={() => setScreen('settings')}
              onProfile={() => setScreen('progress')}
            />
          )}

          {screen === 'module' && (
            <ModuleScreen
              moduleId={ctx.moduleId}
              appState={appState}
              onBack={() => setScreen('home')}
              onStartGame={startGame}
            />
          )}

          {screen === 'gameplay' && (
            <GameplayScreen
              moduleId={ctx.moduleId}
              level={ctx.level}
              appState={appState}
              settings={settings}
              onBack={() => setScreen('module')}
              onComplete={completeLevel}
              onHint={openHint}
              hintOpen={ctx.hintOpen}
            />
          )}

          {screen === 'levelcomplete' && (
            <LevelComplete
              result={ctx.result}
              moduleId={ctx.moduleId}
              onHome={() => setScreen('home')}
              onProgress={() => setScreen('progress')}
              onNext={() => startGame(ctx.moduleId, (ctx.level || 1) + 1)}
            />
          )}

          {screen === 'progress' && (
            <Progress
              appState={appState}
              onBack={() => setScreen('home')}
              onParent={() => setScreen('parent')}
            />
          )}

          {screen === 'parent' && (
            <ParentDashboard
              appState={appState}
              onBack={() => setScreen('progress')}
            />
          )}

          {screen === 'daily' && (
            <DailyChallenge
              appState={appState}
              onBack={() => setScreen('home')}
              onStartGame={startGame}
              onUpdateState={updater => setAppState(updater)}
            />
          )}

          {screen === 'settings' && (
            <Settings
              settings={settings}
              setSettings={setSettings}
              appState={appState}
              onBack={() => setScreen('home')}
              onDifficulty={() => setScreen('difficulty')}
              onReset={resetProgress}
            />
          )}

          {screen === 'difficulty' && (
            <Difficulty
              settings={settings}
              setSettings={setSettings}
              onBack={() => setScreen('settings')}
            />
          )}

          {/* Bottom navigation — hidden on welcome / gameplay / levelcomplete */}
          {showNav && (
            <BottomNav active={navTab} onNav={navTo} />
          )}

        </div>
      </div>
    </>
  );
}
