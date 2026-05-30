export interface SessionForm {
  company: string;
  department: string;
  stakeholder: string;
  context: string;
}

export interface ResearchStage {
  id: number;
  title: string;
  desc: string;
}

export interface ReportSection {
  readtime: string;
  paras: string[];
  bullets: string[];
}

export interface EntityMap {
  company: string[];
  stakeholders: string[];
  technologies: string[];
  suppliers: string[];
}

export interface ManualSource {
  id: number;
  source: string;
  content: string;
  preset: boolean;
  editing?: boolean;
}

export interface StatEntry {
  icon: string;
  value: string;
  label: string;
}

export interface StakeholderProfile {
  name: string;
  role: string;
  bio: string;
}

export interface CompanyBriefing {
  company: string;
  tagline: string;
  stats: StatEntry[];
  ownership: string;
  moves: string[];
  aiInitiatives: string[];
  techStack: string[];
  stakeholder: StakeholderProfile;
  pressures: string[];
}

export interface NarrativeBlock {
  type: "p" | "h3" | "quote";
  text: string;
}

export interface KpiItem {
  num: string;
  label: string;
}

export interface UseCase {
  rank: number;
  total: number;
  title: string;
  sub: string;
  cats: string[];
  scores: number[];
  why: string[];
  sources: string[];
}

export interface SourceMeta {
  label: string;
  color: string;
}

export interface PromptLine {
  t: string;
  c: "c-key" | "c-com" | "c-str" | "";
}
