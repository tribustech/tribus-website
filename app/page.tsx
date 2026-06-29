import { Hero } from "@/components/sections/Hero";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { IndustryShowcase } from "@/components/sections/IndustryShowcase";
import { WorkModelFlow } from "@/components/sections/WorkModelFlow";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CTA } from "@/components/sections/CTA";
import { getProject } from "@/content/projects";
import type { Project } from "@/content/types";

/* Curated highlights for the industry showcase — the products worth featuring. */
const SHOWCASE_SLUGS = [
  "secom-professional",
  "clubo",
  "votemonitor",
  "recorder",
  "ssm-holding",
  "european-youth-foundation",
  "safefield",
  "bluvi",
];

export default function HomePage() {
  const showcase = SHOWCASE_SLUGS.map((s) => getProject(s)).filter(
    (p): p is Project => Boolean(p),
  );
  return (
    <>
      <Hero />
      <ClientsStrip />
      <FeatureBento />
      <IndustryShowcase projects={showcase} />
      <TechMarquee />
      <WorkModelFlow />
      <CTA />
    </>
  );
}
