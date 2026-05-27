import { hexA, shade } from '../utils/helpers.js';

/**
 * Reusable Planet visual.
 * Renders as a radial-gradient sphere with optional ring and glow.
 */
export default function Planet({ color = '#A78BFA', size = 64, ring = false, glow = true, style }) {
  return (
    <div
      className="planet"
      style={{
        width: size,
        height: size,
        background: `
          radial-gradient(circle at 32% 30%, rgba(255,255,255,0.33) 0 8%, transparent 25%),
          radial-gradient(circle at 70% 75%, rgba(0,0,0,0.18) 0 18%, transparent 45%),
          linear-gradient(160deg, ${color}, ${shade(color, -22)})
        `,
        boxShadow: glow
          ? `0 0 32px ${hexA(color, 0.55)}, inset -8px -8px 18px ${shade(color, -30)}55`
          : 'none',
        ...style,
      }}
    >
      {ring && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-18%', top: '42%',
            width: '136%', height: '22%',
            borderRadius: '50%',
            background: `linear-gradient(90deg, ${hexA(color, 0)}, ${hexA(color, 0.7)}, ${hexA(color, 0)})`,
            transform: 'rotate(-18deg)',
            filter: 'blur(1px)',
          }}
        />
      )}
    </div>
  );
}
