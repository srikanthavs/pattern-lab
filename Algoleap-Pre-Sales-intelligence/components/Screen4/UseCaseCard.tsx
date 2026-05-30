"use client";

import { Check, Code } from "lucide-react";
import { ScoreBar } from "@/components/ScoreBar";
import { DIMENSIONS, SOURCE_META } from "@/lib/mock-data/use-cases";
import type { UseCase } from "@/lib/types";

interface UseCaseCardProps {
  uc: UseCase;
  company: string;
  onGenerate: (uc: UseCase) => void;
}

export function UseCaseCard({ uc, company, onGenerate }: UseCaseCardProps) {
  return (
    <div className="uc-card">
      <div className="uc-top">
        <div className="uc-rank">
          <span className="rank-hash">#</span>
          {uc.rank}
        </div>
        <div className="uc-head-main">
          <div className="uc-title">{uc.title}</div>
          <div className="uc-sub">{uc.sub}</div>
        </div>
        <div className="uc-score-badge">
          <div className="usb-num">
            {uc.total}
            <small> / 65</small>
          </div>
          <div className="usb-label">Weighted</div>
        </div>
      </div>

      <div className="uc-tags">
        {uc.cats.map((c) => (
          <span key={c} className="pill">
            {c}
          </span>
        ))}
      </div>

      <div className="uc-scores">
        {DIMENSIONS.map((d, i) => (
          <div className="score-line" key={d}>
            <div className="score-name">{d}</div>
            <ScoreBar value={uc.scores[i]} animate />
            <div className="score-val">{uc.scores[i]}</div>
          </div>
        ))}
      </div>

      <div className="uc-why">
        <div className="why-label">Why this fits {company}</div>
        <ul>
          {uc.why.map((w, i) => (
            <li key={i}>
              <Check size={13} /> {w}
            </li>
          ))}
        </ul>
      </div>

      <div className="uc-foot">
        <div className="uc-sources">
          <span>Sources</span>
          <div className="src-icons">
            {uc.sources.map((s) => (
              <span
                key={s}
                className="src-chip"
                style={{ background: SOURCE_META[s]?.color }}
                title={SOURCE_META[s]?.label}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="uc-actions">
          <button className="btn btn-secondary" style={{ padding: "9px 16px" }}>
            View Details
          </button>
          <button
            className="btn btn-primary"
            style={{ padding: "9px 16px" }}
            onClick={() => onGenerate(uc)}
          >
            <Code size={16} /> Generate Demo Prompt
          </button>
        </div>
      </div>
    </div>
  );
}
