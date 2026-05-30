"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { TopNav } from "@/components/Layout/TopNav";
import { Footer } from "@/components/Layout/Footer";
import { CompanyBriefing } from "@/components/Screen4/CompanyBriefing";
import { StrategicNarrative } from "@/components/Screen4/StrategicNarrative";
import { KpiRow } from "@/components/Screen4/KpiRow";
import { UseCaseList } from "@/components/Screen4/UseCaseList";
import { PromptModal } from "@/components/Screen4/PromptModal";
import {
  BRIEFING as MOCK_BRIEFING,
  NARRATIVE as MOCK_NARRATIVE,
} from "@/lib/mock-data/company-briefing";
import { USE_CASES as MOCK_USE_CASES } from "@/lib/mock-data/use-cases";
import type {
  UseCase,
  CompanyBriefing as CompanyBriefingType,
  NarrativeBlock,
  SessionForm,
  ManualSource,
} from "@/lib/types";

interface OutputData {
  briefing: CompanyBriefingType;
  narrative: NarrativeBlock[];
  useCases: UseCase[];
}

function GeneratingScreen({ company }: { company: string }) {
  const [dot, setDot] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setDot((d) => (d + 1) % 4), 500);
    return () => clearInterval(t);
  }, []);
  const dots = ".".repeat(dot);

  return (
    <div
      className="container screen-enter"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 20,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "3px solid rgba(42,139,61,0.15)",
          borderTopColor: "var(--green)",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <div style={{ textAlign: "center" }}>
        <div className="t-h3" style={{ marginBottom: 6 }}>
          Generating briefing for {company}{dots}
        </div>
        <div className="t-small">
          Synthesizing research into strategic briefing and ranked use cases
        </div>
      </div>
    </div>
  );
}

export default function OutputPage() {
  const [activeUc, setActiveUc] = useState<UseCase | null>(null);
  const [outputData, setOutputData] = useState<OutputData | null>(null);
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState("Coop Sverige");
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    async function generateOutput() {
      try {
        const formRaw = sessionStorage.getItem("psi_form");
        const researchRaw = sessionStorage.getItem("psi_research");

        const form: SessionForm = formRaw
          ? JSON.parse(formRaw)
          : { company: "Coop Sverige", department: "Supply Chain", stakeholder: "", context: "" };

        setCompany(form.company);

        const research = researchRaw ? JSON.parse(researchRaw) : null;

        // collect manual sources with content
        const manualSourcesRaw = sessionStorage.getItem("psi_manual_sources");
        const manualSources: ManualSource[] = manualSourcesRaw
          ? JSON.parse(manualSourcesRaw)
          : [];
        const filledSources = manualSources.filter((s) => s.content.trim().length > 0);

        if (!research) {
          // no research data: use mock output
          setOutputData({
            briefing: MOCK_BRIEFING,
            narrative: MOCK_NARRATIVE,
            useCases: MOCK_USE_CASES,
          });
          setLoading(false);
          return;
        }

        const res = await fetch("/api/output", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: form.company,
            department: form.department,
            stakeholder: form.stakeholder,
            context: form.context,
            sections: research.sections,
            manualSources: filledSources,
          }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setOutputData(data);
      } catch (err) {
        console.warn("Output API failed, using mock data:", err);
        setOutputData({
          briefing: MOCK_BRIEFING,
          narrative: MOCK_NARRATIVE,
          useCases: MOCK_USE_CASES,
        });
      } finally {
        setLoading(false);
      }
    }

    generateOutput();
  }, []);

  const briefing = outputData?.briefing ?? MOCK_BRIEFING;
  const narrative = outputData?.narrative ?? MOCK_NARRATIVE;
  const useCases = outputData?.useCases ?? MOCK_USE_CASES;
  const displayCompany = outputData?.briefing?.company ?? company;

  return (
    <div className="app-shell">
      <TopNav step={4} maxStep={4} />
      <main className="main">
        {loading ? (
          <GeneratingScreen company={company} />
        ) : (
          <div className="container screen-enter">
            {/* Section A — Company Briefing */}
            <div className="section-head">
              <h1 className="t-h1">Company Briefing</h1>
              <div className="divider" />
              <span className="pill sh-tag">
                <Check size={12} /> Synthesized
              </span>
            </div>

            <CompanyBriefing briefing={briefing} />

            <div style={{ marginTop: 44 }}>
              <StrategicNarrative narrative={narrative} />
            </div>

            {/* Section B — KPI Row */}
            <KpiRow useCaseCount={useCases.length} sourceCount={3} />

            {/* Section C — Use Cases */}
            <div className="section-head" style={{ marginBottom: 6 }}>
              <h1 className="t-h1">Top AI Use Cases for {displayCompany}</h1>
              <div className="divider" />
            </div>
            <p
              className="t-body"
              style={{ color: "var(--muted)", marginBottom: 24, maxWidth: 720 }}
            >
              Ranked across 6 strategic dimensions. Each use case can be turned into a working
              demo using the generated Claude Code prompt.
            </p>

            <UseCaseList
              company={displayCompany}
              useCases={useCases}
              onGenerate={setActiveUc}
            />
          </div>
        )}
      </main>
      <Footer />

      <PromptModal uc={activeUc} onClose={() => setActiveUc(null)} />
    </div>
  );
}
