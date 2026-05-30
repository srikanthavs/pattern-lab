"use client";

import { useState } from "react";
import { Package } from "lucide-react";
import { UseCaseCard } from "@/components/Screen4/UseCaseCard";
import { USE_CASES as MOCK_USE_CASES, ALL_CATS } from "@/lib/mock-data/use-cases";
import type { UseCase } from "@/lib/types";

interface UseCaseListProps {
  company: string;
  useCases?: UseCase[];
  onGenerate: (uc: UseCase) => void;
}

export function UseCaseList({ company, useCases = MOCK_USE_CASES, onGenerate }: UseCaseListProps) {
  const [minScore, setMinScore] = useState(30);
  const [cats, setCats] = useState<string[]>([]);
  const [src, setSrc] = useState("All");

  const toggleCat = (c: string) =>
    setCats(cats.includes(c) ? cats.filter((x) => x !== c) : [...cats, c]);

  const filtered = useCases.filter((uc) => {
    if (uc.total < minScore) return false;
    if (cats.length && !cats.some((c) => uc.cats.includes(c))) return false;
    if (src !== "All" && !uc.sources.includes(src)) return false;
    return true;
  });

  return (
    <div className="uc-layout">
      <div className="uc-list">
        {filtered.map((uc) => (
          <UseCaseCard
            key={uc.rank}
            uc={uc}
            company={company}
            onGenerate={onGenerate}
          />
        ))}
        {filtered.length === 0 && (
          <div
            className="card"
            style={{ padding: 40, textAlign: "center", color: "var(--muted)" }}
          >
            No use cases match the current filters.
          </div>
        )}
      </div>

      <aside className="card filter-panel">
        <h4>Refine</h4>
        <div className="filter-group">
          <div className="fg-label">Minimum score</div>
          <div className="range-row">
            <input
              type="range"
              min="30"
              max="58"
              value={minScore}
              onChange={(e) => setMinScore(Number(e.target.value))}
            />
            <span className="range-val">{minScore}</span>
          </div>
        </div>
        <div className="filter-group">
          <div className="fg-label">Category</div>
          {ALL_CATS.map((c) => (
            <label className="check-row" key={c}>
              <input
                type="checkbox"
                checked={cats.includes(c)}
                onChange={() => toggleCat(c)}
              />{" "}
              {c}
            </label>
          ))}
        </div>
        <div className="filter-group">
          <div className="fg-label">Source mentioned</div>
          <select
            className="select"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          >
            <option value="All">All sources</option>
            <option value="G">Gemini</option>
            <option value="C">Claude</option>
            <option value="A">Algoleap auto</option>
          </select>
        </div>
        <div className="divider" style={{ margin: "4px 0 18px" }} />
        <button
          className="btn btn-primary btn-block"
          onClick={() => onGenerate(useCases[0])}
        >
          <Package size={16} /> Export Briefing + Top 5
        </button>
        <p
          className="t-small"
          style={{ marginTop: 10, textAlign: "center", fontSize: 12 }}
        >
          Combines briefing and top 5 prompts into a single export.
        </p>
      </aside>
    </div>
  );
}
