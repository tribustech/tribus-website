import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/content/projects";

export function FeaturedProjects() {
  const items = featuredProjects().slice(0, 6);
  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          kicker="Selected work"
          title="Products people actually use."
          description="A look at a few of the web and mobile products we've designed, built and shipped."
        />
        <Link
          href="/work"
          className="group inline-flex shrink-0 items-center gap-2 font-semibold text-ink"
        >
          View all projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
