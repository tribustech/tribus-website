# Hero "Living Orbit" Visual — Design

**Date:** 2026-06-29
**Status:** Approved (pending spec review)

## Goal

Replace the static phone + browser in the hero's right column with a Bevel-style
living cluster: one phone whose screen cross-fades through real client apps,
ringed by levitating tech-stack tiles, over faint concentric arc guides.
Technologies orbit; the product (the apps) sits in the middle.

Reference: the `feature_horizontal-layout cc-teal` ("Connect your health records")
section on https://www.bevel.health/ — a central phone surrounded by rounded
brand-logo tiles floating on concentric orbital arcs, with small data cards
peeking over the phone edges.

## Scope

- Desktop / `lg+` only. The orbit needs horizontal room; on smaller screens the
  hero visual stays hidden, exactly as today (`hidden lg:block`).
- Affects the hero section only. No change to TechMarquee, ClientsStrip, or any
  other section.

## Layout (desktop)

- Lives in the existing hero grid's right column
  (`lg:grid-cols-[1.05fr_0.92fr]`), replacing today's `HeroVisual`.
- **Phone**: roughly center-left of the column, slightly inset, at the current
  `PhoneFrame` size. It is the focal point.
- **Tech tiles**: ~8 white rounded-square tiles (≈56–64px), each holding one
  brand logo in its official brand color with a soft `--shadow-card`. Scattered
  in a loose arc — upper-right and lower-left of the phone. This is Bevel's tile
  style.
- **Arc guides**: keep the existing teal radial glow behind the cluster, plus
  1–2 very faint thin concentric arc strokes to imply orbits. Decorative,
  `aria-hidden`, low opacity.
- **Caption card**: a small card floating at the phone's lower edge (analog of
  Bevel's "Blood Test" card) naming the current app + its stack tag, e.g.
  "Bluvi · React Native". Cross-fades in sync with the phone screen.

## The orbiting tiles

- **Source:** `simple-icons` npm package — each icon exposes an SVG path string
  and an official brand hex. No network requests; renders as inline `<svg>`.
- **Curated set (8):** React, Next.js, TypeScript, React Native, Node.js,
  Flutter, Figma, Swift. (Spans web + mobile + design; all present in
  simple-icons. If any is unavailable/trademark-removed at build time,
  substitute Kotlin or Vercel — both are in the package.)
- **Tile rendering:** white background, rounded `~22%` corners, the logo
  centered at brand hex, `--shadow-card`. Logo fills ~52% of the tile.
- **Motion:** each tile levitates *in place* via the existing `Float` component
  with staggered `duration`/`delay`/`amplitude`. No orbital rotation — that
  reads as restless next to the cycling screen. Bevel's tiles float in place too.

## The center phone

- Cross-fades through ~5 flagship app home screens, ~3s each, looping, with a
  smooth fade + slight scale (reuse the `AnimatePresence mode="wait"` pattern
  already in `StickyDeviceShowcase.tsx`).
- Curated app list (slug → screen → display name → stack tag), all screens
  already in `public/images/work/<slug>/`:
  - `bluvi` → `screen-home.webp` → "Bluvi" · "React Native"
  - `clubo` → `screen-home.webp` → "Super Brain" · "React Native"
  - `secom-professional` → `screen-home.webp` → "Secom" · "Flutter"
  - `ssm-holding` → `screen-home.webp` → "SSM Holding" · "React Native"
  - `vic` → `screen-home.webp` → "VIC" · "React Native"
  - (Exact screen filenames and stack tags to be confirmed against the files
    during implementation; pick the strongest home screen per project. Stack
    tags must reflect each project's real stack — verify in `content/projects.ts`
    before hardcoding.)
- The **caption card** shows the current entry's `name` + `tag` and cross-fades
  on the same key as the phone screen, so screen + caption always agree.

## Motion & accessibility

- All motion (tile float, phone cross-fade, caption swap) is gated on
  `prefers-reduced-motion` via `useReducedMotion()`, exactly as `Hero` already
  does. Reduced motion → one static frame: first app on the phone, its caption,
  tiles still, no float, no cycling.
- Tiles, arcs, and glow are `aria-hidden`; the phone image uses an empty `alt`
  (decorative — the hero's meaning is in the headline/copy, not this visual).

## File structure

- **Create `components/devices/HeroOrbit.tsx`** — `"use client"`. Owns the whole
  cluster: phone cycle (state + interval + AnimatePresence), tech tiles
  (map over the tile list, wrapped in `Float`), arc/glow background, and the
  caption card. Takes a `reduce: boolean` prop (passed from `Hero`).
- **Create `content/heroOrbit.ts`** — exports `ORBIT_APPS` (the
  `{ slug, screen, name, tag }[]` list above) and `ORBIT_TILES`
  (`{ icon: simpleIconSlug, top, left, size, amplitude, duration, delay }[]`).
  Keeps content/positioning out of the component.
- **Modify `components/sections/Hero.tsx`** — replace `<HeroVisual reduce=… />`
  with `<HeroOrbit reduce=… />`; delete the now-unused `HeroVisual` function and
  its `Float` / `PhoneFrame` / `BrowserFrame` imports if no longer used
  elsewhere in the file.
- **Modify `package.json`** — add `simple-icons` to dependencies.

## Testing / verification

- `npx eslint` clean on changed files; `npm run build` green.
- Visual check via the established Playwright screenshot loop:
  - Desktop hero shows the phone, ~8 brand-colored tiles, faint arcs, caption.
  - After ~3s the phone screen and caption have advanced to the next app.
  - At `< lg` width, no orbit renders (visual hidden), layout unbroken.
  - With `prefers-reduced-motion`, a single static frame renders (no cycling).
- `npm run test` (vitest) still passes — no content-count assertions are
  affected (no projects added/removed).

## Out of scope / YAGNI

- No orbital rotation animation, no parallax-on-scroll, no mobile orbit.
- No new project screenshots — reuse existing `screen-home.webp` assets.
- TechMarquee stays text chips; this visual does not replace it.
