# Project Showcase Overhaul — Design

**Date:** 2026-06-29
**Status:** Approved (decisions locked)
**Builds on:** 2026-06-29-tribus-website-design.md

## Purpose

Dramatically raise the quality of how Tribus presents its work: source real,
high-resolution app/website imagery (not just deck exports) and present it with
premium, bevel.health- and designmonks.co-inspired widgets — bento device cards,
a sticky screen-swapping device, a screenshot carousel, and a tabbed industry
showcase.

## Locked decisions

- **Sourcing:** Auto-source what we can confidently find now (app-store
  screenshots + live-site captures), deck images as fallback, hand the user a
  checklist for gaps.
- **Detail widget:** Sticky device with scroll-linked screen-swap parallax.
- **Project grid:** Bento layout with device cards (featured = larger tiles).
- **Metrics:** Factual stat chips only (platforms, # technologies, year,
  industry). No fabricated numbers or testimonials.
- **bevel "Start the day with confidence":** Replicated 1:1 with Tribus content.

## Inspiration → mapping

| Reference | Borrowed pattern | Tribus use |
|-----------|------------------|------------|
| bevel.health "Start the day with confidence" | Headline + 3 tinted cards w/ phone inside + wide multi-widget bento | Home "feature bento" of featured apps |
| bevel.health hero/member carousel | Floating devices on aurora gradient; horizontal screen carousel | Hero polish + reusable carousel |
| bevel.health feature cards | Sticky phones per scroll block | Case-study sticky screen-swap |
| designmonks.co "Proven Success in Every Industry" | Industry tabs → metric card + device mockup + CTA | Home "Industry Wins" tabbed section |

## 1. Imagery sourcing pipeline (build-time tooling, not shipped)

- Add a `sources` map per project: `{ playStoreUrl?, appStoreUrl?, websiteUrl? }`
  in a build-only config (`tools/sources.ts` or inline in the script).
- A Node script under `tools/` (run manually, not part of the app build):
  1. **App stores** — fetch the listing HTML; extract screenshot image URLs
     (Play Store screenshot `srcset`; App Store embedded JSON / `og` images);
     download originals.
  2. **Websites** — Playwright (Chromium, already installed) full-page capture
     + a viewport capture; store raw for our BrowserFrame.
  3. **Optimize** — resize to sane widths, encode WebP (quality ~82), write to
     `public/images/work/<slug>/`.
  4. **Emit** — regenerate the `projectMedia.ts` entries (type per asset:
     `phone` for raw mobile, `browser` for raw web, `mockup`/`mockup-wide` for
     pre-framed marketing shots).
- Confirmed sources: Bluvi (`com.tribustech.bluvi`), VoteMonitor
  (`org.commitglobal.votemonitor.app`), Clubo (App Store id1499412324). Juke +
  the B2B/private ones (Arhiv360, WERK24, ONG Hub admin, VIC) keep deck imagery
  until the user supplies links.
- Output: a `SOURCES.md` checklist noting which projects got fresh assets vs.
  fell back to deck images.

> **Correction from research:** Bluvi is "Bluvi - Aplicația Pescarilor", a
> fishing/anglers community app — fix its description/industry accordingly.

## 2. Device + media components (extend existing `components/devices/`)

- Reuse `PhoneFrame`, `BrowserFrame`, `ProjectMedia`.
- **`ScreenCarousel`** (`'use client'`): horizontal, snap-scroll, drag + arrow
  controls, optional autoplay; renders a list of `Media` (each framed). Pauses
  on hover/interaction; reduced-motion → static scroll.
- **`StickyDeviceShowcase`** (`'use client'`): two-column; left = sticky device
  (phone or browser by project media type), right = stacked feature blocks. As
  each block crosses center, the device screen cross-fades to that block's
  screenshot (scroll-linked via `useScroll`/intersection). Falls back to a
  simple stacked list under reduced-motion or on mobile (device above each
  block).

## 3. Bento project grid

- New `BentoGrid` for featured projects (home) and a bento variant of `/work`.
- Tile sizes derived from a `size` hint (`lg` = 2×2 / 2×1, `md`, `sm`) or from
  `featured`. Each tile: tinted/accent panel + device media peeking, name,
  tagline, industry chip. Scroll reveal + subtle parallax on the media.
- `/work` keeps filtering: bento tiles reflow with Framer `layout` when filters
  change (featured sizing relaxes to uniform while filtered for predictability).

## 4. Home "feature bento" (bevel 1:1)

- `FeatureBento` section: centered headline + subtitle, then **3 tinted device
  cards** (featured mobile apps, phone screenshot inside, one-line value prop in
  the app's accent), then **1 wide bento** for a web product (BrowserFrame +
  2 floating "widget" chips pulled from the project, e.g. tech + platform).
- Copy: headline e.g. "Built around the people who use it"; subtitle e.g.
  "We turn a brief into a product people actually love to use."

## 5. Home "Industry Wins" tabbed showcase (designmonks 1:1)

- `IndustryShowcase` (`'use client'`): "Industry Wins" pill + serif-style
  headline "Proven success in every industry"; tabs = the project industries.
- Selecting a tab shows a wide case-study card: device mockup + project name +
  description + **factual stat chips** (platforms, `tech.length` technologies,
  year, industry) + "View project" link. Animated tab transitions.

## 6. Hero polish

- Aurora/prismatic soft-gradient backdrop behind the existing hero (brand
  palette), bevel-like, behind the current mesh. Optional floating device
  cluster. Keep current copy + CTAs.

## Data changes

- `Project`: add optional `size?: 'lg' | 'md' | 'sm'` (bento hint) and keep
  `featured`. Fix Bluvi copy/industry.
- `content/projectMedia.ts`: expanded entries from the sourcing script.
- Build-only: `tools/` scripts + `sources` config (not imported by the app).

## Accessibility & performance

- All new motion respects `prefers-reduced-motion` (static fallbacks).
- `next/image` for every screenshot; explicit sizes; lazy below the fold;
  carousel images `loading="lazy"`. Cap total home image weight; prefer WebP.
- Carousel keyboard-navigable (arrows, focusable controls); tabs are real
  buttons with `aria-selected`.

## Out of scope

- Real client metrics/testimonials (until provided).
- CMS. Video capture of apps. Per-project custom layouts beyond size hints.

## Honesty notes

- Some auto-sourced matches may be imperfect; the SOURCES.md checklist flags
  every project's asset origin for user review.
- Stat chips are factual only; no invented growth percentages.
