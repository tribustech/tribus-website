"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/content/types";
import { accentText, accentBg } from "@/lib/accents";
import { getPrimaryMedia } from "@/content/projectMedia";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "@/components/devices/ProjectMedia";

export function IndustryShowcase({
  industries,
  projectsByIndustry,
}: {
  industries: string[];
  projectsByIndustry: Record<string, Project>;
}) {
  const [active, setActive] = useState(industries[0]);
  const project = projectsByIndustry[active];
  const media = project ? getPrimaryMedia(project.slug) : undefined;

  const chips = project
    ? [
        { label: "Platforms", value: project.platforms.join(" · ") },
        { label: "Technologies", value: `${project.tech.length} in the stack` },
        { label: "Shipped", value: String(project.year) },
        { label: "Industry", value: project.industry },
      ]
    : [];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-green/30 px-3 py-1 text-sm font-semibold text-green">
          Industry wins
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl text-balance">
          Proven success in{" "}
          <span className="italic text-teal-ink">every industry</span>.
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setActive(ind)}
              aria-pressed={active === ind}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                active === ind
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-white text-ink-soft hover:border-ink/40 hover:text-ink",
              )}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {project && (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "grid items-center gap-10 overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 bg-white p-7 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr]",
                )}
              >
                <div>
                  <p
                    className={cn(
                      "mb-2 font-display text-lg font-medium italic",
                      accentText[project.accent],
                    )}
                  >
                    {project.industry}
                  </p>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-md text-lg text-ink-soft text-balance">
                    {project.description}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-4">
                    {chips.map((c) => (
                      <div
                        key={c.label}
                        className="rounded-2xl bg-paper p-4 ring-1 ring-ink/5"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft/60">
                          {c.label}
                        </dt>
                        <dd className="mt-1 font-display text-lg font-bold text-ink">
                          {c.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href={`/work/${project.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-teal-ink"
                  >
                    View project
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div
                  className={cn(
                    "relative flex items-center justify-center overflow-hidden rounded-[var(--radius-xl2)] p-8",
                    accentBg[project.accent],
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(255,255,255,0.4),transparent_55%)]" />
                  {media && (
                    <div
                      className={cn(
                        "relative w-full",
                        media.type === "browser" || media.type === "mockup-wide"
                          ? "max-w-[460px]"
                          : "max-w-[220px]",
                      )}
                    >
                      <ProjectMedia
                        media={media}
                        sizes="(min-width:1024px) 460px, 80vw"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
