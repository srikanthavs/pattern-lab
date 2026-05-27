/** SVG rocket — used on Welcome, Home rank bar, Level Complete. */
export default function Rocket({ size = 48, tilt = -10 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{
        transform: `rotate(${tilt}deg)`,
        filter: 'drop-shadow(0 6px 14px rgba(255,177,58,0.45))',
        display: 'block',
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rk-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cfd6ff" />
        </linearGradient>
        <linearGradient id="rk-fin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ff8c42" />
          <stop offset="1" stopColor="#ff5a8a" />
        </linearGradient>
        <radialGradient id="rk-win" cx=".5" cy=".4" r=".6">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#4ECDC4" />
        </radialGradient>
      </defs>
      <path d="M32 4 C40 14 44 24 44 36 L20 36 C20 24 24 14 32 4 Z" fill="url(#rk-body)" />
      <path d="M20 36 L12 50 L20 46 Z" fill="url(#rk-fin)" />
      <path d="M44 36 L52 50 L44 46 Z" fill="url(#rk-fin)" />
      <circle cx="32" cy="22" r="6" fill="url(#rk-win)" stroke="#7c5cff" strokeWidth="1.5" />
      <path d="M26 44 L38 44 L36 52 L28 52 Z" fill="#A78BFA" />
      <path d="M28 52 L32 62 L36 52 Z" fill="#FFD93D" opacity=".9" />
    </svg>
  );
}
