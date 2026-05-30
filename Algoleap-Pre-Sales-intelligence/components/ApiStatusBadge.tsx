"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, Loader, WifiOff } from "lucide-react";

type Status = "checking" | "ok" | "missing" | "invalid" | "error";

const CONFIG: Record<Status, { icon: React.ReactNode; label: string; color: string; bg: string; border: string }> = {
  checking: {
    icon: <Loader size={13} style={{ animation: "spin 0.8s linear infinite" }} />,
    label: "Checking API key...",
    color: "#6B7280",
    bg: "#F9FAFB",
    border: "#E5E7EB",
  },
  ok: {
    icon: <CheckCircle size={13} />,
    label: "OpenAI connected",
    color: "#2A8B3D",
    bg: "#F0F7EE",
    border: "#DCEDDA",
  },
  missing: {
    icon: <AlertCircle size={13} />,
    label: "API key not set",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  invalid: {
    icon: <AlertCircle size={13} />,
    label: "API key invalid",
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
  error: {
    icon: <WifiOff size={13} />,
    label: "Connection error",
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
};

export function ApiStatusBadge() {
  const [status, setStatus] = useState<Status>("checking");
  const [detail, setDetail] = useState<string>("");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => {
        setStatus(d.status as Status);
        setDetail(d.message ?? "");
      })
      .catch(() => {
        setStatus("error");
        setDetail("Could not reach health endpoint");
      });
  }, []);

  const cfg = CONFIG[status];

  return (
    <div
      title={detail}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        cursor: status !== "ok" && status !== "checking" ? "help" : "default",
        transition: "all 0.2s ease",
      }}
    >
      {cfg.icon}
      {cfg.label}
    </div>
  );
}
