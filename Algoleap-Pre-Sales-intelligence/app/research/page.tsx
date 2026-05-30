"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/Layout/TopNav";
import { Footer } from "@/components/Layout/Footer";
import { NetworkBg } from "@/components/NetworkBg";
import { ProgressCard } from "@/components/Screen2/ProgressCard";
import { ResearchReport } from "@/components/Screen2/ResearchReport";
import { STAGES, REPORT, ENTITIES } from "@/lib/mock-data/research-stages";
import type { SessionForm, ReportSection, EntityMap } from "@/lib/types";

interface ResearchData {
  sections: ReportSection[];
  entities: EntityMap;
}

export default function ResearchPage() {
  const router = useRouter();
  const [form, setForm] = useState<SessionForm>({
    company: "Coop Sverige",
    department: "Supply Chain",
    stakeholder: "VP of Supply Chain",
    context: "",
  });

  // animation state
  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [animDone, setAnimDone] = useState(false);

  // API state
  const [apiData, setApiData] = useState<ResearchData | null>(null);
  const [apiError, setApiError] = useState(false);
  const apiDoneRef = useRef(false);

  // derived
  const bothReady = animDone && (apiData !== null || apiError);

  useEffect(() => {
    const stored = sessionStorage.getItem("psi_form");
    if (stored) {
      try { setForm(JSON.parse(stored)); } catch {}
    }
  }, []);

  // kick off API call as soon as form is loaded
  useEffect(() => {
    if (apiDoneRef.current) return;
    apiDoneRef.current = true;

    async function runResearch() {
      try {
        const formStored = sessionStorage.getItem("psi_form");
        const f: SessionForm = formStored ? JSON.parse(formStored) : form;

        const res = await fetch("/api/research", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: f.company,
            department: f.department,
            stakeholder: f.stakeholder,
            context: f.context,
          }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json() as ResearchData & { error?: string };
        if (data.error) throw new Error(data.error);

        sessionStorage.setItem("psi_research", JSON.stringify(data));
        setApiData(data);
      } catch (err) {
        console.warn("Research API failed, using mock data:", err);
        setApiError(true);
      }
    }

    runResearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // elapsed timer
  useEffect(() => {
    if (bothReady) return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [bothReady]);

  // stage progression (stops at last stage until API is done)
  useEffect(() => {
    if (current >= STAGES.length) {
      setAnimDone(true);
      return;
    }
    const dur = current === 0 ? 900 : 1100 + Math.random() * 500;
    const t = setTimeout(() => setCurrent((c) => c + 1), dur);
    return () => clearTimeout(t);
  }, [current]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const reportSections = apiData?.sections ?? REPORT;
  const reportEntities = apiData?.entities ?? ENTITIES;

  return (
    <div className="app-shell">
      <TopNav step={2} maxStep={bothReady ? 2 : 1} />
      <main className="main">
        {!bothReady ? (
          <div className="container screen-enter">
            <div className="research-head">
              <div className="research-banner">
                <NetworkBg opacity={0.08} />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div className="rb-label">Researching</div>
                  <div className="rb-co">
                    {form.company} &middot; {form.department}
                  </div>
                </div>
                <div className="rb-spinner" style={{ position: "relative", zIndex: 2 }}>
                  <div className="spinner" />
                </div>
              </div>
            </div>

            <ProgressCard stages={STAGES} current={current} />

            <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
              {animDone && !apiError ? (
                <div className="elapsed">
                  <span className="dot" /> Finalizing research&hellip; {fmt(elapsed)}
                </div>
              ) : (
                <div className="elapsed">
                  <span className="dot" /> Elapsed {fmt(elapsed)} &middot; synthesizing across 7 dimensions
                </div>
              )}
            </div>
          </div>
        ) : (
          <ResearchReport
            company={form.company}
            department={form.department}
            sections={reportSections}
            entities={reportEntities}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
