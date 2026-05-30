# Algoleap Pre-Sales Intelligence v0.1

Internal tool for Algoleap solution consultants to accelerate pre-sales preparation.

## Running the app

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## What is mocked

Everything in this version is mock data. No real API calls are made.

- **Screen 1 (/)** — Form accepts any input; submitting navigates to `/research` and stores form state in `sessionStorage`.
- **Screen 2 (/research)** — Research progress simulation: 7 stages advance automatically over ~8 seconds using `setTimeout`, then the report view renders. All content is Coop Sverige mock data from `lib/mock-data/research-stages.ts`.
- **Screen 3 (/manual-input)** — Two preset source cards (Gemini + Claude) are pre-loaded from `lib/mock-data/company-briefing.ts`. Sources can be added, edited, and removed. Navigation to output is immediate.
- **Screen 4 (/output)** — Full company briefing, strategic narrative, KPI row, and 8 ranked use cases all from `lib/mock-data/`. The filter panel (min score, category, source) works against the mock data. The Generate Demo Prompt modal opens with a realistic prompt template.

## How to extend with a real backend

1. Replace `sessionStorage` form passing with a proper session/context system.
2. Create a `/api/research` route that accepts the form and returns the 7-stage research data structure (`ReportSection[]` from `lib/types.ts`).
3. Pass the API response to `ResearchReport` instead of importing from `lib/mock-data/research-stages.ts`.
4. Replace `lib/mock-data/company-briefing.ts` and `lib/mock-data/use-cases.ts` with API routes that take `company` and return `CompanyBriefing`, `NarrativeBlock[]`, `KpiItem[]`, and `UseCase[]`.
5. Replace `lib/mock-data/prompts.ts` `buildPrompt()` with a real Claude API call that generates a tailored prompt.

## Folder structure

```
app/                    # Next.js App Router pages
  page.tsx              # Screen 1: New Session
  research/page.tsx     # Screen 2: Research progress + report
  manual-input/page.tsx # Screen 3: Manual research input
  output/page.tsx       # Screen 4: Briefing + use cases
components/
  Layout/               # TopNav, Footer
  Screen1/              # InputForm, StatCallouts
  Screen2/              # ProgressCard, ResearchReport
  Screen3/              # SourceCard, AddSourceButton
  Screen4/              # CompanyBriefing, StrategicNarrative, KpiRow, UseCaseList, UseCaseCard, PromptModal
lib/
  types.ts              # All TypeScript interfaces
  mock-data/            # company-briefing.ts, research-stages.ts, use-cases.ts, prompts.ts
```

## Technology

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS + CSS custom properties for the brand palette
- Lucide React icons
- Inter font (next/font/google)
