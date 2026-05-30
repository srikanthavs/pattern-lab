/* ============================================================
   SCREEN 4 — Briefing & Use Cases (Output)
   ============================================================ */

function Snapshot() {
  const b = BRIEFING;
  return (
    <div className="card snapshot reveal">
      <div className="snapshot-grid">
        <div className="snap-left">
          <NetworkBg opacity={0.07} />
          <div className="snap-logo"><span>C</span></div>
          <div className="snap-co">{b.company}</div>
          <div className="snap-tagline">{b.tagline}</div>
          <div className="snap-stats">
            {b.stats.map((s, i) => (
              <div className="snap-stat" key={i}>
                <div className="snap-stat-icon"><Icon name={s.icon} size={17} /></div>
                <div>
                  <div className="sv">{s.value}</div>
                  <div className="sl">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="snap-right">
          <div className="fact-panel span-2">
            <div className="fact-label"><Icon name="git-branch" size={13} /> Ownership and Structure</div>
            <div className="fact-text">{b.ownership}</div>
          </div>
          <div className="fact-panel">
            <div className="fact-label"><Icon name="trending-up" size={13} /> Recent Strategic Moves</div>
            <ul className="fact-list">{b.moves.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </div>
          <div className="fact-panel">
            <div className="fact-label"><Icon name="cpu" size={13} /> Stated AI and Digital Initiatives</div>
            <ul className="fact-list">{b.aiInitiatives.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </div>
          <div className="fact-panel">
            <div className="fact-label"><Icon name="layers" size={13} /> Technology Stack</div>
            <div className="tech-pills">{b.techStack.map((t) => <span key={t} className="pill pill-tech">{t}</span>)}</div>
          </div>
          <div className="fact-panel">
            <div className="fact-label"><Icon name="user" size={13} /> Stakeholder Profile</div>
            <div className="stakeholder">
              <div className="stakeholder-av">VP</div>
              <div>
                <div className="sk-name">{b.stakeholder.name}</div>
                <div className="sk-role">{b.stakeholder.role}</div>
                <div className="sk-bio">{b.stakeholder.bio}</div>
              </div>
            </div>
          </div>
          <div className="fact-panel span-2">
            <div className="fact-label"><Icon name="alert-triangle" size={13} /> Current Pressures and Priorities</div>
            <ul className="fact-list">{b.pressures.map((m, i) => <li key={i}>{m}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Narrative() {
  return (
    <div className="narrative reveal">
      <h2 className="t-h2">What this company will find valuable</h2>
      {NARRATIVE.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
        if (block.type === "quote") return (
          <div className="pullquote" key={i}><p>{block.text}</p></div>
        );
        return null;
      })}
    </div>
  );
}

function UseCaseCard({ uc, company, onGenerate }) {
  return (
    <div className="uc-card">
      <div className="uc-top">
        <div className="uc-rank"><span className="rank-hash">#</span>{uc.rank}</div>
        <div className="uc-head-main">
          <div className="uc-title">{uc.title}</div>
          <div className="uc-sub">{uc.sub}</div>
        </div>
        <div className="uc-score-badge">
          <div className="usb-num">{uc.total}<small> / 65</small></div>
          <div className="usb-label">Weighted</div>
        </div>
      </div>

      <div className="uc-tags">
        {uc.cats.map((c) => <span key={c} className="pill">{c}</span>)}
      </div>

      <div className="uc-scores">
        {DIMENSIONS.map((d, i) => (
          <div className="score-line" key={d}>
            <div className="score-name">{d}</div>
            <ScoreBar value={uc.scores[i]} animate />
            <div className="score-val">{uc.scores[i]}</div>
          </div>
        ))}
      </div>

      <div className="uc-why">
        <div className="why-label">Why this fits {company}</div>
        <ul>{uc.why.map((w, i) => <li key={i}><Icon name="check" size={13} /> {w}</li>)}</ul>
      </div>

      <div className="uc-foot">
        <div className="uc-sources">
          <span>Sources</span>
          <div className="src-icons">
            {uc.sources.map((s) => (
              <span key={s} className="src-chip" style={{ background: SOURCE_META[s].color }} title={SOURCE_META[s].label}>{s}</span>
            ))}
          </div>
        </div>
        <div className="uc-actions">
          <button className="btn btn-secondary" style={{ padding: "9px 16px" }}>View Details</button>
          <button className="btn btn-primary" style={{ padding: "9px 16px" }} onClick={() => onGenerate(uc)}>
            <Icon name="code" size={16} /> Generate Demo Prompt
          </button>
        </div>
      </div>
    </div>
  );
}

function PromptModal({ uc, onClose, onToast }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(t);
  }, []);
  const close = () => { setShow(false); setTimeout(onClose, 300); };
  if (!uc) return null;
  const lines = buildPrompt(uc);

  const copy = () => {
    const text = lines.map((l) => l.t).join("\n");
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    onToast("Prompt copied to clipboard");
  };

  return (
    <React.Fragment>
      <div className={`overlay ${show ? "show" : ""}`} onClick={close} />
      <div className={`slideover ${show ? "show" : ""}`}>
        <div className="so-head">
          <div className="so-titles">
            <div className="so-eyebrow"><Icon name="code" size={12} /> Claude Code Prompt</div>
            <div className="so-title">{uc.title}</div>
          </div>
          <button className="so-close" onClick={close}><Icon name="x" size={17} /></button>
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
          <p className="t-small" style={{ marginTop: 12, textAlign: "center" }}>
            Showing {lines.length} lines &middot; full prompt continues with component-level build steps
          </p>
        </div>

        <div className="so-foot">
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={copy}>
            <Icon name="clipboard" size={16} /> Copy to Clipboard
          </button>
          <button className="btn btn-secondary" onClick={() => onToast("Downloaded demo-prompt.md")}>
            <Icon name="download" size={16} /> Download .md
          </button>
          <button className="btn btn-secondary" onClick={() => onToast("Opening in Claude Code")}>
            <Icon name="external-link" size={16} /> Open
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

function Screen4({ company, onGenerate }) {
  const [minScore, setMinScore] = React.useState(30);
  const [cats, setCats] = React.useState([]);
  const [src, setSrc] = React.useState("All");

  const toggleCat = (c) => setCats(cats.includes(c) ? cats.filter((x) => x !== c) : [...cats, c]);

  const filtered = USE_CASES.filter((uc) => {
    if (uc.total < minScore) return false;
    if (cats.length && !cats.some((c) => uc.cats.includes(c))) return false;
    if (src !== "All" && !uc.sources.includes(src)) return false;
    return true;
  });

  return (
    <div className="container screen-enter">
      {/* Section A */}
      <div className="section-head">
        <h1 className="t-h1">Company Briefing</h1>
        <div className="divider" />
        <span className="pill sh-tag"><Icon name="check" size={12} /> Synthesized</span>
      </div>

      <Snapshot />

      <div style={{ marginTop: 44 }}><Narrative /></div>

      {/* Section B — KPI row */}
      <div className="kpi-row">
        {KPIS.map((k, i) => (
          <div className="kpi-tile" key={i}>
            <div className="kpi-num">{k.num}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Section C — use cases */}
      <div className="section-head" style={{ marginBottom: 6 }}>
        <h1 className="t-h1">Top AI Use Cases for {company}</h1>
        <div className="divider" />
      </div>
      <p className="t-body" style={{ color: "var(--muted)", marginBottom: 24, maxWidth: 720 }}>
        Ranked across 6 strategic dimensions. Each use case can be turned into a working demo using
        the generated Claude Code prompt.
      </p>

      <div className="uc-layout">
        <div className="uc-list">
          {filtered.map((uc) => (
            <UseCaseCard key={uc.rank} uc={uc} company={company} onGenerate={onGenerate} />
          ))}
          {filtered.length === 0 && (
            <div className="card" style={{ padding: 40, textAlign: "center", color: "var(--muted)" }}>
              No use cases match the current filters.
            </div>
          )}
        </div>

        <aside className="card filter-panel">
          <h4>Refine</h4>
          <div className="filter-group">
            <div className="fg-label">Minimum score</div>
            <div className="range-row">
              <input type="range" min="30" max="58" value={minScore} onChange={(e) => setMinScore(+e.target.value)} />
              <span className="range-val">{minScore}</span>
            </div>
          </div>
          <div className="filter-group">
            <div className="fg-label">Category</div>
            {ALL_CATS.map((c) => (
              <label className="check-row" key={c}>
                <input type="checkbox" checked={cats.includes(c)} onChange={() => toggleCat(c)} /> {c}
              </label>
            ))}
          </div>
          <div className="filter-group">
            <div className="fg-label">Source mentioned</div>
            <select className="select" value={src} onChange={(e) => setSrc(e.target.value)}>
              <option value="All">All sources</option>
              <option value="G">Gemini</option>
              <option value="C">Claude</option>
              <option value="A">Algoleap auto</option>
            </select>
          </div>
          <div className="divider" style={{ margin: "4px 0 18px" }} />
          <button className="btn btn-primary btn-block" onClick={() => onGenerate(USE_CASES[0])}>
            <Icon name="package" size={16} /> Export Briefing + Top 5
          </button>
          <p className="t-small" style={{ marginTop: 10, textAlign: "center", fontSize: 12 }}>
            Combines briefing and top 5 prompts into a single export.
          </p>
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { Screen4, PromptModal });
