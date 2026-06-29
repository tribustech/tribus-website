# Hero "Living Orbit" Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static phone+browser in the hero's right column with a Bevel-style living cluster — one phone cross-fading through real client apps, ringed by levitating tech-stack tiles on faint orbital arcs, with a synced caption card.

**Architecture:** A new self-contained client component `HeroOrbit` owns the cluster (phone cycle via `setInterval` + `AnimatePresence`, tech tiles wrapped in the existing `Float`, arc/glow background, caption card). All content/positioning lives in a new `content/heroOrbit.ts` data module. `Hero.tsx` swaps its old `HeroVisual` for `HeroOrbit`. Tech-logo paths/colors come from the `simple-icons` package.

**Tech Stack:** Next.js 15 (App Router, Turbopack), React 19, TypeScript strict, Tailwind v4, `motion/react`, `simple-icons`, Vitest.

## Global Constraints

- Desktop / `lg+` only — the cluster stays `hidden lg:block`, exactly like today's `HeroVisual`.
- All motion gated on reduced-motion. `Hero` passes a `reduce` boolean; `Float` already self-gates via `useReducedMotion()`.
- The visual is decorative: root is `aria-hidden`, all images use empty `alt=""`.
- Reuse existing primitives — `Float` (`components/motion/Float.tsx`), the `AnimatePresence mode="wait"` cross-fade pattern, `--shadow-card`, brand color tokens.
- No new project screenshots; reuse existing `public/images/work/<slug>/*.webp`.
- Caption stack tags must reflect each project's real `tech` array in `content/projects.ts` (verified below).
- `npm run test` must stay green (existing 26-project assertions are unaffected).

Verified facts (do not re-guess):
- Phone screens that exist: `bluvi/screen-home.webp`, `clubo/screen-home.webp`, `secom-professional/screen-home.webp`, `vic/screen-home.webp`, `ssm-holding/screen-01.webp` (SSM has **no** `screen-home`).
- Real `tech` arrays: bluvi `[React Native, NestJS, PostgreSQL]`; clubo `[React Native, Node.js, Firebase]` (name "Super Brain"); secom-professional `[React Native, NestJS, PostgreSQL, AWS]`; vic `[React, React Native, NestJS, MongoDB]`; ssm-holding `[React Native, NestJS, PostgreSQL]`.
- `Float` props: `{ children, className?, amplitude?, duration?, delay? }` — **no `style` prop**, and it stops itself under reduced motion.
- `simple-icons` is **not yet installed**. Each named export (e.g. `siReact`) is an object with `.title`, `.hex` (6-char, no `#`), `.path` (SVG path `d`).

---

### Task 1: Orbit data module + tests

**Files:**
- Create: `content/heroOrbit.ts`
- Create: `content/__tests__/heroOrbit.test.ts`
- Modify: `package.json` (add `simple-icons` dependency)

**Interfaces:**
- Consumes: `getProject` from `@/content/projects`; named icon exports from `simple-icons`.
- Produces:
  - `interface OrbitApp { slug: string; screen: string; name: string; tag: string }`
  - `interface OrbitTile { title: string; hex: string; path: string; top: number; left: number; size: number; amplitude: number; duration: number; delay: number }`
  - `export const ORBIT_APPS: OrbitApp[]` (5 entries)
  - `export const ORBIT_TILES: OrbitTile[]` (8 entries)

- [ ] **Step 1: Write the failing test**

Create `content/__tests__/heroOrbit.test.ts`:

```ts
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- heroOrbit`
Expected: FAIL — cannot resolve `@/content/heroOrbit` (and `simple-icons` not installed).

- [ ] **Step 3: Install simple-icons**

Run: `npm install simple-icons`
Expected: adds `simple-icons` to `package.json` dependencies, exits 0.

- [ ] **Step 4: Create the data module**

Create `content/heroOrbit.ts`:

```ts
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siFlutter,
  siKotlin,
  siFigma,
  siAngular,
} from "simple-icons";

/** One app the hero phone cross-fades through. */
export interface OrbitApp {
  slug: string;
  screen: string;
  name: string;
  tag: string;
}

/** Flagship apps for the phone cycle. Screens verified to exist on disk;
 *  tags use each project's real secondary tech for variety. */
export const ORBIT_APPS: OrbitApp[] = [
  { slug: "bluvi", screen: "screen-home.webp", name: "Bluvi", tag: "React Native · NestJS" },
  { slug: "clubo", screen: "screen-home.webp", name: "Super Brain", tag: "React Native · Firebase" },
  { slug: "secom-professional", screen: "screen-home.webp", name: "Secom Professional", tag: "React Native · AWS" },
  { slug: "vic", screen: "screen-home.webp", name: "VIC", tag: "React · React Native" },
  { slug: "ssm-holding", screen: "screen-01.webp", name: "SSM Holding", tag: "React Native · PostgreSQL" },
];

/** One levitating tech tile. top/left are % of the orbit container;
 *  size is px; amplitude/duration/delay drive the Float bob. */
export interface OrbitTile {
  title: string;
  hex: string;
  path: string;
  top: number;
  left: number;
  size: number;
  amplitude: number;
  duration: number;
  delay: number;
}

type Icon = { title: string; hex: string; path: string };

const tile = (
  icon: Icon,
  top: number,
  left: number,
  size: number,
  amplitude: number,
  duration: number,
  delay: number,
): OrbitTile => ({
  title: icon.title,
  hex: icon.hex,
  path: icon.path,
  top,
  left,
  size,
  amplitude,
  duration,
  delay,
});

/** 8 tiles in a loose arc sweeping top-center → right → bottom-center
 *  around the phone (which sits in the left ~46% of the container). */
export const ORBIT_TILES: OrbitTile[] = [
  tile(siTypescript, 4, 38, 50, 10, 8, 0.3),
  tile(siNextdotjs, 6, 58, 58, 9, 7.5, 0),
  tile(siReact, 20, 82, 64, 12, 8.5, 0.6),
  tile(siAngular, 32, 62, 46, 8, 7, 1.1),
  tile(siFigma, 44, 92, 56, 8, 7, 1.2),
  tile(siKotlin, 52, 68, 48, 7, 6.5, 0.4),
  tile(siFlutter, 66, 84, 60, 11, 9, 0.9),
  tile(siNodedotjs, 84, 64, 54, 9, 7.5, 1.5),
];
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm run test -- heroOrbit`
Expected: PASS (5 assertions across 2 suites). If a `simple-icons` export name is unresolved (TypeScript error / `undefined`), substitute the documented export — `siVercel` or `siExpo` are valid fallbacks — and re-run.

- [ ] **Step 6: Commit**

```bash
git add content/heroOrbit.ts content/__tests__/heroOrbit.test.ts package.json package-lock.json
git commit -m "feat: hero orbit data module — apps to cycle + tech tiles"
```

---

### Task 2: HeroOrbit component, wired into the hero

**Files:**
- Create: `components/devices/HeroOrbit.tsx`
- Modify: `components/sections/Hero.tsx` (replace `HeroVisual` usage + definition + now-dead imports)

**Interfaces:**
- Consumes: `ORBIT_APPS`, `ORBIT_TILES` from `@/content/heroOrbit`; `Float` from `@/components/motion/Float`; `Image` from `next/image`; `AnimatePresence, motion` from `motion/react`.
- Produces: `export function HeroOrbit({ reduce }: { reduce: boolean })`.

- [ ] **Step 1: Create the HeroOrbit component**

Create `components/devices/HeroOrbit.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Float } from "@/components/motion/Float";
import { ORBIT_APPS, ORBIT_TILES } from "@/content/heroOrbit";

/**
 * Bevel-style living hero cluster (desktop only): a phone whose screen
 * cross-fades through real client apps, ringed by levitating tech-stack tiles
 * on faint orbital arcs, with a caption card synced to the current app.
 */
export function HeroOrbit({ reduce }: { reduce: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % ORBIT_APPS.length),
      3000,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const app = ORBIT_APPS[active];

  return (
    <motion.div
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative hidden h-[34rem] lg:block"
    >
      {/* teal radial glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_50%,rgba(1,194,187,0.16),transparent_62%)]" />

      {/* faint concentric arc guides, centered behind the phone */}
      <div className="pointer-events-none absolute left-[26%] top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[24rem] w-[24rem] rounded-full border border-ink/[0.06]" />
        <div className="absolute inset-0 m-auto h-[34rem] w-[34rem] rounded-full border border-ink/[0.04]" />
      </div>

      {/* phone, center-left, cycling app screens (own frame so only the
          screen cross-fades; chrome matches PhoneFrame) */}
      <div className="absolute left-[4%] top-1/2 w-[46%] -translate-y-1/2">
        <div className="relative aspect-[9/19.5] w-full rounded-[14%/6.5%] bg-ink p-[3.5%] shadow-2xl ring-1 ring-black/30">
          <div className="relative h-full w-full overflow-hidden rounded-[11%/5.2%] bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={app.slug}
                initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={`/images/work/${app.slug}/${app.screen}`}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 240px, 0px"
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            {/* dynamic island */}
            <div className="absolute left-1/2 top-[2.5%] h-[3.5%] w-[28%] -translate-x-1/2 rounded-full bg-ink" />
          </div>
        </div>
      </div>

      {/* caption card synced to the phone screen */}
      <div className="absolute bottom-[6%] left-[1%] w-[46%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={app.slug}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur"
          >
            <p className="font-display text-sm font-bold text-ink">{app.name}</p>
            <p className="mt-0.5 text-xs font-medium text-ink-soft">{app.tag}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* levitating tech tiles — outer div positions, Float bobs, tile draws */}
      {ORBIT_TILES.map((t) => (
        <div
          key={t.title}
          className="absolute"
          style={{
            top: `${t.top}%`,
            left: `${t.left}%`,
            width: t.size,
            height: t.size,
          }}
        >
          <Float
            amplitude={t.amplitude}
            duration={t.duration}
            delay={t.delay}
            className="h-full w-full"
          >
            <div className="flex h-full w-full items-center justify-center rounded-[22%] bg-white shadow-[var(--shadow-card)]">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-[52%] w-[52%]"
                fill={`#${t.hex}`}
              >
                <path d={t.path} />
              </svg>
            </div>
          </Float>
        </div>
      ))}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify the project builds with the new component**

Run: `npm run build`
Expected: build succeeds (component compiles even though not yet rendered).

- [ ] **Step 3: Wire HeroOrbit into Hero, remove the old HeroVisual**

In `components/sections/Hero.tsx`:

Replace the three now-unused imports (lines 6-8):

```tsx
import { LogoMark } from "@/components/Logo";
import { Float } from "@/components/motion/Float";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { BrowserFrame } from "@/components/devices/BrowserFrame";
```

with:

```tsx
import { LogoMark } from "@/components/Logo";
import { HeroOrbit } from "@/components/devices/HeroOrbit";
```

Replace the visual call site:

```tsx
        <HeroVisual reduce={!!reduce} />
```

with:

```tsx
        <HeroOrbit reduce={!!reduce} />
```

Delete the entire `HeroVisual` function (the block starting `/** Floating product cluster ... */` through its closing `}` — currently lines 106-146). Leave `Underline` and `FloatingBlobs` untouched.

- [ ] **Step 4: Lint and build**

Run: `npx eslint components/sections/Hero.tsx components/devices/HeroOrbit.tsx`
Expected: exit 0, no warnings (confirms no unused imports left in Hero).

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 5: Visual verification via Playwright**

Start the production server in the background:

```bash
npm run build && (npm start &)
```

Wait ~3s for boot, then capture two frames ~3.5s apart at desktop width to confirm the screen + caption advance:

```bash
cat > /tmp/hero_orbit_shot.mjs <<'EOF'
import { chromium } from "playwright";
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })).newPage();
await p.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 45000 });
await p.waitForTimeout(800);
await p.screenshot({ path: "/tmp/hero_orbit_a.png" });
await p.waitForTimeout(3500);
await p.screenshot({ path: "/tmp/hero_orbit_b.png" });
// reduced motion -> static
const p2 = await (await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: "reduce" })).newPage();
await p2.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 45000 });
await p2.waitForTimeout(1200);
await p2.screenshot({ path: "/tmp/hero_orbit_reduced.png" });
// mobile -> no orbit
const p3 = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })).newPage();
await p3.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 45000 });
await p3.waitForTimeout(800);
await p3.screenshot({ path: "/tmp/hero_orbit_mobile.png" });
await b.close();
console.log("ok");
EOF
node /tmp/hero_orbit_shot.mjs
```

Acceptance checks (read the four screenshots):
- `hero_orbit_a.png`: phone on the right column, ~8 brand-colored rounded tiles scattered in an arc, faint ring guides, caption card naming an app.
- `hero_orbit_b.png`: phone screen **and** caption show a *different* app than `_a` (cycle advanced).
- `hero_orbit_reduced.png`: renders a single static frame — first app, no errors, tiles present and still.
- `hero_orbit_mobile.png`: no orbit/phone visible (visual hidden); hero text + buttons intact, layout unbroken.

If any check fails, adjust `HeroOrbit.tsx` (positions/sizes/timing) and re-run this step before committing.

- [ ] **Step 6: Stop the server and commit**

```bash
pkill -f "next start" 2>/dev/null; pkill -f "next-server" 2>/dev/null
git add components/devices/HeroOrbit.tsx components/sections/Hero.tsx
git commit -m "feat: living-orbit hero visual — phone cycles apps, tech tiles levitate"
```

---

## Self-Review

**Spec coverage:**
- Phone center-left cycling ~5 apps → Task 2 component + Task 1 `ORBIT_APPS` (5).
- ~8 levitating tech tiles, white rounded squares, brand color, `Float` in place → Task 2 tile map + Task 1 `ORBIT_TILES` (8).
- Faint concentric arc guides + teal glow → Task 2 background divs.
- Caption card synced to screen → Task 2 caption `AnimatePresence` keyed on `app.slug`.
- Desktop-only, reduced-motion gated, decorative/aria-hidden → `hidden lg:block`, `reduce` branches, `aria-hidden` root, empty alts.
- `simple-icons` sourcing → Task 1 install + imports.
- File structure (new `HeroOrbit.tsx`, new `content/heroOrbit.ts`, modify `Hero.tsx`, add dep) → matches spec exactly.
- Verification (eslint clean, build green, Playwright, vitest) → Task 1 tests + Task 2 Steps 4-5.

**Placeholder scan:** none — every code step has complete code; no TBD/TODO/"handle edge cases".

**Type consistency:** `OrbitApp`/`OrbitTile` field names (`slug, screen, name, tag` / `title, hex, path, top, left, size, amplitude, duration, delay`) are identical between the Task 1 definitions, the Task 1 test, and the Task 2 component usage. `HeroOrbit({ reduce })` signature matches the `Hero.tsx` call site.
