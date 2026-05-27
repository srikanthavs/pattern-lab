import Rocket from './Rocket.jsx';

/**
 * Top HUD shown during gameplay.
 * Shows stars, streak, rank, puzzle counter, and progress bar.
 */
export default function PuzzleHUD({ stars, streak, rank, moduleId, level, current, total, onBack }) {
  const shortRank = rank ? rank.split(' ')[0] : 'Cadet';
  const pct = total > 0 ? ((current) / total) * 100 : 0;

  return (
    <>
      <div style={{
        padding: '12px 14px 0',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <button className="back-btn" onClick={onBack} aria-label="Back">‹</button>

        <span className="hud-chip-gold" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '8px 11px', borderRadius: 999,
          fontWeight: 800, fontSize: 13,
          background: 'rgba(255,217,61,0.12)',
          border: '1px solid rgba(255,217,61,0.35)',
          color: '#ffe989',
        }}>⭐ {stars}</span>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '8px 11px', borderRadius: 999,
          fontWeight: 800, fontSize: 13,
          background: 'rgba(255,111,181,0.12)',
          border: '1px solid rgba(255,111,181,0.35)',
          color: '#ffc4dd',
        }}>🔥 {streak}</span>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '8px 11px', borderRadius: 999,
          fontWeight: 800, fontSize: 13,
          background: 'rgba(78,205,196,0.12)',
          border: '1px solid rgba(78,205,196,0.35)',
          color: '#9af3ec',
        }}>🛰️ {shortRank}</span>

        <span style={{ flex: 1 }} />

        <span className="mono" style={{ fontSize: 11, color: 'var(--on-mute)', letterSpacing: '.1em' }}>
          {current}/{total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="px" style={{ marginTop: 10 }}>
        <div className="progress">
          <i style={{ width: `${pct}%` }} />
        </div>
      </div>
    </>
  );
}
