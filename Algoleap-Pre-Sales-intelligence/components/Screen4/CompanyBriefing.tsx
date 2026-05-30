import { GitBranch, TrendingUp, Cpu, Layers, User, AlertTriangle } from "lucide-react";
import { NetworkBg } from "@/components/NetworkBg";
import { BRIEFING as MOCK_BRIEFING } from "@/lib/mock-data/company-briefing";
import type { CompanyBriefing as CompanyBriefingType } from "@/lib/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  "trending-up": <TrendingUp size={17} />,
  store: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  users: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

interface CompanyBriefingProps {
  briefing?: CompanyBriefingType;
}

export function CompanyBriefing({ briefing = MOCK_BRIEFING }: CompanyBriefingProps) {
  const b = briefing;
  const initials = b.company
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="card snapshot reveal">
      <div className="snapshot-grid">
        <div className="snap-left">
          <NetworkBg opacity={0.07} />
          <div className="snap-logo">
            <span>{initials}</span>
          </div>
          <div className="snap-co">{b.company}</div>
          <div className="snap-tagline">{b.tagline}</div>
          <div className="snap-stats">
            {b.stats.map((s, i) => (
              <div className="snap-stat" key={i}>
                <div className="snap-stat-icon">{ICON_MAP[s.icon] ?? <TrendingUp size={17} />}</div>
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
            <div className="fact-label">
              <GitBranch size={13} /> Ownership and Structure
            </div>
            <div className="fact-text">{b.ownership}</div>
          </div>
          <div className="fact-panel">
            <div className="fact-label">
              <TrendingUp size={13} /> Recent Strategic Moves
            </div>
            <ul className="fact-list">
              {b.moves.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="fact-panel">
            <div className="fact-label">
              <Cpu size={13} /> Stated AI and Digital Initiatives
            </div>
            <ul className="fact-list">
              {b.aiInitiatives.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="fact-panel">
            <div className="fact-label">
              <Layers size={13} /> Technology Stack
            </div>
            <div className="tech-pills">
              {b.techStack.map((t) => (
                <span key={t} className="pill pill-tech">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="fact-panel">
            <div className="fact-label">
              <User size={13} /> Stakeholder Profile
            </div>
            <div className="stakeholder">
              <div className="stakeholder-av">
                {b.stakeholder.name.split(/\s+/).find((w) => w.length > 2)?.[0]?.toUpperCase() ?? "VP"}
              </div>
              <div>
                <div className="sk-name">{b.stakeholder.name}</div>
                <div className="sk-role">{b.stakeholder.role}</div>
                <div className="sk-bio">{b.stakeholder.bio}</div>
              </div>
            </div>
          </div>
          <div className="fact-panel span-2">
            <div className="fact-label">
              <AlertTriangle size={13} /> Current Pressures and Priorities
            </div>
            <ul className="fact-list">
              {b.pressures.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
