import type { UseCase, SourceMeta } from "@/lib/types";

export const DIMENSIONS = [
  "Strategic Fit",
  "Business Impact",
  "Data Readiness",
  "Demo Speed",
  "Differentiation",
  "Stakeholder Fit",
];

export const ALL_CATS = ["Working Capital", "Service Level", "Sustainability", "Operations", "Margin"];

export const SOURCE_META: Record<string, SourceMeta> = {
  G: { label: "Gemini", color: "#2D7A8C" },
  C: { label: "Claude", color: "#2A8B3D" },
  A: { label: "Algoleap auto", color: "#0F3D2E" },
};

export const USE_CASES: UseCase[] = [
  {
    rank: 1,
    total: 58,
    title: "Dynamic Safety Stock Optimization",
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
    rank: 2,
    total: 56,
    title: "Fresh Waste and Markdown Decision Agent",
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
    rank: 3,
    total: 54,
    title: "Agentic Exception Management Copilot",
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
    rank: 4,
    total: 52,
    title: "Inbound Supplier OTIF Predictor",
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
    rank: 5,
    total: 49,
    title: "Promotion Forecasting and Cannibalization Agent",
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
    rank: 6,
    total: 44,
    title: "Federated Forecast Reconciliation",
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
    rank: 7,
    total: 42,
    title: "Store-Cluster Replenishment Agent",
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
    rank: 8,
    total: 38,
    title: "CO2-per-Case Route Optimizer",
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
