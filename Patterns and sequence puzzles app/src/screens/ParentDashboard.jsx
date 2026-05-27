import { MODULES } from '../data/modules.js';
import { hexA } from '../utils/helpers.js';

/** Parent Dashboard — time spent, accuracy per module, skill progression, activity feed. */
export default function ParentDashboard({ appState, onBack }) {
  const { modules, streak, weeklyMinutes = [0,0,0,0,0,0,0] } = appState;

  // Compute accuracy per module
  const modStats = MODULES.map(mod => {
    const m = modules[mod.id];
    const acc = m?.accuracy || [];
    const avg = acc.length ? Math.round(acc.reduce((a, b) => a + b, 0) / acc.length) : 0;
    return { ...mod, avg, completed: (m?.completed || []).length };
  });

  const totalMinutes = weeklyMinutes.reduce((a, b) => a + b, 0);
  const totalLevels  = modStats.reduce((a, m) => a + m.completed, 0);
  const overallAcc   = modStats.filter(m => m.avg > 0).length
    ? Math.round(modStats.filter(m => m.avg > 0).reduce((a, m) => a + m.avg, 0) / modStats.filter(m => m.avg > 0).length)
    : 0;

  const days = ['M','T','W','T','F','S','S'];
  const maxMin = Math.max(...weeklyMinutes, 1);

  return (
    <div className="screen screen-enter">
      <div className="page-head" style={{ marginTop: 6, marginBottom: 12 }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div style={{ flex: 1 }}>
          <h1>Parent Dashboard</h1>
          <div className="sub">Captain Advaith · This week</div>
        </div>
      </div>

      {/* Top stats trio */}
      <div className="px">
        <div className="grid-3">
          {[
            { ico: '⏱️', label: 'Time',     value: `${Math.floor(totalMinutes/60)}h ${totalMinutes%60}m`, color: '#4ECDC4' },
            { ico: '✅', label: 'Levels',   value: `${totalLevels}`,                                      color: '#6BCB77' },
            { ico: '🎯', label: 'Accuracy', value: overallAcc ? `${overallAcc}%` : '—',                   color: '#FFD93D' },
          ].map(s => (
            <div key={s.label} style={{
              padding: 14, borderRadius: 18, textAlign: 'center',
              background: `linear-gradient(180deg, ${hexA(s.color, 0.18)}, rgba(255,255,255,0.03))`,
              border: `1px solid ${hexA(s.color, 0.4)}`,
            }}>
              <div style={{ fontSize: 22 }}>{s.ico}</div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 18, marginTop: 4, color: hexA(s.color, 0.95) }}>
                {s.value}
              </div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.1em', marginTop: 2 }}>
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time this week bar chart */}
      <div className="px" style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: 19, marginBottom: 10 }}>Time This Week</h2>
        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, alignItems: 'end', height: 110 }}>
            {weeklyMinutes.map((min, i) => {
              const h = (min / maxMin) * 88 + 6;
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, height: '100%', justifyContent: 'flex-end' }}>
                  {min > 0 && <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--on-dim)' }}>{min}m</div>}
                  <div style={{
                    width: '100%', maxWidth: 24, height: h,
                    borderRadius: 6,
                    background: min > 0 ? 'linear-gradient(180deg, #A78BFA, #7c5cff)' : 'rgba(255,255,255,0.06)',
                    boxShadow: min > 0 ? '0 0 10px rgba(167,139,250,0.5)' : 'none',
                  }} />
                  <div style={{ fontSize: 10, color: 'var(--on-mute)', fontWeight: 700 }}>{days[i]}</div>
                </div>
              );
            })}
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--on-mute)', marginTop: 8, textAlign: 'center', letterSpacing: '.1em' }}>
            MINUTES PER DAY · TOTAL {totalMinutes} MIN
          </div>
        </div>
      </div>

      {/* Skill progression */}
      <div className="px" style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: 19, marginBottom: 10 }}>Accuracy by Module</h2>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {modStats.map(m => (
            <div key={m.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontWeight: 800, fontSize: 14 }}>{m.title}</span>
                <span style={{ fontWeight: 800, fontSize: 13, color: hexA(m.color, 0.95) }}>
                  {m.avg ? `${m.avg}%` : '—'}
                </span>
              </div>
              <div style={{
                height: 10, borderRadius: 999, overflow: 'hidden',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{
                  width: `${m.avg}%`, height: '100%',
                  background: `linear-gradient(90deg, ${m.color}, ${hexA(m.color, 0.7)})`,
                  boxShadow: m.avg ? `0 0 8px ${hexA(m.color, 0.55)}` : 'none',
                  transition: 'width 0.5s ease',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Areas needing practice */}
      {modStats.filter(m => m.avg > 0 && m.avg < 60).length > 0 && (
        <div className="px" style={{ marginTop: 18 }}>
          <h2 style={{ fontSize: 19, marginBottom: 10 }}>Areas to Practice</h2>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {modStats.filter(m => m.avg > 0 && m.avg < 60).map(m => (
              <div key={m.id} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: 10, borderRadius: 14,
                background: `${hexA(m.color, 0.08)}`,
                border: `1px solid ${hexA(m.color, 0.3)}`,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 700 }}>
                    Accuracy: {m.avg}% · Needs practice
                  </div>
                </div>
                <span className="pill" style={{ background: hexA(m.color, 0.18), borderColor: hexA(m.color, 0.45) }}>
                  Focus
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Streak info */}
      <div className="px" style={{ marginTop: 18 }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 36 }}>🔥</div>
          <div>
            <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 22 }}>
              {streak} day streak
            </div>
            <div style={{ fontSize: 13, color: 'var(--on-dim)', fontWeight: 600 }}>
              {streak === 0
                ? 'Start playing today to build a streak!'
                : `Advaith has played ${streak} day${streak !== 1 ? 's' : ''} in a row.`}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}
