"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Platform, Project } from "@/content/types";
import { filterProjects, type ProjectFilter } from "@/lib/filterProjects";
import { FilterBar, type FilterGroup } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid({
  projects,
  platforms,
  industries,
  tech,
}: {
  projects: Project[];
  platforms: Platform[];
  industries: string[];
  tech: string[];
}) {
  const [filter, setFilter] = useState<ProjectFilter>({});

  const groups: FilterGroup[] = [
    { key: "platform", label: "Platform", options: platforms },
    { key: "industry", label: "Industry", options: industries },
    { key: "tech", label: "Technology", options: tech },
  ];

  const active: Record<string, string | null> = {
    platform: filter.platform ?? null,
    industry: filter.industry ?? null,
    tech: filter.tech ?? null,
  };

  const filtered = useMemo(
    () => filterProjects(projects, filter),
    [projects, filter],
  );

  function handleChange(key: string, value: string | null) {
    setFilter((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <FilterBar
          groups={groups}
          active={active}
          onChange={handleChange}
          resultCount={filtered.length}
        />
        {(filter.platform || filter.industry || filter.tech) && (
          <button
            type="button"
            onClick={() => setFilter({})}
            className="mt-5 text-sm font-medium text-teal-ink underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        )}
      </aside>

      <div>
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="rounded-[var(--radius-xl2)] border border-dashed border-ink/15 p-16 text-center">
            <p className="font-display text-xl font-semibold text-ink">
              No projects match those filters.
            </p>
            <button
              type="button"
              onClick={() => setFilter({})}
              className="mt-3 text-sm font-medium text-teal-ink underline-offset-4 hover:underline"
            >
              Reset and see everything
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
