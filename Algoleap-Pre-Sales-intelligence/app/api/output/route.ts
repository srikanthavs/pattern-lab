import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are a senior AI strategy consultant at Algoleap, creating a pre-sales briefing document.

Algoleap's positioning: We build AI solutions that augment supply chain planners, not replace them. Our demos are explainable, planner-controlled, and attach to board-level outcomes (working capital, margin, waste, service level).

Framing rules:
- Always position AI as planner-empowerment, never autonomous replacement
- Prioritise use cases that are explainable and defensible at board level
- Warn against demos that imply headcount reduction or centralising control away from local teams
- No markdown formatting, no em dashes, no emoji in output`;

export async function POST(req: NextRequest) {
  try {
    const { company, department, stakeholder, context, sections, manualSources } = await req.json();

    if (!company || !sections) {
      return NextResponse.json({ error: "Company and research sections required" }, { status: 400 });
    }

    const manualText =
      manualSources && manualSources.length > 0
        ? `\n\nAdditional manual research sources:\n${manualSources
            .map((s: { source: string; content: string }) => `[${s.source}]:\n${s.content}`)
            .join("\n\n")}`
        : "";

    const researchSummary = sections
      .map((sec: { paras: string[]; bullets: string[] }, i: number) =>
        `Section ${i + 1}:\n${sec.paras.join("\n")}\n${sec.bullets.join("\n")}`
      )
      .join("\n\n");

    const userPrompt = `Company: ${company}
Department: ${department || "Supply Chain"}
Stakeholder: ${stakeholder || "VP of Supply Chain"}
Context: ${context || "None"}

Research findings:
${researchSummary}${manualText}

Generate a complete pre-sales output package. Return ONLY valid JSON (no markdown, no code blocks) with this exact structure:

{
  "briefing": {
    "company": "Full company name",
    "tagline": "Max 8-word description",
    "stats": [
      {"icon": "trending-up", "value": "Revenue or key financial metric", "label": "Short context for this metric"},
      {"icon": "store", "value": "Operational scale metric", "label": "Short context"},
      {"icon": "users", "value": "Ownership or org structure", "label": "Short context"}
    ],
    "ownership": "2-3 sentence description of ownership and governance structure",
    "moves": [
      "Strategic move 1 (one sentence each)",
      "Strategic move 2",
      "Strategic move 3",
      "Strategic move 4"
    ],
    "aiInitiatives": [
      "AI or digital initiative 1",
      "Initiative 2",
      "Initiative 3"
    ],
    "techStack": ["Technology 1", "Technology 2", "Technology 3", "Technology 4"],
    "stakeholder": {
      "name": "Title of target stakeholder (e.g. VP of Supply Chain)",
      "role": "Likely engagement sponsor",
      "bio": "2-3 sentence profile of what this person cares about and what success looks like for them"
    },
    "pressures": [
      "Business pressure 1 (one sentence each)",
      "Pressure 2",
      "Pressure 3",
      "Pressure 4"
    ]
  },
  "narrative": [
    {"type": "p", "text": "Opening paragraph: set up the 2-3 strategic tensions this company sits at. 4-6 sentences."},
    {"type": "p", "text": "Second paragraph: what the strategic tensions imply for use case selection. Which applications will resonate most and why."},
    {"type": "quote", "text": "One powerful sentence capturing the winning strategic frame for Algoleap."},
    {"type": "h3", "text": "What would resonate"},
    {"type": "p", "text": "Specific types of AI solutions that will land well at this company and why."},
    {"type": "h3", "text": "What would not land"},
    {"type": "p", "text": "Specific approaches to avoid at this company and why they would fail."},
    {"type": "p", "text": "Closing paragraph: how to frame every use case that follows. What risk to manage."}
  ],
  "useCases": [
    {
      "rank": 1,
      "total": 56,
      "title": "Use case title (4-6 words)",
      "sub": "One sentence description of what this does for a supply chain planner",
      "cats": ["Category1", "Category2"],
      "scores": [9, 10, 8, 9, 8, 9],
      "why": [
        "Why this fits ${company} specifically (one sentence)",
        "Second reason (one sentence)",
        "Third reason (one sentence)",
        "Fourth reason (one sentence)"
      ],
      "sources": ["A"]
    }
  ]
}

Generate exactly 8 use cases, ranked by total score highest first.
Score each across 6 dimensions (score each 1-10): Strategic Fit, Business Impact, Data Readiness, Demo Speed, Differentiation, Stakeholder Fit.
Total = sum of all 6 scores (realistic range: 35-60).
Categories must be chosen from: Working Capital, Service Level, Sustainability, Operations, Margin.
Icon values for briefing stats must be exactly one of: "trending-up", "store", "users" (one of each, in that order).
Sources array: use "A" for Algoleap auto-research, "G" for Gemini if mentioned, "C" for Claude if mentioned.`;

    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.4,
      max_tokens: 5000,
    });

    const raw = response.choices[0].message.content ?? "{}";
    const data = JSON.parse(raw);

    if (!data.briefing || !Array.isArray(data.narrative) || !Array.isArray(data.useCases)) {
      throw new Error("Invalid response shape from model");
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[/api/output]", err);
    return NextResponse.json(
      { error: "Output generation failed", detail: String(err) },
      { status: 500 }
    );
  }
}
