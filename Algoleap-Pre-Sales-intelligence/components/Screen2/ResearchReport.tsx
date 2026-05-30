"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Clock, ChevronDown, Layers, CheckCircle, Database, ArrowRight } from "lucide-react";
import { STAGES } from "@/lib/mock-data/research-stages";
import type { ReportSection, EntityMap } from "@/lib/types";

interface ResearchReportProps {
  company: string;
  department: string;
  sections: ReportSection[];
  entities: EntityMap;
}

export function ResearchReport({ company, department, sections, entities }: ResearchReportProps) {
  const [open, setOpen] = useState(0);
  const router = useRouter();
  const toggle = (i: number) => setOpen(open === i ? -1 : i);

  const entityGroups: [string, string[]][] = [
    ["Company", entities.company],
    ["Stakeholders", entities.stakeholders],
    ["Technologies", entities.technologies],
    ["Suppliers", entities.suppliers],
  ];

  return (
    <div className="container screen-enter">
      <div className="research-head">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <div className="acc-check" style={{ width: 24, height: 24 }}>
            <Check size={14} />
          </div>
          <h1 className="t-h1">Research complete</h1>
        </div>
        <p className="t-body" style={{ color: "var(--muted)" }}>
          {company} &middot; {department} &nbsp;&middot;&nbsp; 7 dimensions analyzed
        </p>
      </div>

      <div className="report-layout">
        <div>
          {sections.map((sec, i) => {
            const stage = STAGES[i];
            const isOpen = open === i;
            return (
              <div key={i} className={`accordion-item ${isOpen ? "open" : ""}`}>
                <div className="accordion-head" onClick={() => toggle(i)}>
                  <div className="acc-num">{String(stage.id).padStart(2, "0")}</div>
                  <div className="acc-titles">
                    <div className="acc-title">{stage.title}</div>
                    <div className="acc-readtime">
                      <Clock size={12} /> {sec.readtime}
                    </div>
                  </div>
                  <div className="acc-check">
                    <Check size={11} />
                  </div>
                  <ChevronDown size={18} className="acc-chevron" />
                </div>
                {isOpen && (
                  <div className="acc-body">
                    <div className="acc-body-inner">
                      {sec.paras.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                      <ul>
                        {sec.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <aside className="card summary-panel">
          <h4>Research Summary</h4>
          {entityGroups.map(([label, items]) => (
            <div className="entity-group" key={label}>
              <div className="eg-label">{label}</div>
              <div className="entity-tags">
                {items.map((it) => (
                  <span key={it} className="pill" style={{ fontSize: 11.5 }}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 8 }}>
            <div className="summary-stat">
              <Layers size={17} />
              <span className="ss-text">Use case hypotheses generated</span>
            </div>
            <div className="summary-stat">
              <CheckCircle size={17} />
              <span className="ss-text">Strategic synthesis complete</span>
            </div>
            <div className="summary-stat">
              <Database size={17} />
              <span className="ss-text">7 dimensions analyzed</span>
            </div>
          </div>

          <button
            className="btn btn-primary btn-block"
            style={{ marginTop: 18 }}
            onClick={() => router.push("/manual-input")}
          >
            Add Manual Research <ArrowRight size={16} />
          </button>
        </aside>
      </div>
    </div>
  );
}
