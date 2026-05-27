/** Confetti particle burst — shown on correct answers and level complete. */
export default function Burst() {
  const colors = ['#FFD93D','#FF8C42','#FF6FB5','#4ECDC4','#A78BFA','#6BCB77','#4D96FF'];
  const pieces = Array.from({ length: 22 }, (_, i) => {
    const angle = (i / 22) * 360 + (Math.random() * 30 - 15);
    const dist  = 70 + Math.random() * 90;
    const c     = colors[i % colors.length];
    return { angle, dist, c, delay: Math.random() * 0.12 };
  });

  return (
    <div className="burst" aria-hidden="true">
      {pieces.map((p, i) => (
        <i
          key={i}
          style={{
            background: p.c,
            '--r': `${p.angle}deg`,
            '--d': `-${p.dist}px`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
