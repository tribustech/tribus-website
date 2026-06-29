import Link from "next/link";
import type { MediaType, Project } from "@/content/types";
import { accentBg, accentSoft } from "@/lib/accents";
import { getPrimaryMedia } from "@/content/projectMedia";
import { cn } from "@/lib/utils";
import { MagneticCard } from "@/components/motion/MagneticCard";
import { ProjectMedia } from "@/components/devices/ProjectMedia";

/** Per-media-type placement of the floating device inside the accent header. */
const MEDIA_LAYOUT: Record<MediaType, string> = {
  mockup:
    "bottom-[-18%] w-[46%] rotate-[-5deg] group-hover:bottom-[-12%] group-hover:rotate-0",
  "mockup-wide":
    "bottom-[-8%] w-[96%] rotate-[-1.5deg] group-hover:bottom-[-3%] group-hover:rotate-0",
  phone:
    "bottom-[-20%] w-[42%] rotate-[-5deg] group-hover:bottom-[-14%] group-hover:rotate-0",
  browser:
    "bottom-[-16%] w-[90%] rotate-[-1.5deg] group-hover:bottom-[-10%] group-hover:rotate-0",
};

export function ProjectCard({ project }: { project: Project }) {
  const media = getPrimaryMedia(project.slug);

  return (
    <MagneticCard className="h-full" intensity={6}>
      <Link
        href={`/work/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
      >
        {/* Accent showcase header with floating device */}
        <div
          className={cn(
            "relative h-60 overflow-hidden",
            accentBg[project.accent],
          )}
        >
          {/* light + shade */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_82%_-10%,rgba(255,255,255,0.42),transparent_55%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

          <span className="absolute right-4 top-4 z-10 rounded-full bg-black/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.year}
          </span>

          {media ? (
            <div
              className={cn(
                "pointer-events-none absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out will-change-transform",
                MEDIA_LAYOUT[media.type],
              )}
            >
              <ProjectMedia
                media={media}
                sizes="(min-width: 1024px) 380px, 90vw"
              />
            </div>
          ) : (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold text-white/90">
              {project.name.slice(0, 2)}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-ink-soft">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-medium",
                accentSoft[project.accent],
              )}
            >
              {project.industry}
            </span>
            {project.platforms.map((p) => (
              <span
                key={p}
                className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink-soft"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-6">
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-ink-soft/80">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t}>{t}</span>
              ))}
              {project.tech.length > 3 && <span>+{project.tech.length - 3}</span>}
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </MagneticCard>
  );
}
