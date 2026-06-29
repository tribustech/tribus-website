import { describe, it, expect } from "vitest";
import { filterProjects } from "@/lib/filterProjects";
import { projects } from "@/content/projects";

describe("filterProjects", () => {
  it("returns all projects when filter is empty", () => {
    expect(filterProjects(projects, {}).length).toBe(projects.length);
  });

  it("ignores null facets", () => {
    expect(
      filterProjects(projects, { platform: null, industry: null, tech: null })
        .length,
    ).toBe(projects.length);
  });

  it("filters by platform", () => {
    const r = filterProjects(projects, { platform: "Web" });
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((p) => p.platforms.includes("Web"))).toBe(true);
  });

  it("filters by industry", () => {
    const r = filterProjects(projects, { industry: "Civic Tech" });
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((p) => p.industry === "Civic Tech")).toBe(true);
  });

  it("filters by tech", () => {
    const r = filterProjects(projects, { tech: "React Native" });
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((p) => p.tech.includes("React Native"))).toBe(true);
  });

  it("AND-combines multiple facets", () => {
    const mobile = projects.find((p) => p.platforms.includes("Mobile"))!;
    const r = filterProjects(projects, {
      platform: "Mobile",
      tech: mobile.tech[0],
    });
    expect(
      r.every(
        (p) => p.platforms.includes("Mobile") && p.tech.includes(mobile.tech[0]),
      ),
    ).toBe(true);
  });

  it("returns empty array for impossible combination", () => {
    const r = filterProjects(projects, {
      platform: "Web",
      tech: "__nonexistent__",
    });
    expect(r).toEqual([]);
  });
});
