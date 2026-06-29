import { describe, it, expect } from "vitest";
import {
  projects,
  getProject,
  featuredProjects,
  allIndustries,
  allTech,
  allPlatforms,
} from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { getMedia } from "@/content/projectMedia";

const ACCENTS = ["teal", "indigo", "coral", "amber", "blue", "green"];

describe("projects", () => {
  it("has 15 projects with unique slugs", () => {
    expect(projects.length).toBe(15);
    expect(new Set(projects.map((p) => p.slug)).size).toBe(15);
  });

  it("every project has non-empty required fields and a valid accent", () => {
    for (const p of projects) {
      expect(p.name, p.slug).toBeTruthy();
      expect(p.tagline, p.slug).toBeTruthy();
      expect(p.description, p.slug).toBeTruthy();
      expect(p.industry, p.slug).toBeTruthy();
      expect(p.platforms.length, p.slug).toBeGreaterThan(0);
      expect(p.tech.length, p.slug).toBeGreaterThan(0);
      expect(ACCENTS, p.slug).toContain(p.accent);
      expect(p.year, p.slug).toBeGreaterThan(2015);
    }
  });

  it("getProject returns by slug and undefined when missing", () => {
    expect(getProject(projects[0].slug)?.slug).toBe(projects[0].slug);
    expect(getProject("does-not-exist")).toBeUndefined();
  });

  it("has at least 3 featured projects", () => {
    expect(featuredProjects().length).toBeGreaterThanOrEqual(3);
  });

  it("every project has at least one valid media item", () => {
    const types = ["phone", "browser", "mockup", "mockup-wide"];
    for (const p of projects) {
      const media = getMedia(p.slug);
      expect(media.length, p.slug).toBeGreaterThan(0);
      for (const m of media) {
        expect(types, p.slug).toContain(m.type);
        expect(m.src.endsWith(".webp"), p.slug).toBe(true);
        expect(m.w, p.slug).toBeGreaterThan(0);
        expect(m.h, p.slug).toBeGreaterThan(0);
      }
    }
  });

  it("derives non-empty filter facets", () => {
    expect(allIndustries().length).toBeGreaterThan(0);
    expect(allTech().length).toBeGreaterThan(0);
    expect(allPlatforms()).toContain("Web");
    expect(allPlatforms()).toContain("Mobile");
  });
});

describe("services", () => {
  it("has 6 service areas, each with a stack", () => {
    expect(services.length).toBe(6);
    for (const s of services) {
      expect(s.title).toBeTruthy();
      expect(s.stack.length).toBeGreaterThan(0);
      expect(ACCENTS).toContain(s.accent);
    }
  });
});

describe("site config", () => {
  it("exposes the canonical tagline and contact details", () => {
    expect(site.tagline).toBe("Your success, is our success.");
    expect(site.email).toBe("andrew.radulescu@wearetribus.com");
    expect(site.nav.map((n) => n.href)).toEqual([
      "/work",
      "/services",
      "/about",
      "/contact",
    ]);
  });
});
