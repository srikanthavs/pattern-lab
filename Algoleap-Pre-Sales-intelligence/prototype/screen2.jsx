/* ============================================================
   SCREEN 2 — Automated Research (progress + report)
   ============================================================ */

function Screen2({ company, department, onContinue }) {
  const [phase, setPhase] = React.useState("progress"); // progress | report
  const [current, setCurrent] = React.useState(0);       // index of active stage
  const [elapsed, setElapsed] = React.useState(0);

  // elapsed timer
  React.useEffect(() => {
    if (phase !== "progress") return;
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, [phase]);

  // stage progression
  React.useEffect(() => {
    if (phase !== "progress") return;
    if (current >= STAGES.length) {
      const t = setTimeout(() => setPhase("report"), 900);
      return () => clearTimeout(t);
    }
    const dur = current === 0 ? 900 : 1100 + Math.random() * 500;
    const t = setTimeout(() => setCurrent((c) => c + 1), dur);
    return () => clearTimeout(t);
  }, [current, phase]);

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  if (phase === "progress") {
    return (
      <div className="container screen-enter">
        <div className="research-head">
          <div className="research-banner">
            <NetworkBg opacity={0.08} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="rb-label">Researching</div>
              <div className="rb-co">{company} &middot; {department}</div>
            </div>
            <div className="rb-spinner" style={{ position: "relative", zIndex: 2 }}><div className="spinner" /></div>
          </div>
        </div>

        <div className="card progress-card">
          {STAGES.map((stage, i) => {
            const state = i < current ? "done" : i === current ? "active" : "pending";
            return (
              <div key={stage.id} className={`stage-row ${state}`}>
                <div className={`stage-icon ${state}`}>
                  {state === "done" ? <Icon name="check" size={15} />
                    : state === "active" ? <div className="spinner-sm" />
                    : <span style={{ fontSize: 12, fontWeight: 600 }}>{stage.id}</span>}
                </div>
                <div className="stage-body">
                  <div className="stage-title">{stage.title}</div>
                  <div className="stage-desc">{stage.desc}</div>
                </div>
                <div className={`stage-status ${state}`} style={{ marginTop: 3 }}>
                  {state === "done" ? "Complete" : state === "active" ? "Working" : "Pending"}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 22 }}>
          <div className="elapsed"><span className="dot" /> Elapsed {fmt(elapsed)} &middot; synthesizing across 7 dimensions</div>
        </div>
      </div>
    );
  }

  return <Screen2Report company={company} department={department} onContinue={onContinue} />;
}

function Screen2Report({ company, department, onContinue }) {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <div className="container screen-enter">
      <div className="research-head">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <div className="acc-check" style={{ width: 24, height: 24 }}><Icon name="check" size={14} /></div>
          <h1 className="t-h1">Research complete</h1>
        </div>
        <p className="t-body" style={{ color: "var(--muted)" }}>
          {company} &middot; {department} &nbsp;&middot;&nbsp; 7 dimensions analyzed across automated sources
        </p>
      </div>

      <div className="report-layout">
        <div>
          {REPORT.map((sec, i) => {
            const stage = STAGES[i];
            const isOpen = open === i;
            return (
              <div key={i} className={`accordion-item ${isOpen ? "open" : ""}`}>
                <div className="accordion-head" onClick={() => toggle(i)}>
                  <div className="acc-num">{String(stage.id).padStart(2, "0")}</div>
                  <div className="acc-titles">
                    <div className="acc-title">{stage.title}</div>
                    <div className="acc-readtime"><Icon name="clock" size={12} /> {sec.readtime}</div>
                  </div>
                  <div className="acc-check"><Icon name="check" size={11} /></div>
                  <Icon name="chevron-down" size={18} className="acc-chevron" />
                </div>
                {isOpen && (
                  <div className="acc-body">
                    <div className="acc-body-inner">
                      {sec.paras.map((p, j) => <p key={j}>{p}</p>)}
                      <ul>{sec.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <aside className="card summary-panel">
          <h4>Research Summary</h4>
          {Object.entries({
            "Company": ENTITIES.company,
            "Stakeholders": ENTITIES.stakeholders,
            "Technologies": ENTITIES.technologies,
            "Suppliers": ENTITIES.suppliers,
          }).map(([label, items]) => (
            <div className="entity-group" key={label}>
              <div className="eg-label">{label}</div>
              <div className="entity-tags">
                {items.map((it) => <span key={it} className="pill" style={{ fontSize: 11.5 }}>{it}</span>)}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 8 }}>
            <div className="summary-stat"><Icon name="layers" size={17} /><span className="ss-text">11 candidate use cases identified</span></div>
            <div className="summary-stat"><Icon name="check-circle" size={17} /><span className="ss-text">Strategic synthesis complete</span></div>
            <div className="summary-stat"><Icon name="database" size={17} /><span className="ss-text">7 dimensions, 1 automated source</span></div>
          </div>

          <button className="btn btn-primary btn-block" style={{ marginTop: 18 }} onClick={onContinue}>
            Add Manual Research <Icon name="arrow-right" size={16} />
          </button>
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { Screen2 });
