import Rocket from '../components/Rocket.jsx';
import { hexA, shade } from '../utils/helpers.js';

/**
 * Welcome / splash screen.
 * The "Tap to Launch" button is the audio-unlock gate for Web Speech API.
 * onStart is called after the unlock, navigating to Home.
 */
export default function Welcome({ onStart }) {
  const glyphs = [
    { ico: '▲', color: '#FFD93D', angle: 0   },
    { ico: '●', color: '#FF6FB5', angle: 60  },
    { ico: '■', color: '#4ECDC4', angle: 120 },
    { ico: '★', color: '#A78BFA', angle: 200 },
    { ico: '◆', color: '#4D96FF', angle: 270 },
    { ico: '▼', color: '#6BCB77', angle: 320 },
  ];

  function handleStart() {
    // Unlock Web Speech API on first user gesture (required by Safari/iOS)
    try {
      const utter = new window.SpeechSynthesisUtterance('');
      utter.volume = 0;
      window.speechSynthesis.speak(utter);
    } catch (_) { /* speech not available — no-op */ }
    onStart();
  }

  return (
    <div className="screen no-nav screen-enter">
      <div
        className="full-pad"
        style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* ── TOP: badge + gradient title + subtitle ─────────────── */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 10, marginTop: 24,
        }}>
          <span
            className="pill purple mono"
            style={{ letterSpacing: '.18em', fontSize: 11 }}
          >
            • PATTERN LAB • EST. 2026 •
          </span>

          <h1 style={{
            fontSize: 'clamp(28px, 7vw, 38px)',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: 0,
            fontWeight: 700,
          }}>
            Captain Advaith's
          </h1>

          <h1 style={{
            fontSize: 'clamp(36px, 9vw, 50px)',
            textAlign: 'center',
            lineHeight: 1.15,
            margin: '2px 0 0',
            whiteSpace: 'nowrap',
            background: 'linear-gradient(90deg, #FFD93D, #FF6FB5, #4ECDC4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            paddingBottom: '0.14em',
            fontWeight: 800,
          }}>
            Pattern Lab
          </h1>

          <div style={{
            color: 'var(--on-dim)',
            textAlign: 'center',
            maxWidth: 320,
            fontSize: 15,
            fontWeight: 600,
          }}>
            Solve cosmic puzzles, unlock planets, and become a Pattern Genius.
          </div>
        </div>

        {/* ── CENTRE: Hero rocket + holographic orbits ────────────── */}
        <div style={{
          position: 'relative',
          height: 280,
          margin: '10px auto',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
        }}>
          {/* Concentric holographic rings */}
          <div
            className="holo-ring"
            style={{ width: 260, height: 260, top: 10 }}
          />
          <div
            className="holo-ring"
            style={{
              width: 200, height: 200, top: 40,
              animationDirection: 'reverse',
              borderColor: 'rgba(255,111,181,0.4)',
            }}
          />

          {/* Orbiting shape-glyph tiles */}
          {glyphs.map((g, i) => {
            const rad = i % 2 === 0 ? 110 : 80;
            const rx  = Math.cos((g.angle * Math.PI) / 180) * rad;
            const ry  = Math.sin((g.angle * Math.PI) / 180) * rad;
            return (
              <div
                key={i}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${rx}px)`,
                  top:  `calc(50% + ${ry}px)`,
                  transform: 'translate(-50%, -50%)',
                  width: 36, height: 36, borderRadius: 12,
                  display: 'grid', placeItems: 'center',
                  background: `linear-gradient(160deg, ${hexA(g.color, 0.95)}, ${shade(g.color, -25)})`,
                  color: '#1a0734', fontWeight: 800, fontSize: 18,
                  boxShadow: `0 0 18px ${hexA(g.color, 0.55)}`,
                  animation: `drift ${4 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`,
                }}
              >
                {g.ico}
              </div>
            );
          })}

          {/* Bobbing rocket hero */}
          <div style={{
            animation: 'bob 3.5s ease-in-out infinite',
            filter: 'drop-shadow(0 10px 30px rgba(255,177,58,0.5))',
            zIndex: 1,
          }}>
            <Rocket size={130} tilt={-12} />
          </div>
        </div>

        {/* ── BOTTOM: Launch button + audio note ──────────────────── */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 14, paddingBottom: 8,
        }}>
          <button
            className="btn"
            style={{
              minWidth: 240,
              fontSize: 22,
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
            onClick={handleStart}
          >
            🚀 Tap to Launch
          </button>

          <div className="mono" style={{
            fontSize: 11,
            color: 'var(--on-mute)',
            letterSpacing: '.12em',
          }}>
            ENABLES SOUND ON FIRST TAP
          </div>
        </div>
      </div>
    </div>
  );
}
