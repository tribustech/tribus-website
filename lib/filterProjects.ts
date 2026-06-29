import type { Platform, Project } from "@/content/types";

export interface ProjectFilter {
  platform?: Platform | null;
  industry?: string | null;
  tech?: string | null;
}

/**
 * Filter projects with AND semantics. A null/undefined facet is ignored.
 */
export function filterProjects(
  list: Project[],
  filter: ProjectFilter,
): Project[] {
  return list.filter((p) => {
    if (filter.platform && !p.platforms.includes(filter.platform)) return false;
    if (filter.industry && p.industry !== filter.industry) return false;
    if (filter.tech && !p.tech.includes(filter.tech)) return false;
    return true;
  });
}
