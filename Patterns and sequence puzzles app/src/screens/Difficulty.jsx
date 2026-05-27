import HoloPanel from '../components/HoloPanel.jsx';
import { hexA, shade } from '../utils/helpers.js';

export default function Difficulty({ settings, setSettings, onBack }) {
  const opts = [
    { id: 'easy',     title: 'Easy',     ico: '🌱', color: '#6BCB77',
      desc: '3-item patterns',          sub: 'Perfect for warm-up missions',   tag: null },
    { id: 'medium',   title: 'Medium',   ico: '⭐', color: '#FFD93D',
      desc: '4-5 item patterns',        sub: 'Recommended for Class 1',        tag: null },
    { id: 'hard',     title: 'Hard',     ico: '🔥', color: '#FF6FB5',
      desc: '6+ items, multi-variable', sub: 'For seasoned captains',          tag: null },
    { id: 'adaptive', title: 'Adaptive', ico: '🧠', color: '#A78BFA',
      desc: 'Adjusts to your skill',    sub: 'Smart difficulty engine',        tag: 'RECOMMENDED' },
  ];

  const current = settings.difficulty;

  // Sample preview per difficulty
  const previews = {
    easy:     ['🪐','🌙','?'],
    medium:   ['🪐','🌙','⭐','🪐','?'],
    hard:     ['🔴','🟦','🔴','🟦','🟢','🔴','?','🟢'],
    adaptive: ['🧠','⚡','🧠','?','🧠'],
  };

  return (
    <div className="screen screen-enter">
      <div className="page-head" style={{ marginTop: 6, marginBottom: 12 }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div style={{ flex: 1 }}>
          <h1>Difficulty</h1>
          <div className="sub">Pick a flight mode</div>
        </div>
      </div>

      <div className="px">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {opts.map(o => {
            const active = current === o.id;
            return (
              <button
                key={o.id}
                onClick={() => setSettings(s => ({ ...s, difficulty: o.id }))}
                style={{
                  position: 'relative',
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: 16, borderRadius: 22, minHeight: 76,
                  background: active
                    ? `linear-gradient(180deg, ${hexA(o.color, 0.28)}, ${hexA(o.color, 0.08)})`
                    : 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                  border: `1.5px solid ${active ? hexA(o.color, 0.7) : 'rgba(255,255,255,0.1)'}`,
                  boxShadow: active ? `0 0 28px ${hexA(o.color, 0.35)}, 0 0 0 1px ${hexA(o.color, 0.4)} inset` : 'none',
                  textAlign: 'left', cursor: 'pointer',
                }}
              >
                {/* Icon badge */}
                <div style={{
                  width: 54, height: 54, borderRadius: 18, flexShrink: 0,
                  background: `linear-gradient(160deg, ${o.color}, ${shade(o.color, -22)})`,
                  display: 'grid', placeItems: 'center', fontSize: 28,
                  boxShadow: `0 0 16px ${hexA(o.color, 0.55)}`,
                }}>
                  {o.ico}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 19 }}>{o.title}</span>
                    {o.tag && (
                      <span className="pill" style={{
                        fontSize: 9, padding: '4px 7px',
                        background: hexA(o.color, 0.2),
                        borderColor: hexA(o.color, 0.5),
                        color: '#fff',
                      }}>
                        {o.tag}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--on-dim)', fontWeight: 700, marginTop: 2 }}>{o.desc}</div>
                  <div style={{ fontSize: 11, color: 'var(--on-mute)', fontWeight: 600, marginTop: 2 }}>{o.sub}</div>
                </div>

                {/* Radio indicator */}
                <div style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  border: `2px solid ${active ? hexA(o.color, 0.85) : 'rgba(255,255,255,0.2)'}`,
                  display: 'grid', placeItems: 'center',
                  background: active ? hexA(o.color, 0.25) : 'transparent',
                }}>
                  {active && (
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: o.color, boxShadow: `0 0 8px ${hexA(o.color, 0.7)}`,
                    }} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sample puzzle preview */}
      <div className="px" style={{ marginTop: 16 }}>
        <h2 style={{ fontSize: 16, marginBottom: 8 }}>Preview at this level</h2>
        <HoloPanel color="#A78BFA">
          <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--on-mute)', marginBottom: 8 }}>
            SAMPLE PUZZLE
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {(previews[current] || previews.medium).map((s, i) => (
              <div
                key={i}
                className={`ptile${s === '?' ? ' blank' : ''}`}
                style={{ width: 48, height: 48, fontSize: 22 }}
              >
                {s}
              </div>
            ))}
          </div>
        </HoloPanel>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}
