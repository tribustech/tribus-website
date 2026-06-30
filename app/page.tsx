import { Hero } from "@/components/sections/Hero";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { IndustryShowcase } from "@/components/sections/IndustryShowcase";
import { WorkModelFlow } from "@/components/sections/WorkModelFlow";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/JsonLd";
import { serviceCatalogSchema } from "@/lib/schema";
import { getProject } from "@/content/projects";
import type { Metadata } from "next";
import type { Project } from "@/content/types";

// Home inherits the root title/description/OG; it just needs its own canonical.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
      <JsonLd data={serviceCatalogSchema()} />
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
