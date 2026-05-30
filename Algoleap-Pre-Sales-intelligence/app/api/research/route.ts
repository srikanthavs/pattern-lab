import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are an expert B2B pre-sales researcher for Algoleap, an AI consulting firm specializing in supply chain AI solutions.

Your role: Generate structured, factual pre-sales research on target companies to help solution consultants prepare for meetings.

Research style:
- Write at a senior consulting level: precise, analytical, no filler
- Be specific about company facts, financials, and technology where known
- Focus on supply chain and operations AI opportunities
- Identify what would resonate (planner-empowering, explainable AI) vs what would not (autonomous black boxes, headcount reduction framing)
- No markdown formatting, no em dashes, no emoji`;

export async function POST(req: NextRequest) {
  try {
    const { company, department, stakeholder, context } = await req.json();

    if (!company) {
      return NextResponse.json({ error: "Company name required" }, { status: 400 });
    }

    const userPrompt = `Research the company: ${company}
Department focus: ${department || "Supply Chain"}
Target stakeholder: ${stakeholder || "VP of Supply Chain"}
Additional context: ${context || "None provided"}

Generate a structured research report with exactly 7 sections from a supply chain AI pre-sales perspective.

Return ONLY valid JSON (no markdown, no code blocks, no commentary) matching this exact structure:
{
  "sections": [
    {
      "readtime": "X min read",
      "paras": ["paragraph 1 (3-5 sentences)", "paragraph 2 (3-5 sentences)"],
      "bullets": ["concise bullet 1", "concise bullet 2", "concise bullet 3"]
    }
  ],
  "entities": {
    "company": ["Company name", "Parent or subsidiary if relevant"],
    "stakeholders": ["Key role 1", "Key role 2", "Key role 3"],
    "technologies": ["Technology 1", "Technology 2", "Technology 3"],
    "suppliers": ["Key partner or supplier 1", "Key partner or supplier 2"]
  }
}

The 7 sections must cover these topics in order:
1. Company Profile - Corporate structure, scale, annual revenue, market position, ownership model
2. AI and Digital Initiatives - Stated technology strategy, current platforms, recent tech investments
3. ${department || "Supply Chain"} Context - Operating model, current systems, known pain points, what keeps them up at night
4. Stakeholder Context - Decision-maker profile, board mandates, what success looks like for them personally
5. Peer Benchmarks - How comparable companies in the same sector are tackling the same challenges
6. Use Case Hypotheses - 3-5 candidate AI applications mapped directly to the pressures you identified
7. Strategic Synthesis - A single point of view: what Algoleap should lead with, why, and what to avoid

Each section: 2 paragraphs (3-5 sentences each) + 3 concise bullet points.
Set readtime based on length: short sections = "1 min read", medium = "2 min read", long = "3 min read".`;

    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
      temperature: 0.4,
      max_tokens: 4000,
    });

    const raw = response.choices[0].message.content ?? "{}";
    const data = JSON.parse(raw);

    // Validate shape
    if (!Array.isArray(data.sections) || data.sections.length !== 7) {
      throw new Error("Invalid response shape from model");
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[/api/research]", err);
    return NextResponse.json(
      { error: "Research generation failed", detail: String(err) },
      { status: 500 }
    );
  }
}
