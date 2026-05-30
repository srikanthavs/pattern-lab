"use client";

import { useRouter } from "next/navigation";
import { Plus, Check, Play } from "lucide-react";

const STEP_LABELS = ["New Session", "Research", "Manual Research", "Briefing"];

interface TopNavProps {
  step: number;
  maxStep: number;
}

export function TopNav({ step, maxStep }: TopNavProps) {
  const router = useRouter();

  const ROUTES = ["/", "/research", "/manual-input", "/output"];

  function goStep(n: number) {
    if (n <= maxStep) router.push(ROUTES[n - 1]);
  }

  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <div className="logo" onClick={() => router.push("/")}>
          <div className="logo-mark">
            <Play size={13} strokeWidth={0} fill="#3DA854" color="#3DA854" />
          </div>
          <div className="logo-word">
            algo<b>leap</b>
          </div>
        </div>

        <div className="breadcrumb">
          {STEP_LABELS.map((label, i) => {
            const n = i + 1;
            const cls = n === step ? "active" : n <= maxStep ? "done" : "";
            return (
              <span key={n} style={{ display: "contents" }}>
                {i > 0 && <div className="crumb-sep" />}
                <div
                  className={`crumb ${cls}`}
                  onClick={() => cls === "done" && goStep(n)}
                >
                  <div className="crumb-dot">
                    {n <= maxStep && n !== step ? (
                      <Check size={11} />
                    ) : (
                      n
                    )}
                  </div>
                  <span>{label}</span>
                </div>
              </span>
            );
          })}
        </div>

        <div className="nav-right">
          <div className="nav-link" onClick={() => router.push("/")}>
            <Plus size={14} /> New Session
          </div>
          <div className="avatar">SK</div>
        </div>
      </div>
    </nav>
  );
}
