"use client";

import { Check } from "lucide-react";
import type { ResearchStage } from "@/lib/types";

type StageState = "done" | "active" | "pending";

interface ProgressCardProps {
  stages: ResearchStage[];
  current: number;
}

export function ProgressCard({ stages, current }: ProgressCardProps) {
  return (
    <div className="card progress-card">
      {stages.map((stage, i) => {
        const state: StageState =
          i < current ? "done" : i === current ? "active" : "pending";
        return (
          <div key={stage.id} className={`stage-row ${state}`}>
            <div className={`stage-icon ${state}`}>
              {state === "done" ? (
                <Check size={15} />
              ) : state === "active" ? (
                <div className="spinner-sm" />
              ) : (
                <span style={{ fontSize: 12, fontWeight: 600 }}>{stage.id}</span>
              )}
            </div>
            <div className="stage-body">
              <div className="stage-title">{stage.title}</div>
              <div className="stage-desc">{stage.desc}</div>
            </div>
            <div className={`stage-status ${state}`} style={{ marginTop: 3 }}>
              {state === "done" ? "Complete" : state === "active" ? "Working" : "Pending"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
