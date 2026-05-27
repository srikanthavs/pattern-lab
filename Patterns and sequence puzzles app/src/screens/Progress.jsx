import HoloPanel from '../components/HoloPanel.jsx';
import Planet from '../components/Planet.jsx';
import Rocket from '../components/Rocket.jsx';
import { MODULES, RANKS, getRankIdx, getRankProgress } from '../data/modules.js';
import { hexA } from '../utils/helpers.js';

/** Progress screen — stars, rank, planet collection, badges, streak calendar, accuracy chart. */
export default function Progress({ appState, onBack, onParent }) {
  const { stars, streak } = appState;
  const rankIdx = getRankIdx(stars);
  const rankPct = getRankProgress(stars);
  const rank    = RANKS[rankIdx];

  // Planet unlock: a planet is unlocked when a module has any stars
  const planets = MODULES.map(mod => ({
    name:     ['Pinkara','Sunrock','Aquos','Marsbel','Violis','Bluemoth'][mod.num - 1],
    color:    mod.color,
    unlocked: (appState.modules[mod.id]?.stars || 0) > 0,
    module:   mod.title.split(' ')[0],
  }));

  const badges = [
    { ico: '🏅', name: 'First Win',     earned: stars > 0 },
    { ico: '🔥', name: '5 Day Streak',  earned: streak >= 5 },
    { ico: '💎', name: 'Perfect Round', earned: Object.values(appState.modules).some(m => (m.accuracy || []).some(a => a === 100)) },
    { ico: '⚡', name: 'Speed Solver',  earned: false },
    { ico: '🌌', name: 'Galaxy Walker', earned: planets.filter(p => p.unlocked).length >= 3 },
    { ico: '🎯', name: 'Bullseye',      earned: false },
  ];

  // Accuracy per module
  const modAccuracy = MODULES.map(mod => {
    const acc = appState.modules[mod.id]?.accuracy || [];
    const avg = acc.length ? Math.round(acc.reduce((a, b) => a + b, 0) / acc.length) : 0;
    return { label: mod.title.split(' ')[0], value: avg, color: mod.color };
  });

  // Last 30 days (placeholder visual; real streak calendar built in Phase 4)
  const streakDays = Array.from({ length: 30 }, () => 0);

  return (
    <div className="screen screen-enter">
      {/* Header */}
      <div className="page-head" style={{ marginTop: 6, marginBottom: 12 }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>
        <div style={{ flex: 1 }}>
          <h1>Your Progress</h1>
          <div className="sub">Captain Advaith · Captain's Log</div>
        </div>
        <button
          onClick={onParent}
          style={{
            padding: '8px 12px', borderRadius: 14,
            background: 'rgba(167,139,250,0.15)',
            border: '1px solid rgba(167,139,250,0.4)',
            fontSize: 13, fontWeight: 800, color: '#d1bcff',
          }}
        >
          Parent ›
        </button>
      </div>

      {/* Stars + Rank hero */}
      <div className="px">
        <HoloPanel color="#FFD93D" style={{ padding: 20, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -40, top: -40, opacity: 0.55 }}>
            <Planet color="#FFD93D" size={180} ring />
          </div>
          <div style={{ position: 'relative' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', color: 'var(--on-mute)' }}>
              TOTAL STARS
            </div>
            <div style={{
              fontFamily: 'var(--head)', fontWeight: 800, fontSize: 56, lineHeight: 1, marginTop: 4,
              background: 'linear-gradient(90deg, #FFD93D, #FF8C42)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {stars}<span style={{ fontSize: 28, marginLeft: 8 }}>⭐</span>
            </div>

            {/* Rank row */}
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 26 }}>{rank.ico}</span>
              <div>
                <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 17 }}>{rank.name}</div>
                <div style={{ fontSize: 11, color: 'var(--on-mute)', fontWeight: 700 }}>Rank {rankIdx + 1} of {RANKS.length}</div>
              </div>
            </div>

            {/* Rank ladder */}
            <div style={{ position: 'relative', marginTop: 12 }}>
              <div className="progress"><i style={{ width: `${rankPct}%` }} /></div>
              <div style={{ position: 'absolute', left: `${rankPct}%`, top: '50%', transform: 'translate(-50%,-55%)' }}>
                <Rocket size={28} tilt={15} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                {RANKS.map((r, i) => (
                  <span key={i} style={{
                    fontSize: 10, fontWeight: 800,
                    color: i <= rankIdx ? hexA(r.color, 0.95) : 'var(--on-mute)',
                  }}>
                    {r.name.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </HoloPanel>
      </div>

      {/* Planet collection */}
      <div className="px" style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <h2 style={{ fontSize: 19 }}>Planet Collection</h2>
          <span className="mono" style={{ fontSize: 11, color: 'var(--on-mute)' }}>
            {planets.filter(p => p.unlocked).length}/{planets.length}
          </span>
        </div>
        <div className="grid-3">
          {planets.map(pl => (
            <div
              key={pl.name}
              style={{
                padding: '14px 8px', borderRadius: 18, textAlign: 'center',
                background: pl.unlocked
                  ? `linear-gradient(180deg, ${hexA(pl.color, 0.18)}, rgba(255,255,255,0.03))`
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${pl.unlocked ? hexA(pl.color, 0.45) : 'rgba(255,255,255,0.08)'}`,
                boxShadow: pl.unlocked ? `0 0 18px ${hexA(pl.color, 0.28)}` : 'none',
                opacity: pl.unlocked ? 1 : 0.55,
              }}
            >
              <div style={{ display: 'grid', placeItems: 'center', height: 56 }}>
                {pl.unlocked
                  ? <Planet color={pl.color} size={50} ring />
                  : <div style={{
                      width: 46, height: 46, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px dashed rgba(255,255,255,0.18)',
                      display: 'grid', placeItems: 'center',
                      fontSize: 18, color: 'var(--on-mute)',
                    }}>🔒</div>
                }
              </div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 13, marginTop: 6 }}>{pl.name}</div>
              <div style={{ fontSize: 10, color: 'var(--on-mute)', fontWeight: 700 }}>{pl.module}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="px" style={{ marginTop: 20 }}>
        <h2 style={{ fontSize: 19, marginBottom: 10 }}>Badges Earned</h2>
        <div className="grid-3">
          {badges.map(b => (
            <div
              key={b.name}
              style={{
                padding: 12, borderRadius: 16, textAlign: 'center',
                background: b.earned
                  ? 'linear-gradient(180deg, rgba(255,217,61,0.18), rgba(255,217,61,0.04))'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${b.earned ? 'rgba(255,217,61,0.5)' : 'rgba(255,255,255,0.08)'}`,
                opacity: b.earned ? 1 : 0.5,
                boxShadow: b.earned ? '0 0 18px rgba(255,217,61,0.25)' : 'none',
              }}
            >
              <div style={{
                fontSize: 28,
                filter: b.earned ? 'drop-shadow(0 0 6px rgba(255,217,61,0.6))' : 'grayscale(1) opacity(0.4)',
              }}>
                {b.ico}
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, marginTop: 4 }}>{b.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Accuracy bar chart */}
      <div className="px" style={{ marginTop: 20 }}>
        <h2 style={{ fontSize: 19, marginBottom: 10 }}>Accuracy by Module</h2>
        <div className="card">
          <MiniBarChart data={modAccuracy} />
        </div>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}

/** Inline mini bar chart (no external library needed for this simple use) */
function MiniBarChart({ data }) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${data.length}, 1fr)`,
      gap: 10, alignItems: 'end', height: 120,
    }}>
      {data.map((d, i) => {
        const h = (d.value / max) * 96 + 6;
        return (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 6,
            height: '100%', justifyContent: 'flex-end',
          }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: hexA(d.color, 0.95) }}>
              {d.value ? `${d.value}%` : '-'}
            </div>
            <div style={{
              width: '100%', maxWidth: 28, height: h,
              borderRadius: 8,
              background: d.value
                ? `linear-gradient(180deg, ${d.color}, ${hexA(d.color, 0.6)})`
                : 'rgba(255,255,255,0.08)',
              boxShadow: d.value ? `0 0 12px ${hexA(d.color, 0.5)}` : 'none',
            }} />
            <div style={{
              fontSize: 10, color: 'var(--on-mute)', fontWeight: 700,
              textAlign: 'center', lineHeight: 1.1,
            }}>
              {d.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
