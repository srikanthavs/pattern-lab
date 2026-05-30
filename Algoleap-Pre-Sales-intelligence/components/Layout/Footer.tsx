import { Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="t-small">
          Algoleap Pre-Sales Intelligence v0.1 &nbsp;&middot;&nbsp; Internal Use Only
        </div>
        <div className="t-small" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Lock size={12} /> Confidential
        </div>
      </div>
    </footer>
  );
}
