export type Platform = "Web" | "Mobile" | "Cross-platform";

export type Accent = "teal" | "indigo" | "coral" | "amber" | "blue" | "green";

export interface Project {
  slug: string;
  name: string;
  /** Short one-liner shown on cards. */
  tagline: string;
  /** Draft description (reviewable) — 1–3 sentences. */
  description: string;
  platforms: Platform[];
  industry: string;
  tech: string[];
  accent: Accent;
  year: number;
  featured: boolean;
  /** Optional external/live link. */
  link?: string;
}

export interface ServiceTechGroup {
  label: string;
  items: string[];
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  accent: Accent;
  /** Grouped technologies, mirroring the deck's stack. */
  stack: ServiceTechGroup[];
}

export interface WorkStep {
  index: number;
  title: string;
  description: string;
  accent: Accent;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  altTagline: string;
  description: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  url: string;
  nav: { label: string; href: string }[];
  stats: Stat[];
}
