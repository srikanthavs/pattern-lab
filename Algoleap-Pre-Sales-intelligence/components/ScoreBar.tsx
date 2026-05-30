"use client";

import { useEffect, useState } from "react";

interface ScoreBarProps {
  value: number;
  animate?: boolean;
}

export function ScoreBar({ value, animate = false }: ScoreBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth((value / 10) * 100), animate ? 120 : 0);
    return () => clearTimeout(t);
  }, [value, animate]);

  return (
    <div className="score-track">
      <div className="score-fill" style={{ width: `${width}%` }} />
    </div>
  );
}
