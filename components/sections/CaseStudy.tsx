import Link from "next/link";
import type { Project } from "@/content/types";
import { accentBg, accentSoft, accentText } from "@/lib/accents";
import { getMedia } from "@/content/projectMedia";
import { cn } from "@/lib/utils";
import { Float } from "@/components/motion/Float";
import {
  StickyDeviceShowcase,
  type ShowcaseBlock,
} from "@/components/devices/StickyDeviceShowcase";
import { ProjectMedia } from "@/components/devices/ProjectMedia";

export function CaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const media = getMedia(project.slug);
  const hero = media[0];
  const heroPortrait =
    hero && (hero.type === "phone" || hero.type === "mockup" || hero.type === "shot");

  const blocks: ShowcaseBlock[] = [
    {
      kicker: "Overview",
      title: project.tagline,
      body: project.description,
    },
    {
      kicker: "Experience",
      title: "Designed around the people using it",
      body: `We shaped the ${project.platforms
        .join(" & ")
        .toLowerCase()} experience around real end-user needs, sweating the details that make it feel effortless.`,
    },
    {
      kicker: "Built with",
      title: project.tech.join(" · "),
      body: "A stack chosen to fit the problem — reliable, maintainable and ready to scale.",
    },
    {
      kicker: "Delivered",
      title: "From discovery to production",
      body: "Shipped with a dedicated team, iterating quickly on feedback to get a production-ready solution into users' hands.",
    },
  ];

  return (
    <article>
      {/* Hero band in the project accent */}
      <header className={cn("relative overflow-hidden", accentBg[project.accent])}>
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white"
            >
              <span aria-hidden>←</span> All work
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium text-white/90">
              <span className="rounded-full bg-black/15 px-3 py-1 backdrop-blur-sm">
                {project.industry}
              </span>
              <span className="rounded-full bg-black/15 px-3 py-1 backdrop-blur-sm">
                {project.year}
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl text-balance">
              {project.name}
            </h1>
            <p className="mt-4 max-w-xl text-xl text-white/90 text-balance">
              {project.tagline}
            </p>
          </div>

          {hero && (
            <div className="flex justify-center lg:justify-end">
              <Float
                className={cn("w-full", heroPortrait ? "max-w-[240px]" : "max-w-[560px]")}
              >
                <ProjectMedia
                  media={hero}
                  priority
                  sizes="(min-width: 1024px) 560px, 80vw"
                />
              </Float>
            </div>
          )}
        </div>
      </header>

      {/* Facts strip */}
      <div className="border-b border-ink/8 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-5 py-6 sm:px-8">
          <Fact label="Platforms" value={project.platforms.join(" · ")} />
          <Fact label="Industry" value={project.industry} />
          <Fact label="Year" value={String(project.year)} />
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium",
                  accentSoft[project.accent],
                )}
              >
                {t}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal-ink"
            >
              Visit live <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Sticky device walkthrough */}
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <StickyDeviceShowcase
          media={media}
          blocks={blocks}
          accentClass={accentText[project.accent]}
        />

        {/* Next project */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-8 flex items-center justify-between gap-4 rounded-[var(--radius-xl2)] border border-ink/10 bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-8"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft/70">
              Next project
            </p>
            <p className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">
              {next.name}
            </p>
          </div>
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-transform group-hover:translate-x-1",
              accentBg[next.accent],
            )}
            aria-hidden
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/60">
        {label}
      </p>
      <p className="mt-0.5 font-medium text-ink">{value}</p>
    </div>
  );
}
