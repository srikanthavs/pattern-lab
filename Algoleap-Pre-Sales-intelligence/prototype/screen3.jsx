/* ============================================================
   SCREEN 3 — Add Manual Research
   ============================================================ */

const SOURCE_OPTIONS = ["ChatGPT", "Gemini", "Claude", "Kimi", "DeepSeek", "Manus", "Qwen", "Other"];
const SOURCE_COLORS = {
  ChatGPT: "#10A37F", Gemini: "#2D7A8C", Claude: "#2A8B3D", Kimi: "#6B7280",
  DeepSeek: "#1A5240", Manus: "#0F3D2E", Qwen: "#D97706", Other: "#374151",
};

function SourceCard({ card, onChange, onRemove }) {
  const [expanded, setExpanded] = React.useState(false);
  const color = SOURCE_COLORS[card.source] || "#374151";
  const preview = card.content.length > 220 && !expanded ? card.content.slice(0, 220) + "..." : card.content;

  return (
    <div className="card source-card">
      <div className="source-card-head">
        <div className="source-badge" style={{ background: color }}>{card.source.slice(0, 2)}</div>
        <select className="select" style={{ width: 190 }} value={card.source}
          onChange={(e) => onChange({ ...card, source: e.target.value })}>
          {SOURCE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <div className="source-meta">
          <span className="char-count">{card.content.length.toLocaleString()} chars</span>
          <button className="icon-btn" onClick={onRemove} title="Remove source"><Icon name="trash-2" size={15} /></button>
        </div>
      </div>
      <div className="source-card-body">
        {card.preset && !card.editing ? (
          <div>
            <div className="preview-text">{preview}</div>
            {card.content.length > 220 && (
              <span className="show-more" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show less" : "Show more"} <Icon name={expanded ? "chevron-up" : "chevron-down"} size={13} />
              </span>
            )}
          </div>
        ) : (
          <textarea className="textarea" rows={5} placeholder="Paste the full deep research report here..."
            value={card.content} onChange={(e) => onChange({ ...card, content: e.target.value })} autoFocus={!card.preset} />
        )}
      </div>
    </div>
  );
}

function Screen3({ sources, setSources, onGenerate, onSkip }) {
  const addSource = () => {
    setSources([...sources, { id: Date.now(), source: "ChatGPT", content: "", preset: false }]);
  };
  const updateCard = (id, next) => setSources(sources.map((s) => (s.id === id ? next : s)));
  const removeCard = (id) => setSources(sources.filter((s) => s.id !== id));

  const manualCount = sources.filter((s) => s.content.trim().length > 0).length;
  const total = manualCount + 1;

  return (
    <div className="container screen-enter">
      <div className="manual-head">
        <h1 className="t-h1">Add research from other AI tools</h1>
        <p className="t-body-lg" style={{ color: "var(--muted)", marginTop: 8 }}>
          Paste deep research reports from your other tools. The application will synthesize all sources
          together with the automated research into a single briefing.
        </p>
      </div>

      <div className="source-stack">
        <button className="add-source-btn" onClick={addSource}>
          <Icon name="plus" size={18} /> Add new research source
        </button>

        {sources.map((card) => (
          <SourceCard key={card.id} card={card}
            onChange={(next) => updateCard(card.id, next)}
            onRemove={() => removeCard(card.id)} />
        ))}
      </div>

      <div className="manual-footer">
        <div className="sources-ready">
          <Icon name="check-circle" size={18} />
          {total} sources ready ({1} automated + {manualCount} manual)
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn btn-secondary" onClick={onSkip}>Skip, use automated only</button>
          <button className="btn btn-primary" onClick={onGenerate}>
            Generate Briefing &amp; Use Cases <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

window.Screen3 = Screen3;
