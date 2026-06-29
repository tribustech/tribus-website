import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ORBIT_APPS, ORBIT_TILES } from "@/content/heroOrbit";
import { getProject } from "@/content/projects";

describe("ORBIT_APPS", () => {
  it("has at least 4 apps", () => {
    expect(ORBIT_APPS.length).toBeGreaterThanOrEqual(4);
  });

  it("every app maps to a real project and an existing screen file", () => {
    for (const app of ORBIT_APPS) {
      expect(getProject(app.slug), app.slug).toBeTruthy();
      expect(app.name, app.slug).toBeTruthy();
      expect(app.tag, app.slug).toBeTruthy();
      const file = join(
        process.cwd(),
        "public",
        "images",
        "work",
        app.slug,
        app.screen,
      );
      expect(existsSync(file), `${app.slug}/${app.screen} missing`).toBe(true);
    }
  });
});

describe("ORBIT_TILES", () => {
  it("has 8 tiles", () => {
    expect(ORBIT_TILES.length).toBe(8);
  });

  it("every tile has a brand hex, an svg path and a positive size", () => {
    for (const t of ORBIT_TILES) {
      expect(t.title, "title").toBeTruthy();
      expect(t.path.length, t.title).toBeGreaterThan(0);
      expect(t.hex, t.title).toMatch(/^[0-9A-Fa-f]{6}$/);
      expect(t.size, t.title).toBeGreaterThan(0);
    }
  });
});
