import { Hero } from "@/components/sections/Hero";
import { StatBand } from "@/components/sections/StatBand";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WorkModelFlow } from "@/components/sections/WorkModelFlow";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <FeaturedProjects />
      <TechMarquee />
      <WorkModelFlow />
      <ClientsStrip />
      <CTA />
    </>
  );
}
