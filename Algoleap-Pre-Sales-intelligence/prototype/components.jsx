/* ============================================================
   SHARED COMPONENTS
   ============================================================ */

function pascal(name) {
  return name.split(/[-_]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

function Icon({ name, size = 20, sw = 2, className = "", style = {} }) {
  const lu = window.lucide || {};
  const node = (lu.icons && lu.icons[pascal(name)]) || lu[pascal(name)] || lu[name];
  let inner = "";
  // lucide IconNode = ["svg", svgAttrs, [[tag, attrs], ...]]
  const children = Array.isArray(node) ? (Array.isArray(node[2]) ? node[2] : node) : null;
  if (children) {
    inner = children.map((child) => {
      if (!Array.isArray(child)) return "";
      const [tag, attrs] = child;
      const a = Object.entries(attrs || {})
        .map(([k, v]) => `${k}="${v}"`).join(" ");
      return `<${tag} ${a} />`;
    }).join("");
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={sw}
      strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}

function Logo({ onClick }) {
  return (
    <div className="logo" onClick={onClick}>
      <div className="logo-mark"><Icon name="play" size={13} sw={0} style={{ fill: "var(--green-light)", stroke: "none" }} /></div>
      <div className="logo-word">algo<b>leap</b></div>
    </div>
  );
}

const STEP_LABELS = ["New Session", "Research", "Manual Research", "Briefing"];

function TopNav({ step, maxStep, onLogo, onNew, goStep }) {
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <Logo onClick={onLogo} />
        <div className="breadcrumb">
          {STEP_LABELS.map((label, i) => {
            const n = i + 1;
            const state = n === step ? "active" : n < maxStep + 1 && n < step ? "done" : (n <= maxStep ? "done" : "");
            const cls = n === step ? "active" : (n <= maxStep ? "done" : "");
            return (
              <React.Fragment key={n}>
                {i > 0 && <div className="crumb-sep" />}
                <div className={`crumb ${cls}`} onClick={() => cls === "done" && goStep(n)}>
                  <div className="crumb-dot">{n <= maxStep && n !== step ? <Icon name="check" size={11} /> : n}</div>
                  <span>{label}</span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="nav-right">
          <div className="nav-link" onClick={onNew}>
            <Icon name="plus" size={14} /> New Session
          </div>
          <div className="avatar">SK</div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="t-small">Algoleap Demo Intelligence v0.1 &nbsp;&middot;&nbsp; Internal Use Only</div>
        <div className="t-small" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Icon name="lock" size={12} /> Confidential
        </div>
      </div>
    </footer>
  );
}

function NetworkBg({ opacity = 0.05 }) {
  // deterministic node/link motif
  const nodes = React.useMemo(() => {
    const pts = [];
    let seed = 7;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 34; i++) pts.push({ x: rnd() * 100, y: rnd() * 100, r: 1.4 + rnd() * 2.2 });
    return pts;
  }, []);
  const links = React.useMemo(() => {
    const ls = [];
    for (let i = 0; i < nodes.length; i++) {
      let best = -1, bd = 1e9;
      for (let j = i + 1; j < nodes.length; j++) {
        const d = (nodes[i].x - nodes[j].x) ** 2 + (nodes[i].y - nodes[j].y) ** 2;
        if (d < bd) { bd = d; best = j; }
      }
      if (best >= 0 && bd < 380) ls.push([i, best]);
    }
    return ls;
  }, [nodes]);
  return (
    <div className="net-bg" style={{ opacity }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#0F3D2E" strokeWidth="0.18" />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.32} fill="#2A8B3D" />
        ))}
      </svg>
    </div>
  );
}

function Pill({ children, variant }) {
  return <span className={`pill ${variant === "teal" ? "pill-teal" : ""}`}>{children}</span>;
}

function ScoreBar({ value, animate }) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => setW((value / 10) * 100), animate ? 120 : 0);
    return () => clearTimeout(t);
  }, [value, animate]);
  return (
    <div className="score-track"><div className="score-fill" style={{ width: w + "%" }} /></div>
  );
}

function useToast() {
  const [msg, setMsg] = React.useState(null);
  const show = React.useCallback((m) => {
    setMsg(m);
    setTimeout(() => setMsg(null), 2200);
  }, []);
  const node = (
    <div className={`toast ${msg ? "show" : ""}`}>
      <Icon name="check-circle" size={16} /> {msg}
    </div>
  );
  return [node, show];
}

Object.assign(window, {
  Icon, Logo, TopNav, Footer, NetworkBg, Pill, ScoreBar, useToast, pascal,
});
