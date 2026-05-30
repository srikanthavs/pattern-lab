import type { ResearchStage, ReportSection, EntityMap } from "@/lib/types";

export const STAGES: ResearchStage[] = [
  { id: 1, title: "Company Profile", desc: "Corporate structure, scale, financials, and market position." },
  { id: 2, title: "AI and Digital Initiatives", desc: "Stated technology strategy, platforms, and recent investments." },
  { id: 3, title: "Department-Specific Context", desc: "Supply chain operating model, systems, and known pain points." },
  { id: 4, title: "Stakeholder Context", desc: "Decision-makers, mandates, and personal priorities." },
  { id: 5, title: "Peer Benchmarks", desc: "How comparable grocery cooperatives approach the same problems." },
  { id: 6, title: "Use Case Hypotheses", desc: "Candidate AI applications mapped to identified pressures." },
  { id: 7, title: "Strategic Synthesis", desc: "Cross-source reconciliation into a single point of view." },
];

export const REPORT: ReportSection[] = [
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

export const ENTITIES: EntityMap = {
  company: ["Coop Sverige", "Kooperativa Forbundet"],
  stakeholders: ["VP Supply Chain", "Demand Planning", "Category Leads"],
  technologies: ["SAP S/4HANA", "RELEX", "Power BI"],
  suppliers: ["Regional DCs", "Fresh suppliers", "25 associations"],
};
