
/* ===== app/data.js ===== */
/* ============================================================
   DATA — Algoleap Demo Intelligence (Coop Sverige sample)
   ============================================================ */

const SESSION = {
  company: "Coop Sverige",
  department: "Supply Chain",
  stakeholder: "VP of Supply Chain",
};

/* ---------- Screen 2: seven research stages ---------- */
const STAGES = [
  { id: 1, title: "Company Profile", desc: "Corporate structure, scale, financials, and market position." },
  { id: 2, title: "AI and Digital Initiatives", desc: "Stated technology strategy, platforms, and recent investments." },
  { id: 3, title: "Department-Specific Context", desc: "Supply chain operating model, systems, and known pain points." },
  { id: 4, title: "Stakeholder Context", desc: "Decision-makers, mandates, and personal priorities." },
  { id: 5, title: "Peer Benchmarks", desc: "How comparable grocery cooperatives approach the same problems." },
  { id: 6, title: "Use Case Hypotheses", desc: "Candidate AI applications mapped to identified pressures." },
  { id: 7, title: "Strategic Synthesis", desc: "Cross-source reconciliation into a single point of view." },
];

/* ---------- Screen 2: report section bodies ---------- */
const REPORT = [
  {
    readtime: "2 min read",
    paras: [
      "Coop Sverige is Sweden's second-largest grocery retailer and the country's defining consumer cooperative, operating roughly 800 stores under the Stora Coop, Coop, and Lilla Coop formats with annual sales in the region of 40 billion SEK. It is not a conventional corporation. The business is owned by 25 regional consumer associations, which are in turn owned by approximately 3.7 million members, all federated under Kooperativa Forbundet (KF).",
      "This ownership model shapes every operational decision. The national company runs purchasing, the supply chain, private label, and the digital platform, while the regional associations retain meaningful autonomy over store operations and local assortment. Recent years have been financially difficult, with sustained operating losses prompting a turnaround agenda focused on cost discipline, supply chain efficiency, and a rebuild of core logistics and forecasting systems.",
    ],
    bullets: [
      "Approximately 800 stores nationwide across three formats serving 3.7 million members.",
      "Owned by 25 regional consumer associations under Kooperativa Forbundet.",
      "Multi-year operating losses driving a turnaround focused on margin and working capital.",
    ],
  },
  {
    readtime: "2 min read",
    paras: [
      "Coop has publicly committed to modernising its core retail technology stack, including a multi-year migration toward SAP S/4HANA and a parallel investment in RELEX for demand forecasting and automated replenishment. The stated ambition is a more data-driven supply chain that reduces waste, improves on-shelf availability, and lowers working capital tied up in inventory.",
      "Public statements emphasise practical, planner-empowering applications of AI rather than fully autonomous decision-making. Sustainability reporting is a strategic priority given the cooperative's brand, and digital initiatives are consistently framed around member value and food waste reduction rather than pure cost extraction.",
    ],
    bullets: [
      "Active migration toward SAP S/4HANA as the core ERP backbone.",
      "RELEX deployed for demand forecasting and automated store replenishment.",
      "Public AI framing favours augmentation of planners over autonomous agents.",
    ],
  },
  {
    readtime: "3 min read",
    paras: [
      "The supply chain organisation manages a national distribution network feeding roughly 800 stores, with a heavy fresh and chilled mix that makes waste and availability the two dominant operational tensions. Forecasting accuracy on fresh categories, promotional volatility, and supplier inbound reliability are recurring themes in public commentary and in the rationale for the RELEX investment.",
      "Because assortment and execution remain partly devolved to the regional associations, any central optimisation must reconcile a national forecast with local override behaviour. This federated dynamic is the single most distinctive feature of Coop's supply chain and the most common reason that standard retail optimisation programmes underdeliver here.",
    ],
    bullets: [
      "High fresh and chilled mix elevates waste and availability as twin priorities.",
      "Promotional volatility and supplier OTIF reliability are named pain points.",
      "Central forecasts must reconcile with regional association override behaviour.",
    ],
  },
  {
    readtime: "1 min read",
    paras: [
      "The likely sponsor for a supply chain engagement is the VP of Supply Chain, accountable for the turnaround's logistics and inventory targets. The profile suggests a leader under board scrutiny to deliver defensible, near-term working capital and waste improvements without destabilising service levels or the relationship with regional associations.",
      "Secondary stakeholders include category and demand planning leads who would be the day-to-day users of any deployed tool, and a digital or data function responsible for the SAP and RELEX programmes whose roadmap any new initiative must respect.",
    ],
    bullets: [
      "Primary sponsor accountable for near-term working capital and waste targets.",
      "Demand and category planners are the practical end users to win over.",
      "Data and digital function owns the SAP and RELEX roadmap to align with.",
    ],
  },
  {
    readtime: "2 min read",
    paras: [
      "Comparable European grocery cooperatives and mutuals, including Migros, the Co-op Group in the UK, and regional Edeka structures in Germany, have pursued the same waste and availability agenda. The pattern across successful programmes is incremental, planner-facing decision support layered on top of an existing forecasting engine rather than rip-and-replace autonomy.",
      "The clearest lesson from peers is that federated retailers reward solutions that make local autonomy smarter, not solutions that attempt to centralise it away. Programmes framed as control tend to stall at the association level; programmes framed as planner empowerment tend to scale.",
    ],
    bullets: [
      "Peers win with planner-facing decision support over autonomous replacement.",
      "Federated retailers reward tools that make local autonomy smarter.",
      "Waste reduction and availability remain the universal grocery battlegrounds.",
    ],
  },
  {
    readtime: "2 min read",
    paras: [
      "Eleven candidate use cases were generated by mapping identified pressures, namely fresh waste, working capital, availability, promotional volatility, supplier reliability, and federated reconciliation, against demonstrable AI patterns Algoleap can build quickly. Candidates were filtered for strategic fit, data realism, and demo feasibility before ranking.",
      "The strongest candidates cluster around two themes: releasing working capital through smarter safety stock and inventory positioning, and protecting margin by reducing fresh waste through better markdown and ordering decisions. Both map directly to defensible board-level outcomes.",
    ],
    bullets: [
      "Eleven candidates generated from six identified pressure areas.",
      "Strongest cluster: working capital release and fresh waste reduction.",
      "All candidates filtered for data realism and demo feasibility.",
    ],
  },
  {
    readtime: "2 min read",
    paras: [
      "Synthesis across automated and manual sources produces a consistent point of view: Coop needs visible, defensible margin and working capital wins that respect a decentralised operating model and protect member-facing service. Solutions must augment planners rather than replace them, and must layer onto the SAP and RELEX investment rather than compete with it.",
      "This frame deliberately favours use cases that are explainable, planner-controlled, and quick to demonstrate value, and it filters out anything that reads as an autonomous black box or a centralising control play. The ranked use cases that follow are ordered against exactly this frame.",
    ],
    bullets: [
      "Consistent frame: defensible margin and working capital, planner-empowering.",
      "Solutions must complement SAP and RELEX, not compete with them.",
      "Explainability and demo speed weighted heavily in the final ranking.",
    ],
  },
];

const ENTITIES = {
  company: ["Coop Sverige", "Kooperativa Forbundet"],
  stakeholders: ["VP Supply Chain", "Demand Planning", "Category Leads"],
  technologies: ["SAP S/4HANA", "RELEX", "Power BI"],
  suppliers: ["Regional DCs", "Fresh suppliers", "25 associations"],
};

/* ---------- Screen 3: manual sources ---------- */
const MANUAL_SOURCES = [
  {
    source: "Gemini",
    color: "#2D7A8C",
    full: "Gemini Deep Research surfaced Coop Sverige's 2024-2025 financial reporting in detail, confirming sustained operating losses and a board-mandated turnaround. The report highlights that fresh food waste is publicly tracked as both a sustainability KPI and a margin lever, and that Coop has set ambitious food-waste reduction targets tied to its member promise. It notes the RELEX rollout is mid-flight, with forecasting live in several categories but replenishment automation maturing unevenly across regions. The federated association structure is repeatedly cited as the central complicating factor: national initiatives require buy-in from 25 associations, each with its own local assortment logic. Gemini also flags supplier inbound reliability and promotional forecasting as the two most frequently named operational frustrations in public interviews with Coop logistics leadership.",
  },
  {
    source: "Claude",
    color: "#2A8B3D",
    full: "Claude Deep Research focused on the strategic and stakeholder dimension. It frames Coop's turnaround as fundamentally about credibility with the board and the associations simultaneously: leadership needs wins that are quantifiable and quick, but cannot be seen to override regional autonomy. The analysis stresses that Coop's brand equity is built on member trust and sustainability, meaning any AI initiative carries reputational weight beyond pure operations. Claude recommends positioning AI as planner-augmentation explicitly, with human-in-the-loop framing throughout, and warns against any demo that implies headcount reduction or autonomous decision-making, which would read poorly to a cooperative audience. It identifies working-capital release and fresh-waste reduction as the two themes most likely to resonate at board level, and notes that explainability of recommendations will be a gating concern for planner adoption.",
  },
];

/* ---------- Screen 4: briefing facts ---------- */
const BRIEFING = {
  company: "Coop Sverige",
  tagline: "Sweden's second-largest grocery cooperative",
  stats: [
    { icon: "trending-up", value: "~40bn SEK", label: "Annual sales, turnaround underway" },
    { icon: "store", value: "~800 stores", label: "3 formats, 3.7m members nationwide" },
    { icon: "users", value: "Cooperative", label: "25 associations under KF" },
  ],
  ownership: "Owned by 25 regional consumer associations, themselves owned by approximately 3.7 million members, all federated under Kooperativa Forbundet (KF). The national company runs purchasing, supply chain, and the digital platform; associations retain autonomy over store operations and local assortment.",
  moves: [
    "Board-mandated turnaround targeting cost, working capital, and supply chain efficiency after sustained operating losses.",
    "Multi-year migration to SAP S/4HANA as the core ERP backbone.",
    "Rollout of RELEX for demand forecasting and automated replenishment, live in several categories.",
    "Continued public commitment to food-waste reduction tied to the member promise.",
  ],
  aiInitiatives: [
    "AI framed publicly as planner augmentation, not autonomous decision-making.",
    "Forecasting and replenishment automation positioned as the near-term value driver.",
    "Sustainability and food-waste analytics treated as a strategic, board-visible priority.",
  ],
  techStack: ["SAP S/4HANA", "RELEX", "Power BI", "Azure", "Private label PLM"],
  stakeholder: {
    name: "VP of Supply Chain",
    role: "Likely engagement sponsor",
    bio: "Accountable for the turnaround's logistics and inventory targets. Under board scrutiny to deliver defensible, near-term working capital and waste wins without destabilising service or the relationship with regional associations.",
  },
  pressures: [
    "Deliver visible, board-defensible margin and working capital improvements quickly.",
    "Reduce fresh and chilled food waste, a dual margin and sustainability lever.",
    "Improve on-shelf availability and supplier inbound reliability.",
    "Respect the federated operating model rather than centralising it away.",
  ],
};

/* ---------- Screen 4: strategic narrative ---------- */
const NARRATIVE = [
  { type: "p", text: "Coop Sverige sits at the intersection of three pressures. As a cooperative absorbing accumulated operating losses, leadership needs visible margin and working capital wins it can defend to the board. As a federation of 25 associations, it needs solutions that respect a decentralised operating model rather than imposing top-down standardisation. And as a brand built on member trust and sustainability, it needs AI that demonstrably empowers planners and protects service rather than introducing autonomous black boxes." },
  { type: "p", text: "The implication for use case selection is sharp. The applications most likely to resonate are those that release working capital or reduce fresh waste, because both translate directly into outcomes a VP of Supply Chain can present upward without qualification. A safety-stock optimisation that frees inventory, or a markdown agent that converts soon-to-expire stock into recovered margin, speaks the language the board is already using. These are not speculative bets. They attach to numbers Coop is already reporting." },
  { type: "quote", text: "The winning frame is not automation. It is defensible, explainable, planner-controlled value that makes Coop's existing investments in SAP and RELEX pay off faster." },
  { type: "h3", text: "What would resonate" },
  { type: "p", text: "Categories that augment the planner will land. Decision-support that ranks exceptions, recommends a markdown, or proposes a safety-stock change with a clear rationale fits both the cultural expectation of human control and the practical reality that Coop has just invested in a forecasting engine it wants to amplify, not replace. Anything that layers intelligence on top of RELEX and SAP, rather than competing with them, lowers the perceived risk of adoption and shortens the path to a yes." },
  { type: "h3", text: "What would not land" },
  { type: "p", text: "Fully autonomous agents that remove the planner from the loop will struggle, both culturally and politically. So will anything that reads as centralising control away from the associations, however efficient it looks on paper. In a federated cooperative, a solution perceived as a control play stalls at the association level regardless of its ROI. Demos that imply headcount reduction would actively damage Algoleap's standing with a member-owned organisation." },
  { type: "p", text: "The strategic frame for the use cases that follow is therefore consistent: prioritise explainable, planner-controlled applications that release working capital or cut fresh waste, sequence them so the fastest defensible win comes first, and frame every one as making Coop's people and existing systems better rather than replacing them. The principal risk to manage is tone. Pitched as control or automation, even the strongest use case will underperform; pitched as planner empowerment, the same capability becomes an easy internal sell." },
];

/* ---------- Screen 4: KPI row ---------- */
const KPIS = [
  { num: "11", label: "use cases identified" },
  { num: "Top 5", label: "surfaced for demo" },
  { num: "6", label: "dimensions scored" },
  { num: "3", label: "sources synthesised" },
];

const DIMENSIONS = ["Strategic Fit", "Business Impact", "Data Readiness", "Demo Speed", "Differentiation", "Stakeholder Fit"];

/* ---------- Screen 4: eight use cases ---------- */
const USE_CASES = [
  {
    rank: 1, total: 58, title: "Dynamic Safety Stock Optimization",
    sub: "Continuously right-size safety stock by item and location to release working capital without hurting availability.",
    cats: ["Working Capital", "Service Level", "Operations"],
    scores: [10, 10, 9, 9, 8, 9],
    why: [
      "Releases working capital, the board's most defensible turnaround metric.",
      "Layers on top of RELEX rather than competing with the forecasting engine.",
      "Fully explainable per-SKU recommendations keep planners in control.",
      "Protects availability, neutralising the obvious service-level objection.",
    ],
    sources: ["G", "C", "A"],
  },
  {
    rank: 2, total: 56, title: "Fresh Waste and Markdown Decision Agent",
    sub: "Recommend optimal markdown timing and depth for soon-to-expire fresh items to recover margin and cut waste.",
    cats: ["Margin", "Sustainability", "Operations"],
    scores: [10, 9, 9, 9, 9, 10],
    why: [
      "Directly reduces fresh waste, a tracked sustainability and margin KPI.",
      "Speaks to the member promise, strengthening the cooperative narrative.",
      "Store-level recommendation respects regional execution autonomy.",
      "Highly visual and quick to demo with realistic markdown scenarios.",
    ],
    sources: ["G", "C", "A"],
  },
  {
    rank: 3, total: 54, title: "Agentic Exception Management Copilot",
    sub: "Surface, rank, and explain the day's supply exceptions so planners act on what matters first.",
    cats: ["Operations", "Service Level"],
    scores: [9, 9, 8, 10, 8, 10],
    why: [
      "Pure planner-augmentation framing, culturally low-risk for a cooperative.",
      "Reduces planner cognitive load against high promotional volatility.",
      "Demonstrates agentic AI without any autonomous execution.",
      "Compelling, fast-to-build copilot demo with explainable triage.",
    ],
    sources: ["G", "A"],
  },
  {
    rank: 4, total: 52, title: "Inbound Supplier OTIF Predictor",
    sub: "Predict supplier on-time-in-full risk ahead of delivery so teams can pre-empt shortfalls.",
    cats: ["Service Level", "Operations"],
    scores: [9, 8, 8, 8, 9, 8],
    why: [
      "Targets supplier inbound reliability, a named operational frustration.",
      "Protects availability upstream before it reaches the shelf.",
      "Clear, explainable risk scores planners can act on with suppliers.",
      "Maps to data Coop already captures across inbound logistics.",
    ],
    sources: ["G", "A"],
  },
  {
    rank: 5, total: 49, title: "Promotion Forecasting and Cannibalization Agent",
    sub: "Forecast promotional uplift and cross-item cannibalization to size orders and limit waste.",
    cats: ["Margin", "Operations"],
    scores: [8, 9, 7, 8, 8, 9],
    why: [
      "Addresses promotional volatility, a top-named forecasting pain point.",
      "Reduces both stockouts and over-ordering on high-volume promotions.",
      "Augments rather than replaces the existing forecasting workflow.",
      "Demonstrable uplift narrative resonates with category planners.",
    ],
    sources: ["G", "C", "A"],
  },
  {
    rank: 6, total: 44, title: "Federated Forecast Reconciliation",
    sub: "Reconcile the national forecast with regional association overrides into one trusted signal.",
    cats: ["Operations", "Service Level"],
    scores: [9, 7, 6, 6, 9, 8],
    why: [
      "Tackles Coop's single most distinctive structural challenge directly.",
      "Frames central intelligence as making local autonomy smarter, not removed.",
      "High differentiation, few vendors address the federated reconciliation problem.",
      "Data complexity makes it a stronger phase-two than launch demo.",
    ],
    sources: ["C", "A"],
  },
  {
    rank: 7, total: 42, title: "Store-Cluster Replenishment Agent",
    sub: "Cluster stores by demand signature and tune replenishment parameters per cluster.",
    cats: ["Operations", "Working Capital"],
    scores: [8, 7, 6, 7, 7, 7],
    why: [
      "Improves replenishment quality across a diverse 800-store estate.",
      "Respects local variation by tuning at cluster rather than national level.",
      "Complements the RELEX replenishment rollout already underway.",
      "Moderate demo complexity given the clustering and parameter logic.",
    ],
    sources: ["G", "A"],
  },
  {
    rank: 8, total: 38, title: "CO2-per-Case Route Optimizer",
    sub: "Optimize distribution routing to lower emissions per case while holding service levels.",
    cats: ["Sustainability", "Operations"],
    scores: [7, 6, 6, 6, 7, 6],
    why: [
      "Aligns with Coop's sustainability brand and reporting commitments.",
      "Lower board priority than direct margin and working capital wins.",
      "Routing data and constraints make the demo heavier to build.",
      "Best positioned as a sustainability-narrative complement, not a lead.",
    ],
    sources: ["A"],
  },
];

const SOURCE_META = {
  G: { label: "Gemini", color: "#2D7A8C" },
  C: { label: "Claude", color: "#2A8B3D" },
  A: { label: "Algoleap auto", color: "#0F3D2E" },
};

const ALL_CATS = ["Working Capital", "Service Level", "Sustainability", "Operations", "Margin"];

/* ---------- Prompt generator ---------- */
function buildPrompt(uc) {
  const slug = uc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const K = (t) => ({ t, c: "c-key" });
  const C = (t) => ({ t, c: "c-com" });
  const S = (t) => ({ t, c: "c-str" });
  const P = (t) => ({ t, c: "" });
  return [
    C("# Claude Code Prompt"),
    C("# " + uc.title + " demo for Coop Sverige"),
    P(""),
    K("## OBJECTIVE"),
    P("Build a self-contained, interactive HTML demo that shows how"),
    P('"' + uc.title + '" works for a grocery supply chain'),
    P("planner at Coop Sverige. This is a sales demo, not production."),
    P(""),
    K("## CONTEXT"),
    P("- Audience: VP of Supply Chain and demand planners at Coop"),
    P("- Coop runs ~800 stores, federated under 25 associations"),
    P("- Existing stack: " + S("SAP S/4HANA") + ", " + S("RELEX") + " for forecasting"),
    P("- Framing must be planner-augmentation, human in the loop"),
    P("- Tone: defensible, explainable, no autonomous black boxes"),
    P(""),
    K("## THE DEMO SHOULD SHOW"),
    P("1. A planner dashboard with realistic Coop SKU/store data"),
    P("2. The " + uc.cats[0] + " problem made visible with clear metrics"),
    P("3. An AI recommendation panel with a written rationale"),
    P("4. Human accept / adjust / reject controls on every action"),
    P("5. A before vs after impact summary in SEK and units"),
    P(""),
    K("## KEY OUTCOME TO DRAMATIZE"),
    P("Show " + uc.sub.toLowerCase()),
    P("Quantify the win the way a board would read it."),
    P(""),
    K("## DATA"),
    P("Generate realistic placeholder data:"),
    P("- 40 to 60 SKUs across fresh, chilled, ambient"),
    P("- A handful of stores across 3 regional clusters"),
    P("- Demand history with promotional spikes and noise"),
    P(""),
    K("## DESIGN"),
    P("- Clean, premium, calm. Inter typeface."),
    P("- Coop-adjacent green accent, generous white space"),
    P("- Every recommendation must be explainable on hover"),
    P(""),
    K("## CONSTRAINTS"),
    P("- Single HTML file, runs offline, no backend"),
    P("- No emoji, no Lorem ipsum, realistic numbers only"),
    P("- Keep the planner in control of every decision"),
    C("# ... continues with component-level build steps"),
  ];
}

Object.assign(window, {
  SESSION, STAGES, REPORT, ENTITIES, MANUAL_SOURCES, BRIEFING,
  NARRATIVE, KPIS, DIMENSIONS, USE_CASES, SOURCE_META, ALL_CATS, buildPrompt,
});


/* ===== app/components.jsx ===== */
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


/* ===== app/screen1.jsx ===== */
/* ============================================================
   SCREEN 1 — New Session (Landing)
   ============================================================ */

function Screen1({ form, setForm, onStart }) {
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const canStart = form.company.trim().length > 0;

  return (
    <div className="screen-enter">
      <section className="hero">
        <NetworkBg opacity={0.05} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-eyebrow">
            <Icon name="sparkles" size={13} /> PRE-SALES INTELLIGENCE
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
              <h3 className="t-h3">Start New Prospect Research</h3>
              <p className="t-small" style={{ marginTop: 4 }}>Enter a target company to begin multi-source research.</p>
            </div>

            <div className="form-grid">
              <div className="field">
                <label className="label">Company Name <span className="req">*</span></label>
                <input className="input input-lg" placeholder="e.g. Coop Sverige"
                  value={form.company} onChange={update("company")}
                  onKeyDown={(e) => e.key === "Enter" && canStart && onStart()} autoFocus />
              </div>

              <div className="form-row-2">
                <div className="field">
                  <label className="label">Department</label>
                  <select className="select" value={form.department} onChange={update("department")}>
                    <option>Supply Chain</option>
                    <option>Procurement</option>
                    <option>Logistics &amp; Distribution</option>
                    <option>Merchandising</option>
                    <option>Finance Operations</option>
                  </select>
                </div>
                <div className="field">
                  <label className="label">Target Stakeholder <span className="opt">optional</span></label>
                  <input className="input" placeholder="e.g. VP of Supply Chain"
                    value={form.stakeholder} onChange={update("stakeholder")} />
                </div>
              </div>

              <div className="field">
                <label className="label">Additional Context <span className="opt">optional</span></label>
                <textarea className="textarea" rows={3}
                  placeholder="Anything you already know: recent news, the deal context, who you are meeting, what they care about."
                  value={form.context} onChange={update("context")} />
              </div>

              <button className="btn btn-primary btn-lg btn-block" disabled={!canStart} onClick={onStart}>
                Start Research <Icon name="arrow-right" size={17} />
              </button>
              <p className="t-small" style={{ textAlign: "center", marginTop: -4 }}>
                Research takes 5 to 7 minutes. You will be able to add manual research after.
              </p>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-card">
              <div className="stat-num">10x faster</div>
              <div className="stat-label">demo prep, from days of manual work to a single focused session</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">Multi-source</div>
              <div className="stat-label">research synthesis across automated and pasted AI reports</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">Briefing + ranked</div>
              <div className="stat-label">strategic briefing plus use cases scored across six dimensions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Screen1 = Screen1;


/* ===== app/screen2.jsx ===== */
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


/* ===== app/screen3.jsx ===== */
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


/* ===== app/screen4.jsx ===== */
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


/* ===== app/app.jsx ===== */
/* ============================================================
   APP — router & state
   ============================================================ */

function App() {
  const [step, setStep] = React.useState(1);
  const [maxStep, setMaxStep] = React.useState(1);
  const [form, setForm] = React.useState({
    company: "Coop Sverige", department: "Supply Chain", stakeholder: "", context: "",
  });
  const [sources, setSources] = React.useState(() =>
    MANUAL_SOURCES.map((s, i) => ({
      id: i + 1, source: s.source, content: s.full, preset: true,
    }))
  );
  const [modalUC, setModalUC] = React.useState(null);
  const [toastNode, showToast] = useToast();

  const go = (n) => {
    setStep(n);
    setMaxStep((m) => Math.max(m, n));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const newSession = () => {
    setStep(1); setMaxStep(1);
    window.scrollTo({ top: 0 });
  };

  const company = form.company.trim() || "the company";

  return (
    <div className="app-shell">
      <TopNav step={step} maxStep={maxStep}
        onLogo={newSession} onNew={newSession} goStep={go} />

      <main className="main">
        {step === 1 && (
          <Screen1 form={form} setForm={setForm} onStart={() => go(2)} />
        )}
        {step === 2 && (
          <Screen2 key="s2" company={company} department={form.department} onContinue={() => go(3)} />
        )}
        {step === 3 && (
          <Screen3 sources={sources} setSources={setSources}
            onGenerate={() => go(4)} onSkip={() => go(4)} />
        )}
        {step === 4 && (
          <Screen4 company={company} onGenerate={(uc) => setModalUC(uc)} />
        )}
      </main>

      <Footer />

      {modalUC && <PromptModal uc={modalUC} onClose={() => setModalUC(null)} onToast={showToast} />}
      {toastNode}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

