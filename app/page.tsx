import { Hero } from "@/components/sections/Hero";
import { StatBand } from "@/components/sections/StatBand";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { IndustryShowcase } from "@/components/sections/IndustryShowcase";
import { WorkModelFlow } from "@/components/sections/WorkModelFlow";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CTA } from "@/components/sections/CTA";
import { featuredProjects, projects } from "@/content/projects";
import type { Project } from "@/content/types";

function buildIndustryMap() {
  const featured = featuredProjects();
  const industries: string[] = [];
  const map: Record<string, Project> = {};
  for (const p of featured) {
    if (!map[p.industry]) {
      industries.push(p.industry);
      map[p.industry] = p;
    }
  }
  // Backfill from any project if fewer than 4 tabs.
  for (const p of projects) {
    if (industries.length >= 6) break;
    if (!map[p.industry]) {
      industries.push(p.industry);
      map[p.industry] = p;
    }
  }
  return { industries, map };
}

export default function HomePage() {
  const { industries, map } = buildIndustryMap();
  return (
    <>
      <Hero />
      <StatBand />
      <FeatureBento />
      <IndustryShowcase industries={industries} projectsByIndustry={map} />
      <TechMarquee />
      <WorkModelFlow />
      <ClientsStrip />
      <CTA />
    </>
  );
}
