import Burst from '../components/Burst.jsx';
import Planet from '../components/Planet.jsx';
import { MODULES } from '../data/modules.js';
import { hexA, formatTime } from '../utils/helpers.js';

/** Level Complete celebration screen. */
export default function LevelComplete({ result, moduleId, onHome, onNext, onProgress }) {
  const mod = MODULES.find(m => m.id === moduleId) || MODULES[0];
  const { stars = 3, time = 60, accuracy = 100, starsEarned = stars * 6 } = result || {};

  return (
    <div className="screen no-nav screen-enter" style={{ position: 'relative' }}>
      <Burst />

      <div className="full-pad" style={{
        minHeight: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        {/* ── TOP: headline + planet + stars ──────────────────────── */}
        <div style={{ textAlign: 'center', marginTop: 18 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.2em', color: 'var(--on-mute)' }}>
            LEVEL COMPLETE
          </div>
          <h1 style={{ fontSize: 42, marginTop: 6, lineHeight: 1 }}>
            <span style={{
              background: 'linear-gradient(90deg, #FFD93D, #FF6FB5, #4ECDC4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Mission
            </span>
            <br />Accomplished
          </h1>

          {/* Planet hero */}
          <div style={{
            position: 'relative', margin: '20px auto 10px',
            width: 200, height: 200, display: 'grid', placeItems: 'center',
          }}>
            <div className="holo-ring" style={{ width: 200, height: 200 }} />
            <div style={{ animation: 'bob 3s ease-in-out infinite' }}>
              <Planet color={mod.color} size={140} ring />
            </div>
          </div>

          {/* Star rating */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 12 }}>
            {[0, 1, 2].map(i => (
              <div
                key={i}
                style={{
                  fontSize: 50, lineHeight: 1,
                  color: i < stars ? '#FFD93D' : 'rgba(255,255,255,0.15)',
                  filter: i < stars ? 'drop-shadow(0 0 12px rgba(255,217,61,0.7))' : 'none',
                  animation: i < stars ? `bob 2.5s ease-in-out infinite ${i * 0.2}s` : 'none',
                }}
              >
                ★
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS CARD ──────────────────────────────────────────── */}
        <div style={{ margin: '18px 0' }}>
          <div className="card" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10, textAlign: 'center',
          }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.1em' }}>TIME</div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 22, color: '#9af3ec' }}>
                {formatTime(time)}
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.1em' }}>ACCURACY</div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 22, color: '#FFD93D' }}>
                {accuracy}%
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.1em' }}>EARNED</div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 22, color: '#ffb8d8' }}>
                +{starsEarned} ⭐
              </div>
            </div>
          </div>

          {/* New planet unlocked */}
          <div style={{
            marginTop: 12, padding: 14, borderRadius: 22,
            background: `linear-gradient(120deg, ${hexA(mod.color, 0.25)}, rgba(255,255,255,0.04))`,
            border: `1px solid ${hexA(mod.color, 0.5)}`,
            display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: `0 0 24px ${hexA(mod.color, 0.35)}`,
          }}>
            <Planet color={mod.color} size={56} ring />
            <div style={{ flex: 1 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.14em' }}>
                PLANET PROGRESS
              </div>
              <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 18 }}>
                {mod.title}
              </div>
              <div style={{ fontSize: 12, color: 'var(--on-dim)', fontWeight: 600 }}>
                Great work, Captain!
              </div>
            </div>
          </div>
        </div>

        {/* ── CTAs ────────────────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="btn block" onClick={onNext}>🚀 Play Next Level</button>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn ghost" style={{ flex: 1 }} onClick={onProgress}>📈 Progress</button>
            <button className="btn ghost" style={{ flex: 1 }} onClick={onHome}>🪐 Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
