"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { TopNav } from "@/components/Layout/TopNav";
import { Footer } from "@/components/Layout/Footer";
import { SourceCard } from "@/components/Screen3/SourceCard";
import { AddSourceButton } from "@/components/Screen3/AddSourceButton";
import { MANUAL_SOURCES_PRESET } from "@/lib/mock-data/company-briefing";
import type { ManualSource } from "@/lib/types";

export default function ManualInputPage() {
  const router = useRouter();
  const [sources, setSources] = useState<ManualSource[]>(MANUAL_SOURCES_PRESET);

  const addSource = () => {
    setSources([
      ...sources,
      { id: Date.now(), source: "ChatGPT", content: "", preset: false },
    ]);
  };

  const updateCard = (id: number, next: ManualSource) =>
    setSources(sources.map((s) => (s.id === id ? next : s)));

  const removeCard = (id: number) =>
    setSources(sources.filter((s) => s.id !== id));

  const manualCount = sources.filter((s) => s.content.trim().length > 0).length;
  const total = manualCount + 1;

  function proceed() {
    // save sources so the output page can include them in the API call
    sessionStorage.setItem("psi_manual_sources", JSON.stringify(sources));
    router.push("/output");
  }

  function skip() {
    sessionStorage.setItem("psi_manual_sources", JSON.stringify([]));
    router.push("/output");
  }

  return (
    <div className="app-shell">
      <TopNav step={3} maxStep={3} />
      <main className="main">
        <div className="container screen-enter">
          <div className="manual-head">
            <h1 className="t-h1">Add research from other AI tools</h1>
            <p className="t-body-lg" style={{ color: "var(--muted)", marginTop: 8 }}>
              Paste deep research reports from your other tools. The application will synthesize
              all sources together with the automated research into a single briefing.
            </p>
          </div>

          <div className="source-stack">
            <AddSourceButton onClick={addSource} />
            {sources.map((card) => (
              <SourceCard
                key={card.id}
                card={card}
                onChange={(next) => updateCard(card.id, next)}
                onRemove={() => removeCard(card.id)}
              />
            ))}
          </div>

          <div className="manual-footer">
            <div className="sources-ready">
              <CheckCircle size={18} />
              {total} sources ready (1 automated + {manualCount} manual)
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn btn-secondary" onClick={skip}>
                Skip, use automated only
              </button>
              <button className="btn btn-primary" onClick={proceed}>
                Generate Briefing &amp; Use Cases <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
