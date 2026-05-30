import type { UseCase, PromptLine } from "@/lib/types";

export function buildPrompt(uc: UseCase): PromptLine[] {
  const K = (t: string): PromptLine => ({ t, c: "c-key" });
  const C = (t: string): PromptLine => ({ t, c: "c-com" });
  const P = (t: string): PromptLine => ({ t, c: "" });

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
    P("- Existing stack: SAP S/4HANA, RELEX for forecasting"),
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

export function promptToText(lines: PromptLine[]): string {
  return lines.map((l) => l.t).join("\n");
}
