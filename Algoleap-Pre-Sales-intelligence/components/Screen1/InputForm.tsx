"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { NetworkBg } from "@/components/NetworkBg";
import { StatCallouts } from "@/components/Screen1/StatCallouts";
import { ApiStatusBadge } from "@/components/ApiStatusBadge";
import type { SessionForm } from "@/lib/types";

interface InputFormProps {
  form: SessionForm;
  setForm: (f: SessionForm) => void;
  onStart: () => void;
}

export function InputForm({ form, setForm, onStart }: InputFormProps) {
  const update =
    (key: keyof SessionForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const canStart = form.company.trim().length > 0;

  return (
    <div className="screen-enter">
      <section className="hero">
        <NetworkBg opacity={0.05} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-eyebrow">
            <Sparkles size={13} /> PRE-SALES INTELLIGENCE
          </div>
          <h1 className="t-display">Build a tailored client demo in 30 minutes</h1>
          <p className="hero-sub">
            Research any company, synthesize their strategic context, surface the strongest
            AI use cases for their supply chain, and generate ready-to-use Claude Code prompts
            to build demos that win.
          </p>
        </div>

        <div className="container">
          <div className="card form-card">
            <div className="form-card-head">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <h3 className="t-h3">Start New Prospect Research</h3>
                  <p className="t-small" style={{ marginTop: 4 }}>
                    Enter a target company to begin multi-source research.
                  </p>
                </div>
                <ApiStatusBadge />
              </div>
            </div>

            <div className="form-grid">
              <div className="field">
                <label className="label">
                  Company Name <span className="req">*</span>
                </label>
                <input
                  className="input input-lg"
                  placeholder="e.g. Coop Sverige"
                  value={form.company}
                  onChange={update("company")}
                  onKeyDown={(e) => e.key === "Enter" && canStart && onStart()}
                  autoFocus
                />
              </div>

              <div className="form-row-2">
                <div className="field">
                  <label className="label">Department</label>
                  <select
                    className="select"
                    value={form.department}
                    onChange={update("department")}
                  >
                    <option>Supply Chain</option>
                    <option>Procurement</option>
                    <option>Logistics &amp; Distribution</option>
                    <option>Merchandising</option>
                    <option>Finance Operations</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label">
                    Target Stakeholder <span className="opt">optional</span>
                  </label>
                  <input
                    className="input"
                    placeholder="e.g. VP of Supply Chain"
                    value={form.stakeholder}
                    onChange={update("stakeholder")}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">
                  Additional Context <span className="opt">optional</span>
                </label>
                <textarea
                  className="textarea"
                  rows={3}
                  placeholder="Anything you already know: recent news, the deal context, who you are meeting, what they care about."
                  value={form.context}
                  onChange={update("context")}
                />
              </div>

              <button
                className="btn btn-primary btn-lg btn-block"
                disabled={!canStart}
                onClick={onStart}
              >
                Start Research <ArrowRight size={17} />
              </button>
              <p className="t-small" style={{ textAlign: "center", marginTop: -4 }}>
                Research takes 5 to 7 minutes. You will be able to add manual research after.
              </p>
            </div>
          </div>

          <StatCallouts />
        </div>
      </section>
    </div>
  );
}
