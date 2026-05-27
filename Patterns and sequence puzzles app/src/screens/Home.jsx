import Planet from '../components/Planet.jsx';
import Rocket from '../components/Rocket.jsx';
import HoloPanel from '../components/HoloPanel.jsx';
import PatternLoop from '../components/PatternLoop.jsx';
import { MODULES, RANKS, getRankIdx, getRankProgress } from '../data/modules.js';
import { hexA, shade } from '../utils/helpers.js';

/** Home screen: avatar, rank bar, 6 module tiles, daily challenge promo. */
export default function Home({ appState, onOpenModule, onSettings, onNav, onProfile }) {
  const { name, stars, streak } = appState;
  const rankIdx  = getRankIdx(stars);
  const rankPct  = getRankProgress(stars);
  const rank     = RANKS[rankIdx];
  const nextRank = RANKS[Math.min(rankIdx + 1, RANKS.length - 1)];

  return (
    <div className="screen screen-enter">

      {/* ── TOP CHROME: avatar, name, stars/streak, settings ────── */}
      <div style={{
        padding: '14px 16px 0',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {/* Astronaut avatar → goes to Progress */}
        <button
          onClick={onProfile}
          aria-label="View progress"
          style={{
            width: 52, height: 52, borderRadius: 18,
            background: 'linear-gradient(160deg, #A78BFA, #4ECDC4)',
            border: '2px solid rgba(255,255,255,0.3)',
            display: 'grid', placeItems: 'center', fontSize: 28,
            boxShadow: '0 0 18px rgba(167,139,250,0.5)',
            flexShrink: 0,
          }}
        >
          👨‍🚀
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, color: 'var(--on-mute)', fontWeight: 800, letterSpacing: '.08em' }}>
            WELCOME BACK
          </div>
          <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 22, lineHeight: 1 }}>
            {name}
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
            <span className="pill gold">⭐ {stars}</span>
            <span className="pill pink">🔥 {streak} day{streak !== 1 ? 's' : ''}</span>
          </div>
        </div>

        <button
          className="icon-btn hud"
          onClick={onSettings}
          aria-label="Settings"
          style={{
            width: 48, height: 48, fontSize: 22,
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 14,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ⚙️
        </button>
      </div>

      {/* ── RANK PROGRESS BAR ───────────────────────────────────── */}
      <div className="px" style={{ marginTop: 16 }}>
        <HoloPanel color="#A78BFA">
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--on-mute)', letterSpacing: '.14em' }}>
                CURRENT RANK
              </div>
              <div style={{ fontFamily: 'var(--head)', fontSize: 20, fontWeight: 800, marginTop: 2 }}>
                {rank.ico} {rank.name}
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--on-dim)', fontWeight: 800, textAlign: 'right' }}>
              {rankIdx + 1} / {RANKS.length}<br />
              {rankIdx < RANKS.length - 1 && (
                <span style={{ color: 'var(--on-mute)' }}>Next: {nextRank.name}</span>
              )}
            </div>
          </div>

          {/* Rank progress bar with rocket cursor */}
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div className="progress">
              <i style={{ width: `${rankPct}%` }} />
            </div>
            <div style={{
              position: 'absolute',
              left: `${rankPct}%`,
              top: '50%',
              transform: 'translate(-50%, -55%)',
              animation: 'bob 2.2s ease-in-out infinite',
            }}>
              <Rocket size={32} tilt={20} />
            </div>
          </div>
        </HoloPanel>
      </div>

      {/* ── MISSION GALAXY header ───────────────────────────────── */}
      <div className="px" style={{
        marginTop: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <h2 style={{ fontSize: 22 }}>Mission Galaxy</h2>
          <div className="dim" style={{ fontSize: 13, fontWeight: 600 }}>Pick a planet to begin</div>
        </div>
      </div>

      {/* ── MODULE TILES 2-column grid ──────────────────────────── */}
      <div className="px" style={{ marginTop: 12 }}>
        <div className="grid-2">
          {MODULES.map(mod => (
            <ModuleTile
              key={mod.id}
              mod={mod}
              stars={appState.modules[mod.id].stars}
              locked={mod.unlock > stars}
              onOpen={onOpenModule}
            />
          ))}
        </div>
      </div>

      {/* ── DAILY CHALLENGE PROMO ───────────────────────────────── */}
      <div className="px" style={{ marginTop: 16 }}>
        <button
          onClick={() => onNav('daily')}
          style={{
            width: '100%', textAlign: 'left',
            background: 'linear-gradient(120deg, rgba(255,140,66,0.25), rgba(255,111,181,0.18))',
            border: '1px solid rgba(255,140,66,0.45)',
            borderRadius: 22, padding: 14,
            display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 0 28px rgba(255,140,66,0.25)',
          }}
        >
          <div style={{
            width: 50, height: 50, borderRadius: 16,
            background: 'linear-gradient(160deg, #FF8C42, #FF6FB5)',
            display: 'grid', placeItems: 'center', fontSize: 26,
            boxShadow: '0 0 18px rgba(255,140,66,0.6)',
            flexShrink: 0,
          }}>
            🎯
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--head)', fontWeight: 800, fontSize: 16 }}>
              Daily Challenge
            </div>
            <div style={{ fontSize: 12, color: 'var(--on-dim)', fontWeight: 600 }}>
              3 puzzles · Reward: +30 ⭐ + Comet Badge
            </div>
          </div>
          <span style={{ fontSize: 22, color: '#fff' }}>›</span>
        </button>
      </div>

      <div style={{ height: 18 }} />
    </div>
  );
}

/* ── Module Tile (planet card) ───────────────────────────────── */
function ModuleTile({ mod, stars, locked, onOpen }) {
  const starsMax = mod.starsMax || 30;

  return (
    <button
      onClick={() => !locked && onOpen(mod.id)}
      aria-label={`${mod.title}${locked ? ' (locked)' : ''}`}
      style={{
        position: 'relative',
        textAlign: 'left',
        padding: 14,
        borderRadius: 24,
        background: `linear-gradient(160deg, ${hexA(mod.color, 0.28)}, rgba(255,255,255,0.03))`,
        border: `1px solid ${hexA(mod.color, 0.42)}`,
        boxShadow: `0 18px 40px -18px ${hexA(mod.color, 0.55)}, inset 0 0 0 1px rgba(255,255,255,0.05)`,
        minHeight: 168,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        overflow: 'hidden',
        cursor: locked ? 'not-allowed' : 'pointer',
        opacity: locked ? 0.55 : 1,
      }}
    >
      {/* Planet decoration — top-right */}
      <div style={{ position: 'absolute', right: -18, top: -18, opacity: 0.6 }}>
        <Planet color={mod.color} size={92} ring={mod.ring} />
      </div>

      {/* Module info */}
      <div style={{ position: 'relative' }}>
        <div style={{
          fontSize: 11, fontWeight: 800,
          letterSpacing: '.08em',
          color: hexA(mod.color, 0.95),
        }}>
          MODULE 0{mod.num}
        </div>
        <div style={{
          fontFamily: 'var(--head)', fontWeight: 800,
          fontSize: 19, lineHeight: 1.1, marginTop: 4, paddingRight: 60,
        }}>
          {mod.title}
        </div>
        <div style={{ fontSize: 12, color: 'var(--on-dim)', marginTop: 4, paddingRight: 56 }}>
          {mod.skill}
        </div>
      </div>

      {/* PatternLoop preview + star count */}
      <div style={{
        position: 'relative',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginTop: 12,
      }}>
        <PatternLoop kind={mod.loop} color={mod.color} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <span className="pill" style={{
            background: hexA(mod.color, 0.18),
            borderColor: hexA(mod.color, 0.5),
            color: '#fff',
          }}>
            Age {mod.age}
          </span>
          <span style={{ fontSize: 11, color: 'var(--on-mute)', fontWeight: 700 }}>
            {locked ? `🔒 ${mod.unlock}⭐` : `⭐ ${stars}/${starsMax}`}
          </span>
        </div>
      </div>
    </button>
  );
}
