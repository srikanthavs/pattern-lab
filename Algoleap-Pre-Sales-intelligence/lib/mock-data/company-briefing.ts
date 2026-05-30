import type { CompanyBriefing, NarrativeBlock, KpiItem, ManualSource } from "@/lib/types";

export const BRIEFING: CompanyBriefing = {
  company: "Coop Sverige",
  tagline: "Sweden's second-largest grocery cooperative",
  stats: [
    { icon: "trending-up", value: "~40bn SEK", label: "Annual sales, turnaround underway" },
    { icon: "store", value: "~800 stores", label: "3 formats, 3.7m members nationwide" },
    { icon: "users", value: "Cooperative", label: "25 associations under KF" },
  ],
  ownership:
    "Owned by 25 regional consumer associations, themselves owned by approximately 3.7 million members, all federated under Kooperativa Forbundet (KF). The national company runs purchasing, supply chain, and the digital platform; associations retain autonomy over store operations and local assortment.",
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

export const NARRATIVE: NarrativeBlock[] = [
  {
    type: "p",
    text: "Coop Sverige sits at the intersection of three pressures. As a cooperative absorbing accumulated operating losses, leadership needs visible margin and working capital wins it can defend to the board. As a federation of 25 associations, it needs solutions that respect a decentralised operating model rather than imposing top-down standardisation. And as a brand built on member trust and sustainability, it needs AI that demonstrably empowers planners and protects service rather than introducing autonomous black boxes.",
  },
  {
    type: "p",
    text: "The implication for use case selection is sharp. The applications most likely to resonate are those that release working capital or reduce fresh waste, because both translate directly into outcomes a VP of Supply Chain can present upward without qualification. A safety-stock optimisation that frees inventory, or a markdown agent that converts soon-to-expire stock into recovered margin, speaks the language the board is already using. These are not speculative bets. They attach to numbers Coop is already reporting.",
  },
  {
    type: "quote",
    text: "The winning frame is not automation. It is defensible, explainable, planner-controlled value that makes Coop's existing investments in SAP and RELEX pay off faster.",
  },
  { type: "h3", text: "What would resonate" },
  {
    type: "p",
    text: "Categories that augment the planner will land. Decision-support that ranks exceptions, recommends a markdown, or proposes a safety-stock change with a clear rationale fits both the cultural expectation of human control and the practical reality that Coop has just invested in a forecasting engine it wants to amplify, not replace. Anything that layers intelligence on top of RELEX and SAP, rather than competing with them, lowers the perceived risk of adoption and shortens the path to a yes.",
  },
  { type: "h3", text: "What would not land" },
  {
    type: "p",
    text: "Fully autonomous agents that remove the planner from the loop will struggle, both culturally and politically. So will anything that reads as centralising control away from the associations, however efficient it looks on paper. In a federated cooperative, a solution perceived as a control play stalls at the association level regardless of its ROI. Demos that imply headcount reduction would actively damage Algoleap's standing with a member-owned organisation.",
  },
  {
    type: "p",
    text: "The strategic frame for the use cases that follow is therefore consistent: prioritise explainable, planner-controlled applications that release working capital or cut fresh waste, sequence them so the fastest defensible win comes first, and frame every one as making Coop's people and existing systems better rather than replacing them. The principal risk to manage is tone. Pitched as control or automation, even the strongest use case will underperform; pitched as planner empowerment, the same capability becomes an easy internal sell.",
  },
];

export const KPIS: KpiItem[] = [
  { num: "11", label: "use cases identified" },
  { num: "Top 5", label: "surfaced for demo" },
  { num: "6", label: "dimensions scored" },
  { num: "3", label: "sources synthesised" },
];

export const MANUAL_SOURCES_PRESET: ManualSource[] = [
  {
    id: 1,
    source: "Gemini",
    content:
      "Gemini Deep Research surfaced Coop Sverige's 2024-2025 financial reporting in detail, confirming sustained operating losses and a board-mandated turnaround. The report highlights that fresh food waste is publicly tracked as both a sustainability KPI and a margin lever, and that Coop has set ambitious food-waste reduction targets tied to its member promise. It notes the RELEX rollout is mid-flight, with forecasting live in several categories but replenishment automation maturing unevenly across regions. The federated association structure is repeatedly cited as the central complicating factor: national initiatives require buy-in from 25 associations, each with its own local assortment logic. Gemini also flags supplier inbound reliability and promotional forecasting as the two most frequently named operational frustrations in public interviews with Coop logistics leadership.",
    preset: true,
  },
  {
    id: 2,
    source: "Claude",
    content:
      "Claude Deep Research focused on the strategic and stakeholder dimension. It frames Coop's turnaround as fundamentally about credibility with the board and the associations simultaneously: leadership needs wins that are quantifiable and quick, but cannot be seen to override regional autonomy. The analysis stresses that Coop's brand equity is built on member trust and sustainability, meaning any AI initiative carries reputational weight beyond pure operations. Claude recommends positioning AI as planner-augmentation explicitly, with human-in-the-loop framing throughout, and warns against any demo that implies headcount reduction or autonomous decision-making, which would read poorly to a cooperative audience. It identifies working-capital release and fresh-waste reduction as the two themes most likely to resonate at board level, and notes that explainability of recommendations will be a gating concern for planner adoption.",
    preset: true,
  },
];
