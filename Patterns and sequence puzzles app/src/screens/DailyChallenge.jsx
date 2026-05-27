import { MODULES } from '../data/modules.js';
import { hexA, shade, todayStr } from '../utils/helpers.js';

/** Daily Challenge screen — 3 puzzles from random modules, streak, bonus reward. */
export default function DailyChallenge({ appState, onBack, onStartGame, onUpdateState }) {
  const today = todayStr();
  const dc    = appState.dailyChallenge;
  const isToday = dc.date === today;

  // Pick 3 modules for today (seeded by date so same all day)
  function pickModules(dateStr) {
    let hash = 0;
    for (const ch of dateStr) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffffffff;
    const pool = MODULES.map(m => m.id);
    const picks = [];
    for (let i = 0; picks.length < 3; i++) {
      picks.push(pool[(hash + i * 7) % pool.length]);
    }
    return [...new Set(picks)].slice(0, 3);
  }

  const modIds  = isToday ? (dc.moduleIds || pickModules(today)) : pickModules(today);
  const done    = isToday ? dc.completed : [];
  const doneCount = done.length;

  const puzzles = modIds.map(id => {
    const mod = MODULES.find(m => m.id === id);
    return {
      mod: id,
      color: mod.color,
      title: mod.title,
      ico: ['🔁','📈','🔢','🎨','🧩','📖'][mod.num - 1],
      done: done.includes(id),
    };
  });

  function startPuzzle(modId) {
    // Ensure daily challenge is initialised for today
    if (!isToday) {
      onUpdateState(s => ({
        ...s,
        dailyChallenge: { date: today, completed: [], bonusStarsClaimed: false, moduleIds: modIds },
      }));
    }
    onStartGame(modId, 1, { dailyMode: true });
  }

  const allDone = doneCount === puzzles.length;

  return (
    <div className="screen screen-enter">
      {/* Header */}
      <div className="page-head" style={{ marginTop: 6, marginBottom: 12 }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div style={{ flex: 1 }}>
          <h1>Daily Challenge</h1>
          <div className="sub">
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>
      </div>

      {/* Reward banner */}
      <div className="px">
        <div style={{
          padding: 18, borderRadius: 24,
          background: 'linear-gradient(120deg, rgba(255,140,66,0.3), rgba(255,111,181,0.3))',
          border: '1px solid rgba(255,140,66,0.5)',
          boxShadow: '0 0 30px rgba(255,140,66,0.3)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', right: -20, top: -10, fontSize: 100, opacity: 0.3, pointerEvents: 'none' }}>
            ☄️
          </div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: '#ffd6b5' }}>
            TODAY'S MISSION
          </div>
          <h1 style={{ fontSize: 26, marginTop: 6, lineHeight: 1.1, paddingRight: 50 }}>
            3 puzzles. 3 modules. 1 comet badge.
          </h1>
          <div style={{ display: 'flex', gap: 16, marginTop: 14, alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.12em' }}>REWARD</div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 18 }}>+30 ⭐ + 🌠</div>
            </div>
            <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.2)' }} />
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.12em' }}>STREAK</div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 18 }}>🔥 {appState.streak} days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="px" style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
        {puzzles.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: p.done ? `linear-gradient(160deg, ${p.color}, ${shade(p.color, -22)})` : 'rgba(255,255,255,0.06)',
              border: `1px solid ${p.done ? hexA(p.color, 0.6) : 'rgba(255,255,255,0.15)'}`,
              display: 'grid', placeItems: 'center',
              fontSize: 16, color: p.done ? '#1a0734' : 'var(--on-mute)',
              fontWeight: 800,
              boxShadow: p.done ? `0 0 14px ${hexA(p.color, 0.5)}` : 'none',
            }}>
              {p.done ? '✓' : i + 1}
            </div>
            {i < puzzles.length - 1 && (
              <div style={{
                width: 40, height: 3, borderRadius: 999,
                background: puzzles[i + 1]?.done
                  ? 'linear-gradient(90deg, #A78BFA, #FF6FB5)'
                  : 'rgba(255,255,255,0.08)',
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Puzzle cards */}
      <div className="px" style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: 19, marginBottom: 10 }}>Today's Three Puzzles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {puzzles.map((p, i) => (
            <button
              key={i}
              onClick={() => !p.done && startPuzzle(p.mod)}
              disabled={p.done}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: 14, borderRadius: 20,
                background: p.done
                  ? 'linear-gradient(180deg, rgba(107,203,119,0.18), rgba(107,203,119,0.04))'
                  : `linear-gradient(180deg, ${hexA(p.color, 0.18)}, rgba(255,255,255,0.03))`,
                border: `1px solid ${p.done ? 'rgba(107,203,119,0.45)' : hexA(p.color, 0.4)}`,
                textAlign: 'left',
                cursor: p.done ? 'default' : 'pointer',
              }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: 16,
                background: `linear-gradient(160deg, ${p.color}, ${shade(p.color, -22)})`,
                display: 'grid', placeItems: 'center', fontSize: 26,
                boxShadow: `0 0 14px ${hexA(p.color, 0.5)}`,
                flexShrink: 0,
              }}>
                {p.ico}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.1em' }}>
                  PUZZLE {i + 1} OF 3
                </div>
                <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 16, marginTop: 1 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--on-dim)', marginTop: 2, fontWeight: 600 }}>
                  {p.done ? 'Completed ✓' : 'Ready to launch'}
                </div>
              </div>
              <span style={{ fontSize: 22, color: p.done ? 'rgba(107,203,119,0.9)' : '#fff' }}>
                {p.done ? '✓' : '›'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px" style={{ marginTop: 18 }}>
        <button
          className="btn block"
          onClick={() => {
            const next = puzzles.find(p => !p.done);
            if (next) startPuzzle(next.mod);
          }}
          disabled={allDone}
          style={allDone ? { opacity: 0.7 } : {}}
        >
          {allDone
            ? '🌠 Daily Complete!'
            : `🚀 Continue (${doneCount}/3)`}
        </button>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}
