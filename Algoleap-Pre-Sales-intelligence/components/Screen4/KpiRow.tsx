import type { KpiItem } from "@/lib/types";

interface KpiRowProps {
  useCaseCount?: number;
  sourceCount?: number;
}

export function KpiRow({ useCaseCount = 11, sourceCount = 3 }: KpiRowProps) {
  const kpis: KpiItem[] = [
    { num: String(useCaseCount), label: "use cases identified" },
    { num: "Top 5", label: "surfaced for demo" },
    { num: "6", label: "dimensions scored" },
    { num: String(sourceCount), label: "sources synthesised" },
  ];

  return (
    <div className="kpi-row">
      {kpis.map((k, i) => (
        <div className="kpi-tile" key={i}>
          <div className="kpi-num">{k.num}</div>
          <div className="kpi-label">{k.label}</div>
        </div>
      ))}
    </div>
  );
}
