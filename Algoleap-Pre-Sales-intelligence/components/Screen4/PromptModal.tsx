"use client";

import { useEffect, useState, useCallback } from "react";
import { Code, X, Clipboard, Download, ExternalLink, CheckCircle } from "lucide-react";
import { buildPrompt, promptToText } from "@/lib/mock-data/prompts";
import type { UseCase } from "@/lib/types";

interface PromptModalProps {
  uc: UseCase | null;
  onClose: () => void;
}

export function PromptModal({ uc, onClose }: PromptModalProps) {
  const [show, setShow] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!uc) return;
    const t = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(t);
  }, [uc]);

  const close = useCallback(() => {
    setShow(false);
    setTimeout(onClose, 320);
  }, [onClose]);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2200);
  }, []);

  if (!uc) return null;
  const lines = buildPrompt(uc);

  const copy = () => {
    const text = promptToText(lines);
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    showToast("Prompt copied to clipboard");
  };

  const download = () => {
    const text = promptToText(lines);
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "demo-prompt.md";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Downloaded demo-prompt.md");
  };

  return (
    <>
      <div
        className={`overlay ${show ? "show" : ""}`}
        onClick={close}
      />
      <div className={`slideover ${show ? "show" : ""}`}>
        <div className="so-head">
          <div className="so-titles">
            <div className="so-eyebrow">
              <Code size={12} /> Claude Code Prompt
            </div>
            <div className="so-title">{uc.title}</div>
          </div>
          <button className="so-close" onClick={close}>
            <X size={17} />
          </button>
        </div>

        <div className="so-body">
          <div className="code-block">
            <div className="code-head">
              <span className="code-dot" style={{ background: "#FF5F57" }} />
              <span className="code-dot" style={{ background: "#FEBC2E" }} />
              <span className="code-dot" style={{ background: "#28C840" }} />
              <span className="code-fname">demo-prompt.md</span>
            </div>
            <div className="code-scroll">
              {lines.map((l, i) => (
                <div className="code-line" key={i}>
                  <span className="code-ln">{i + 1}</span>
                  <span className={`code-txt ${l.c}`}>{l.t || " "}</span>
                </div>
              ))}
            </div>
          </div>
          <p
            className="t-small"
            style={{ marginTop: 12, textAlign: "center" }}
          >
            Showing {lines.length} lines &middot; full prompt continues with component-level build steps
          </p>
        </div>

        <div className="so-foot">
          <button
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={copy}
          >
            <Clipboard size={16} /> Copy to Clipboard
          </button>
          <button className="btn btn-secondary" onClick={download}>
            <Download size={16} /> Download .md
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => showToast("Opening in Claude Code")}
          >
            <ExternalLink size={16} /> Open
          </button>
        </div>
      </div>

      <div className={`toast ${toastMsg ? "show" : ""}`}>
        <CheckCircle size={16} /> {toastMsg}
      </div>
    </>
  );
}
