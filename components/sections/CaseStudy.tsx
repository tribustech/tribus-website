import Link from "next/link";
import type { Media, MediaType, Project } from "@/content/types";
import { accentBg, accentSoft, accentText } from "@/lib/accents";
import { getMedia } from "@/content/projectMedia";
import { cn } from "@/lib/utils";
import { Float } from "@/components/motion/Float";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectMedia } from "@/components/devices/ProjectMedia";

/** Max width of a showcase item by media type. */
const SHOWCASE_MAX: Record<MediaType, string> = {
  mockup: "max-w-[240px]",
  phone: "max-w-[230px]",
  "mockup-wide": "max-w-[560px]",
  browser: "max-w-[600px]",
};

export function CaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const media = getMedia(project.slug);
  const hero = media[0];
  const gallery = media.slice(1);

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
              <Float className={cn("w-full", SHOWCASE_MAX[hero.type])}>
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

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* Narrative */}
          <div className="space-y-10">
            <Block label="Overview" accentClass={accentText[project.accent]}>
              <p className="text-lg leading-relaxed text-ink-soft">
                {project.description}
              </p>
            </Block>

            <Block label="What we did" accentClass={accentText[project.accent]}>
              <ul className="space-y-3 text-lg text-ink-soft">
                <li className="flex gap-3">
                  <Dot accent={project.accent} />
                  Partnered from discovery through production, shaping the
                  product around real end-user needs.
                </li>
                <li className="flex gap-3">
                  <Dot accent={project.accent} />
                  Designed and built the{" "}
                  {project.platforms.join(" & ").toLowerCase()} experience with a
                  dedicated team.
                </li>
                <li className="flex gap-3">
                  <Dot accent={project.accent} />
                  Iterated quickly on feedback to ship a production-ready,
                  maintainable solution.
                </li>
              </ul>
            </Block>
          </div>

          {/* Meta sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-xl2)] border border-ink/10 bg-white p-6 shadow-[var(--shadow-card)]">
              <MetaRow label="Platforms">
                <div className="flex flex-wrap gap-1.5">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink-soft"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </MetaRow>
              <MetaRow label="Industry">
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium",
                    accentSoft[project.accent],
                  )}
                >
                  {project.industry}
                </span>
              </MetaRow>
              <MetaRow label="Tech stack">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/10 px-2.5 py-1 text-xs font-medium text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </MetaRow>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal-ink"
                >
                  Visit live
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* Device gallery */}
        {gallery.length > 0 && (
          <section className="mt-16">
            <h2
              className={cn(
                "mb-8 text-sm font-semibold uppercase tracking-wider",
                accentText[project.accent],
              )}
            >
              A look inside
            </h2>
            <Gallery items={gallery} />
          </section>
        )}

        {/* Next project */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-16 flex items-center justify-between gap-4 rounded-[var(--radius-xl2)] border border-ink/10 bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-8"
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

function Gallery({ items }: { items: Media[] }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
      {items.map((m, i) => {
        const isPortrait = m.type === "phone" || m.type === "mockup";
        return (
          <Reveal
            key={m.src}
            delay={i * 0.08}
            className={cn(
              "w-full",
              isPortrait ? "max-w-[230px]" : "max-w-[640px]",
            )}
          >
            <Float amplitude={6} duration={7} delay={i * 0.5}>
              <ProjectMedia media={m} sizes="(min-width: 1024px) 600px, 90vw" />
            </Float>
          </Reveal>
        );
      })}
    </div>
  );
}

function Block({
  label,
  accentClass,
  children,
}: {
  label: string;
  accentClass: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className={cn(
          "mb-4 text-sm font-semibold uppercase tracking-wider",
          accentClass,
        )}
      >
        {label}
      </h2>
      {children}
    </section>
  );
}

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-ink/8 py-3 first:pt-0 last:border-0">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-soft/60">
        {label}
      </p>
      {children}
    </div>
  );
}

function Dot({ accent }: { accent: Project["accent"] }) {
  return (
    <span
      className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", accentBg[accent])}
    />
  );
}
