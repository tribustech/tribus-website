# Tribus Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, dynamic Next.js marketing site for Tribus Technologies whose centerpiece is a live-filterable portfolio of ~16 real projects.

**Architecture:** Next.js 15 App Router (SSG-first) + Tailwind v4 + Framer Motion. All content lives in typed `/content/*.ts` modules consumed by server components; only the project grid filter and contact form are client components. Brand palette is exposed as CSS variables + Tailwind theme tokens.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion (`motion` package), Resend (contact), Vitest (data/logic tests).

## Global Constraints

- Next.js 15 App Router, TypeScript strict mode.
- Tailwind CSS v4 (CSS-first config via `@theme`).
- Brand palette exact hex: teal `#01C2BB`, indigo `#7678ED`, coral `#DB5461`, amber `#F6AE2D`, blue `#1C77C3`, green `#8FC93A`, ink `#3B3A3A`, paper `#F3F3F3`, white `#FFFFFF`.
- Tagline verbatim: "Your success, is our success."
- Contact: `andrew.radulescu@wearetribus.com`, `+40 725 356 633`, Bucharest, Romania.
- All animations must respect `prefers-reduced-motion`.
- No CMS/DB. Content is typed modules under `/content`.
- Projects (16): Bluvi, Secom Professional, Clubo, VoteMonitor, Arhiv360, Juke, Neuro Performance Enhancement, PlayTech, Tattoo App, ONG Hub, WERK24, Edu-Sport, Covasna Media, VIC, Silent Auction. (Per-project descriptions are reviewable drafts.)

---

### Task 1: Scaffold Next.js project + brand theme

**Files:**
- Create: project via `create-next-app` (App Router, TS, Tailwind, ESLint, src dir = no, import alias `@/*`).
- Modify: `app/globals.css` (brand `@theme` tokens, base styles, reduced-motion).
- Create: `lib/utils.ts` (`cn` class merge helper).
- Modify: `app/layout.tsx` (fonts, metadata, header/footer slots later).

**Steps:**
- [ ] Run `npx create-next-app@latest . --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes`.
- [ ] Install deps: `npm i motion clsx tailwind-merge` and `npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react`.
- [ ] Add brand tokens to `globals.css` via Tailwind v4 `@theme` (colors above as `--color-*`), set `paper` background + `ink` text, add `@media (prefers-reduced-motion: reduce)` to disable transitions/animations.
- [ ] Add `lib/utils.ts` with `cn(...inputs)` using `clsx` + `tailwind-merge`.
- [ ] Set base `metadata` in `layout.tsx` (title "Tribus Technologies", description from positioning).
- [ ] Verify: `npm run build` succeeds. Commit: `chore: scaffold next app with Tribus brand theme`.

---

### Task 2: Content data layer (typed modules)

**Files:**
- Create: `content/types.ts`, `content/projects.ts`, `content/services.ts`, `content/clients.ts`, `content/workModel.ts`, `content/site.ts`.
- Test: `content/__tests__/content.test.ts`.

**Interfaces (Produces):**
- `type Platform = 'Web' | 'Mobile' | 'Cross-platform'`
- `type Accent = 'teal'|'indigo'|'coral'|'amber'|'blue'|'green'`
- `interface Project { slug: string; name: string; tagline: string; description: string; platforms: Platform[]; industry: string; tech: string[]; accent: Accent; year: number; featured: boolean }`
- `projects: Project[]` (16 entries), `services: Service[]`, `clients: string[]`, `workModel: WorkStep[]`, `site` config (nav, contact, stats).
- Helpers: `getProject(slug)`, `allIndustries()`, `allTech()`, `allPlatforms()`.

- [ ] **Step 1: Write failing tests** in `content/__tests__/content.test.ts`:
```ts
import { describe, it, expect } from 'vitest'
import { projects, getProject } from '@/content/projects'

describe('projects', () => {
  it('has 16 projects with unique slugs', () => {
    expect(projects.length).toBe(16)
    expect(new Set(projects.map(p => p.slug)).size).toBe(16)
  })
  it('every project has non-empty required fields and a valid accent', () => {
    const accents = ['teal','indigo','coral','amber','blue','green']
    for (const p of projects) {
      expect(p.name && p.tagline && p.description && p.industry).toBeTruthy()
      expect(p.platforms.length).toBeGreaterThan(0)
      expect(p.tech.length).toBeGreaterThan(0)
      expect(accents).toContain(p.accent)
    }
  })
  it('getProject returns by slug and undefined when missing', () => {
    expect(getProject(projects[0].slug)?.slug).toBe(projects[0].slug)
    expect(getProject('nope')).toBeUndefined()
  })
})
```
- [ ] **Step 2:** Add `vitest.config.ts` (jsdom env, `@` alias). Run `npx vitest run` → FAIL (modules missing).
- [ ] **Step 3:** Write `content/types.ts` then `projects.ts` (16 entries — name/tagline/industry factual, description as draft), plus helpers; `services.ts` (6 areas with deck tech lists), `clients.ts`, `workModel.ts` (3 steps), `site.ts`.
- [ ] **Step 4:** Run `npx vitest run` → PASS.
- [ ] **Step 5:** Commit: `feat: add typed content data layer`.

---

### Task 3: Filter logic (pure function) + tests

**Files:**
- Create: `lib/filterProjects.ts`.
- Test: `lib/__tests__/filterProjects.test.ts`.

**Interfaces (Produces):**
- `interface ProjectFilter { platform?: Platform | null; industry?: string | null; tech?: string | null }`
- `filterProjects(projects: Project[], filter: ProjectFilter): Project[]`

- [ ] **Step 1: Write failing tests** covering: no filter → all; platform filter; industry filter; tech filter; combined AND filter.
```ts
import { filterProjects } from '@/lib/filterProjects'
import { projects } from '@/content/projects'
it('returns all when filter empty', () => {
  expect(filterProjects(projects, {}).length).toBe(projects.length)
})
it('filters by platform', () => {
  const r = filterProjects(projects, { platform: 'Web' })
  expect(r.every(p => p.platforms.includes('Web'))).toBe(true)
})
it('AND-combines filters', () => {
  const r = filterProjects(projects, { platform: 'Mobile', tech: projects.find(p=>p.platforms.includes('Mobile'))!.tech[0] })
  expect(r.every(p => p.platforms.includes('Mobile'))).toBe(true)
})
```
- [ ] **Step 2:** Run `npx vitest run lib` → FAIL.
- [ ] **Step 3:** Implement `filterProjects` (AND semantics, null/undefined = ignore).
- [ ] **Step 4:** Run → PASS.
- [ ] **Step 5:** Commit: `feat: add project filter logic`.

---

### Task 4: Motion primitives

**Files:**
- Create: `components/motion/Reveal.tsx` (scroll-reveal wrapper, `whileInView`, reduced-motion safe).
- Create: `components/motion/AnimatedCounter.tsx` (count-up on in-view).
- Create: `components/motion/Marquee.tsx` (infinite horizontal scroll, pauses on reduced-motion).
- Create: `components/motion/MagneticCard.tsx` (pointer-tracking tilt; disabled on touch/reduced-motion).

- [ ] Implement each as a `'use client'` component using `motion/react`.
- [ ] Each reads `useReducedMotion()` and renders static fallback when true.
- [ ] Verify: `npm run build` typechecks. Commit: `feat: add motion primitives`.

---

### Task 5: Header + Footer + layout shell

**Files:**
- Create: `components/Header.tsx` (sticky, condenses on scroll, mobile menu, T-mark + nav from `site`).
- Create: `components/Footer.tsx` (contact, nav, copyright).
- Create: `components/Logo.tsx` (inline SVG T-monogram).
- Modify: `app/layout.tsx` to render Header/Footer around `{children}`.

- [ ] Build `Logo` as inline SVG (recreate bold T-monogram, `currentColor`).
- [ ] Build `Header` (`'use client'`, scroll listener → condensed state, accessible mobile menu with focus trap, nav links: Work, Services, About, Contact).
- [ ] Build `Footer` with contact block + accent top border.
- [ ] Wire into `layout.tsx`.
- [ ] Verify: `npm run build`; manual check header renders. Commit: `feat: add header, footer, logo`.

---

### Task 6: ProjectCard + ProjectGrid + FilterBar (the centerpiece)

**Files:**
- Create: `components/ProjectCard.tsx` (accent-tinted, MagneticCard hover, links to `/work/[slug]`).
- Create: `components/FilterBar.tsx` (platform/industry/tech segmented controls).
- Create: `components/ProjectGrid.tsx` (`'use client'`, owns filter state, Framer `layout` reflow).

**Interfaces (Consumes):** `filterProjects`, `Project`, `allIndustries/allTech/allPlatforms`.

- [ ] Build `ProjectCard` (server-safe; accent maps to brand color; name, tagline, platform/tech chips).
- [ ] Build `FilterBar` (controlled; emits filter changes; keyboard-accessible buttons with `aria-pressed`).
- [ ] Build `ProjectGrid` using `useState<ProjectFilter>`, `AnimatePresence` + `layout` for smooth reflow, empty-state message.
- [ ] Verify: `npm run build`. Commit: `feat: add filterable project grid`.

---

### Task 7: Home page sections

**Files:**
- Create: `components/sections/Hero.tsx` (animated T-mark assemble + gradient-mesh bg + tagline + CTAs).
- Create: `components/sections/StatBand.tsx` (AnimatedCounter stats from `site.stats`).
- Create: `components/sections/FeaturedProjects.tsx` (projects where `featured`).
- Create: `components/sections/WorkModelFlow.tsx` (3 steps, connected, scroll-reveal).
- Create: `components/sections/TechMarquee.tsx` (tech names in Marquee).
- Create: `components/sections/ClientsStrip.tsx` (clients list/marquee).
- Create: `components/sections/CTA.tsx` (contact prompt).
- Modify: `app/page.tsx` to compose the above.

- [ ] Build each section component (server components except where motion needs client).
- [ ] Compose `app/page.tsx`.
- [ ] Verify: `npm run build`; visual check in browser. Commit: `feat: add home page`.

---

### Task 8: Work index + case-study pages

**Files:**
- Create: `app/work/page.tsx` (intro + `ProjectGrid`, metadata).
- Create: `app/work/[slug]/page.tsx` (case study; `generateStaticParams` from projects; `generateMetadata`).
- Create: `components/sections/CaseStudy.tsx` (hero, problem/solution, tech list, screenshot placeholders, next-project link).
- Create: `app/work/[slug]/not-found.tsx`.

- [ ] Build `/work` page.
- [ ] Build `CaseStudy` + `[slug]` route with `generateStaticParams`/`generateMetadata`, `notFound()` on bad slug.
- [ ] Verify: `npm run build` prerenders all 16 slugs. Commit: `feat: add work index and case studies`.

---

### Task 9: Services + About pages

**Files:**
- Create: `app/services/page.tsx` + `components/sections/ServicesGrid.tsx` + `components/sections/TechStack.tsx` (interactive, grouped by service) + reuse `WorkModelFlow`.
- Create: `app/about/page.tsx` + `components/sections/GroupPhotos.tsx` (placeholder group photos) + reuse `ClientsStrip`.
- Create: `public/images/team/.gitkeep` + branded placeholder usage.

- [ ] Build Services page (6 `ServiceCard`s + `TechStack` grouped by area + work model).
- [ ] Build About page (story copy, ethos, `GroupPhotos` placeholders, clients).
- [ ] Verify: `npm run build`. Commit: `feat: add services and about pages`.

---

### Task 10: Contact page + API route

**Files:**
- Create: `app/contact/page.tsx` + `components/ContactForm.tsx` (`'use client'`).
- Create: `app/api/contact/route.ts`.
- Test: `app/api/__tests__/contact.test.ts` (validation logic).
- Create: `.env.example` (`RESEND_API_KEY=`).

**Interfaces (Produces):** `POST /api/contact` accepts `{name,email,message,website?}`; returns `{ok:true}` | `{ok:false,error}`; honeypot `website` must be empty; 400 on invalid.

- [ ] **Step 1:** Write failing test for a `validateContact(input)` helper (missing fields → error; bad email → error; honeypot filled → error; valid → ok).
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement `lib/validateContact.ts`; `route.ts` uses it, sends via Resend if `RESEND_API_KEY` set else returns `{ok:false,error:'not_configured'}` (logged); build `ContactForm` with loading/success/error states + honeypot.
- [ ] **Step 4:** Run → PASS.
- [ ] **Step 5:** Build contact page with form + contact details. Commit: `feat: add contact page and api`.

---

### Task 11: SEO, polish, final verification

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `app/error.tsx`, `app/opengraph-image.tsx` (branded OG).
- Modify: per-route `metadata`/`generateMetadata` as needed.

- [ ] Add sitemap (all routes incl. project slugs), robots, global not-found + error boundary, dynamic OG image.
- [ ] Add `prefers-reduced-motion` audit pass; keyboard nav check on FilterBar + Header menu.
- [ ] Run `npm run build` + `npm run lint`; fix issues.
- [ ] Commit: `feat: add SEO, error pages, final polish`.

---

## Self-Review

**Spec coverage:** Stack/theme (T1), content modules (T2), filter logic (T3), motion (T4), header/footer/logo (T5), filterable grid centerpiece (T6), home incl. hero/stats/work-model/tech/clients/CTA (T7), work index + case studies + not-found (T8), services + tech stack + about + group photos + clients (T9), contact form + Vercel function + Resend-optional (T10), SEO/error/a11y/perf (T11). All spec sections mapped.

**Placeholder scan:** Draft project descriptions are an intentional, spec-acknowledged content state, not a plan placeholder. No TBD/TODO steps.

**Type consistency:** `Project`, `Platform`, `Accent`, `ProjectFilter`, `filterProjects`, `getProject`, `validateContact` names are consistent across tasks 2/3/6/10.
