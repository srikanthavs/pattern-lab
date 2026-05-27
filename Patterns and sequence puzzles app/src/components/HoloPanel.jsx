import { hexA } from '../utils/helpers.js';

/**
 * Colored glass card with subtle glow.
 * Used as hero cards on Home, Module screens, Gameplay, etc.
 */
export default function HoloPanel({ children, color = '#A78BFA', style, className }) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        borderRadius: 22,
        padding: 14,
        background: `linear-gradient(180deg, ${hexA(color, 0.15)}, rgba(255,255,255,0.03))`,
        border: `1px solid ${hexA(color, 0.35)}`,
        boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 24px ${hexA(color, 0.18)}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
