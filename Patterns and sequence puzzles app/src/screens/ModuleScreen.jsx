import Planet from '../components/Planet.jsx';
import HoloPanel from '../components/HoloPanel.jsx';
import { MODULES } from '../data/modules.js';
import { hexA, shade } from '../utils/helpers.js';

/** Module landing page: planet hero, example puzzle, 5-level mission ladder. */
export default function ModuleScreen({ moduleId, appState, onBack, onStartGame }) {
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return null;

  const modProgress = appState.modules[mod.id];

  // Level ladder — stars come from localStorage; first 3 unlocked by default
  const levels = [
    { n: 1, title: 'Cadet Drill',   puzzles: 5  },
    { n: 2, title: 'Orbit Trial',   puzzles: 8  },
    { n: 3, title: 'Star Run',      puzzles: 10 },
    { n: 4, title: 'Comet Sprint',  puzzles: 10 },
    { n: 5, title: 'Boss: Nebula',  puzzles: 6  },
  ];

  // Stars earned per level (stored as array, 0 if not played)
  const levelStars = modProgress.levelStars || [0, 0, 0, 0, 0];
  // A level is unlocked if the previous level has at least 1 star (or it's level 1)
  function isLocked(lvIdx) {
    if (lvIdx === 0) return false;
    return (levelStars[lvIdx - 1] || 0) === 0;
  }

  // Example sequences per module
  const examples = {
    repeating: ['🪐', '🌙', '🪐', '🌙', '?'],
    growing:   ['🚀', '🚀🚀', '🚀🚀🚀', '?'],
    numbers:   ['2', '4', '6', '?', '10'],
    shape:     [
      { s: '●', c: '#FF6FB5' }, { s: '■', c: '#4D96FF' },
      { s: '▲', c: '#FF6FB5' }, { s: '?', c: null },
    ],
    odd:       ['🐶', '🐱', '🐰', '🍌'],
    story:     ['🌱', '🌿', '🌳'],
  };

  const ex = examples[moduleId] || [];

  return (
    <div className="screen screen-enter">

      {/* ── TOP BAR ──────────────────────────────────────────────── */}
      <div style={{
        padding: '14px 16px 0',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <span className="pill gold">⭐ {appState.stars}</span>
        <span style={{ flex: 1 }} />
        <span className="pill pink">🔥 {appState.streak}d</span>
      </div>

      {/* ── HERO CARD ─────────────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 12 }}>
        <HoloPanel
          color={mod.color}
          style={{ padding: 18, position: 'relative', overflow: 'hidden', minHeight: 200 }}
        >
          {/* Large planet — top right */}
          <div style={{ position: 'absolute', right: -30, top: -30, opacity: 0.85 }}>
            <Planet color={mod.color} size={170} ring={mod.ring} />
          </div>
          {/* Tiny ghost planet — bottom left */}
          <div style={{ position: 'absolute', left: -20, bottom: -30, opacity: 0.3 }}>
            <Planet color={mod.color} size={70} glow={false} />
          </div>

          {/* Text */}
          <div style={{ position: 'relative', maxWidth: '62%' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', color: hexA(mod.color, 0.95) }}>
              MODULE 0{mod.num}
            </div>
            <h1 style={{ fontSize: 30, marginTop: 4, lineHeight: 1 }}>{mod.title}</h1>
            <div style={{ color: 'var(--on-dim)', fontWeight: 700, fontSize: 13, marginTop: 6 }}>
              {mod.skill}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
              <span className="pill">Age {mod.age}</span>
              <span className="pill gold">⭐ {modProgress.stars}/{mod.starsMax}</span>
            </div>
          </div>

          {/* Example puzzle row */}
          <div style={{ marginTop: 110, position: 'relative' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--on-mute)', marginBottom: 6 }}>
              EXAMPLE PUZZLE
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              {ex.map((item, i) => {
                if (typeof item === 'object') {
                  const blank = item.s === '?';
                  return (
                    <div
                      key={i}
                      className={`ptile${blank ? ' blank' : ''}`}
                      style={{
                        width: 48, height: 48, fontSize: 20,
                        background: blank ? undefined : `linear-gradient(160deg, ${item.c}, ${shade(item.c, -22)})`,
                        borderColor: blank ? undefined : hexA(item.c, 0.5),
                        color: blank ? undefined : '#1a0734',
                      }}
                    >
                      {blank ? '?' : item.s}
                    </div>
                  );
                }
                const blank = item === '?';
                return (
                  <div
                    key={i}
                    className={`ptile${blank ? ' blank' : ''}`}
                    style={{ width: 48, height: 48, fontSize: moduleId === 'numbers' ? 22 : 20 }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </HoloPanel>
      </div>

      {/* ── MISSION LADDER ───────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 16 }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: 8,
        }}>
          <h2 style={{ fontSize: 19 }}>Mission Ladder</h2>
          <span className="mono" style={{ fontSize: 11, color: 'var(--on-mute)', letterSpacing: '.1em' }}>
            5 LEVELS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {levels.map((lv, lvIdx) => {
            const locked = isLocked(lvIdx);
            const earned = levelStars[lvIdx] || 0;
            return (
              <button
                key={lv.n}
                disabled={locked}
                onClick={() => !locked && onStartGame(mod.id, lv.n)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: 12, borderRadius: 18,
                  background: locked
                    ? 'rgba(255,255,255,0.03)'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                  border: `1px solid ${locked ? 'rgba(255,255,255,0.07)' : hexA(mod.color, 0.32)}`,
                  opacity: locked ? 0.55 : 1,
                  cursor: locked ? 'not-allowed' : 'pointer',
                  textAlign: 'left',
                  boxShadow: locked ? 'none' : `0 8px 24px -10px ${hexA(mod.color, 0.4)}`,
                }}
              >
                {/* Level badge */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: locked
                    ? 'rgba(255,255,255,0.05)'
                    : `linear-gradient(160deg, ${mod.color}, ${shade(mod.color, -22)})`,
                  color: locked ? 'var(--on-mute)' : '#1a0734',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--head)', fontWeight: 800, fontSize: 20,
                  boxShadow: locked ? 'none' : `0 0 12px ${hexA(mod.color, 0.5)}`,
                }}>
                  {locked ? '🔒' : lv.n}
                </div>

                {/* Title + puzzle count */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 16 }}>
                    {lv.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 700 }}>
                    {lv.puzzles} puzzles
                  </div>
                </div>

                {/* Star rating */}
                <div style={{ display: 'flex', gap: 2 }}>
                  {[0, 1, 2].map(si => (
                    <span
                      key={si}
                      style={{
                        fontSize: 16,
                        color: si < earned ? '#FFD93D' : 'rgba(255,255,255,0.18)',
                        filter: si < earned ? 'drop-shadow(0 0 4px rgba(255,217,61,0.7))' : 'none',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── START MISSION CTA ─────────────────────────────────────── */}
      <div className="px" style={{ marginTop: 18 }}>
        <button
          className="btn block"
          onClick={() => onStartGame(mod.id, 1)}
        >
          🚀 Start Mission
        </button>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}
