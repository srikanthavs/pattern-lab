import { NARRATIVE as MOCK_NARRATIVE } from "@/lib/mock-data/company-briefing";
import type { NarrativeBlock } from "@/lib/types";

interface StrategicNarrativeProps {
  narrative?: NarrativeBlock[];
}

export function StrategicNarrative({ narrative = MOCK_NARRATIVE }: StrategicNarrativeProps) {
  return (
    <div className="narrative reveal">
      <h2 className="t-h2">What this company will find valuable</h2>
      {narrative.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
        if (block.type === "quote")
          return (
            <div className="pullquote" key={i}>
              <p>{block.text}</p>
            </div>
          );
        return null;
      })}
    </div>
  );
}
