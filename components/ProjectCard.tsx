import Link from "next/link";
import type { Project } from "@/content/types";
import { accentBg, accentSoft } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { MagneticCard } from "@/components/motion/MagneticCard";

export function ProjectCard({ project }: { project: Project }) {
  const initials = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <MagneticCard className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
      >
        {/* Color header */}
        <div
          className={cn(
            "relative flex h-40 items-center justify-center overflow-hidden",
            accentBg[project.accent],
          )}
        >
          <span
            className="font-display text-6xl font-bold text-white/90"
            style={{ textShadow: "0 6px 24px rgba(0,0,0,0.18)" }}
          >
            {initials}
          </span>
          {/* glossy sweep */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_-10%,rgba(255,255,255,0.45),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute right-4 top-4 rounded-full bg-black/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-xl font-bold tracking-tight text-ink">
              {project.name}
            </h3>
          </div>
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
              {project.tech.length > 3 && (
                <span>+{project.tech.length - 3}</span>
              )}
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-300 group-hover:border-transparent group-hover:bg-ink group-hover:text-white">
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>

        {/* Bottom accent line grows on hover */}
        <span
          className={cn(
            "absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
            accentBg[project.accent],
          )}
        />
      </Link>
    </MagneticCard>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
