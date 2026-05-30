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
