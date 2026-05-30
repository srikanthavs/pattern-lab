"use client";

import { useState } from "react";
import { Trash2, ChevronDown, ChevronUp } from "lucide-react";
import type { ManualSource } from "@/lib/types";

const SOURCE_OPTIONS = [
  "ChatGPT",
  "Gemini",
  "Claude",
  "Kimi",
  "DeepSeek",
  "Manus",
  "Qwen",
  "Other",
];
const SOURCE_COLORS: Record<string, string> = {
  ChatGPT: "#10A37F",
  Gemini: "#2D7A8C",
  Claude: "#2A8B3D",
  Kimi: "#6B7280",
  DeepSeek: "#1A5240",
  Manus: "#0F3D2E",
  Qwen: "#D97706",
  Other: "#374151",
};

interface SourceCardProps {
  card: ManualSource;
  onChange: (next: ManualSource) => void;
  onRemove: () => void;
}

export function SourceCard({ card, onChange, onRemove }: SourceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const color = SOURCE_COLORS[card.source] || "#374151";
  const preview =
    card.content.length > 220 && !expanded
      ? card.content.slice(0, 220) + "..."
      : card.content;

  return (
    <div className="card source-card">
      <div className="source-card-head">
        <div className="source-badge" style={{ background: color }}>
          {card.source.slice(0, 2)}
        </div>
        <select
          className="select"
          style={{ width: 190 }}
          value={card.source}
          onChange={(e) => onChange({ ...card, source: e.target.value })}
        >
          {SOURCE_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <div className="source-meta">
          <span className="char-count">
            {card.content.length.toLocaleString()} chars
          </span>
          <button className="icon-btn" onClick={onRemove} title="Remove source">
            <Trash2 size={15} />
          </button>
        </div>
      </div>
      <div className="source-card-body">
        {card.preset && !card.editing ? (
          <div>
            <div className="preview-text">{preview}</div>
            {card.content.length > 220 && (
              <button
                className="show-more"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Show more"}{" "}
                {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>
            )}
          </div>
        ) : (
          <textarea
            className="textarea"
            rows={5}
            placeholder="Paste the full deep research report here..."
            value={card.content}
            onChange={(e) => onChange({ ...card, content: e.target.value })}
            autoFocus={!card.preset}
          />
        )}
      </div>
    </div>
  );
}
