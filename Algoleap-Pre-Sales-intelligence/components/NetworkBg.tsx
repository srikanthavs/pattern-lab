import { useMemo } from "react";

interface NetworkBgProps {
  opacity?: number;
}

export function NetworkBg({ opacity = 0.05 }: NetworkBgProps) {
  const nodes = useMemo(() => {
    const pts: { x: number; y: number; r: number }[] = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < 34; i++)
      pts.push({ x: rnd() * 100, y: rnd() * 100, r: 1.4 + rnd() * 2.2 });
    return pts;
  }, []);

  const links = useMemo(() => {
    const ls: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      let best = -1, bd = 1e9;
      for (let j = i + 1; j < nodes.length; j++) {
        const d =
          (nodes[i].x - nodes[j].x) ** 2 + (nodes[i].y - nodes[j].y) ** 2;
        if (d < bd) { bd = d; best = j; }
      }
      if (best >= 0 && bd < 380) ls.push([i, best]);
    }
    return ls;
  }, [nodes]);

  return (
    <div className="net-bg" style={{ opacity }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="#0F3D2E" strokeWidth="0.18"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.32} fill="#2A8B3D" />
        ))}
      </svg>
    </div>
  );
}
