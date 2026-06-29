# Tribus Technologies Website — Design

**Date:** 2026-06-29
**Status:** Approved (pending spec review)

## Purpose

Replace the current wearetribus.com with a modern, dynamic marketing site that
makes Tribus's real portfolio (~16 shipped projects) the centerpiece. Tribus is a
Bucharest-based digital-transformation software partner. The site must feel
energetic and current, showcase breadth of work and tech, and convert visitors
into contacts.

## Decisions (locked)

- **Framework:** Next.js 15 (App Router) + TypeScript, Tailwind CSS v4.
- **Motion:** Framer Motion — rich, scroll-driven, tasteful (respects `prefers-reduced-motion`).
- **Content:** Hardcoded for v1 as typed data modules (no CMS/DB). Structured so a
  later move to MDX/Sanity is a drop-in replacement of the data layer only.
- **Visual vibe:** Bold & vibrant on a light/off-white base, full brand accent palette.
- **Deploy:** Vercel. Mostly SSG for speed + SEO.
- **No individual team section** for v1 — use group photos in the About section instead.
- **Contact:** Simple Vercel serverless function emailing via Resend (API key added later);
  graceful behavior if key absent.

## Brand system (from the 2025 deck theme)

| Token        | Hex       | Use |
|--------------|-----------|-----|
| `teal`       | `#01C2BB` | Primary brand / links / hero accent |
| `indigo`     | `#7678ED` | Secondary accent |
| `coral`      | `#DB5461` | Accent |
| `amber`      | `#F6AE2D` | Accent |
| `blue`       | `#1C77C3` | Accent |
| `green`      | `#8FC93A` | Accent |
| `ink`        | `#3B3A3A` | Near-black text |
| `paper`      | `#F3F3F3` | Off-white background |
| `white`      | `#FFFFFF` | Surfaces |

- Logo: bold geometric **"T" monogram**.
- Tokens live as CSS variables + Tailwind theme so the whole site is recolorable
  from one place. Project cards rotate through the six accent colors.

## Brand voice & key copy (from deck + live site)

- Tagline: **"Your success, is our success."** (alt: "Go beyond your wildest dreams")
- Positioning: "We build software to solve real issues and improve the day-to-day life.
  We are your partner in your digital transformation… people-centric solutions…
  augment the end-user work in the most meaningful way."
- Work model: **Design → Build & Test → Go to market.**
- Contact: `andrew.radulescu@wearetribus.com`, +40 725 356 633, Bucharest, Romania.

## Information architecture / routes

- `/` — Home: animated hero (T-mark + tagline) → stats band → featured projects →
  work-model flow → tech-stack marquee → clients → CTA.
- `/work` — **Centerpiece.** Live-filterable project grid (platform / industry / tech),
  animated layout transitions, hover-reactive accent cards.
- `/work/[slug]` — Case study per project: hero, problem, what we built, tech used,
  screenshot placeholders, next-project link.
- `/services` — Six service areas + interactive tech stack + 3-step work model.
- `/about` — Story, "your success is our success" ethos, group photos, clients.
- `/contact` — Contact form (Vercel function) + email/phone/location.

## Content modules (typed, in `/content`)

- `projects.ts` — `Project { slug, name, tagline, description, platforms[],
  industry, tech[], accent, year, featured }`. ~16 entries seeded from deck:
  Bluvi, Secom Professional, Clubo, VoteMonitor, Arhiv360, Juke,
  Neuro Performance Enhancement, PlayTech, Tattoo App, ONG Hub, WERK24,
  Edu-Sport, Covasna Media, VIC, Silent Auction.
- `services.ts` — six areas (Web, Hybrid Mobile, Native Mobile, Databases, Cloud, UI/UX),
  each with the deck's listed technologies.
- `clients.ts` — client names (Machina Events, …).
- `workModel.ts` — three steps with descriptions from the deck.
- `site.ts` — global config: nav, contact details, social, stats.

> **Content caveat:** per-project descriptions in the deck are baked into slide
> images and not machine-readable. v1 ships *draft* descriptions written from
> project names + stack, clearly reviewable. All hard facts (names, tagline,
> contact, services, tech) come verbatim from the sources.

## Components (each focused, independently testable)

`Header` (condenses on scroll), `Footer`, `Hero`, `StatBand` (animated counters),
`FeaturedProjects`, `ProjectGrid` (owns filter state), `FilterBar`, `ProjectCard`
(tilt/magnetic hover, accent), `CaseStudy`, `ServiceCard`, `TechStack`,
`WorkModelFlow`, `ClientsMarquee`, `TeamPhotos` (group photos), `ContactForm`,
plus motion primitives in `components/motion/`: `Reveal`, `Marquee`, `AnimatedCounter`,
`MagneticCard`.

State boundaries: only `ProjectGrid`/`FilterBar` are client components holding
filter state; everything else is static/server where possible. Data flows one way
from `/content` modules → server components → props.

## Signature interactions

- Hero: T-mark assembles on load; drifting gradient-mesh of brand accents behind.
- Project grid: Framer Motion `layout` animations reflow cards on filter change;
  per-card accent; tilt hover.
- Scroll-reveal sections; tech-stack marquee; animated stat counters; sticky
  condensing header; smooth anchor scroll.

## Contact function

- `app/api/contact/route.ts` — validates `{name, email, message}`, sends via Resend
  if `RESEND_API_KEY` present; otherwise returns a clear "not configured" response and
  logs. Client form shows success/error states, disables on submit, honeypot for spam.

## Error handling

- `not-found.tsx` for unknown project slugs; `error.tsx` boundary.
- Contact form: inline validation, network-error and not-configured states.
- Images: `next/image` with placeholders; missing screenshots show a branded placeholder.

## Accessibility & performance

- Semantic HTML, keyboard-navigable filters & nav, visible focus states.
- `prefers-reduced-motion`: animations degrade to instant/opacity-only.
- `next/image`, font subsetting, SSG. Target Lighthouse ≥ 90 across the board.
- SEO: per-route metadata, Open Graph image, sitemap, robots.

## Out of scope (v1 / YAGNI)

- CMS, blog, individual team bios, i18n, analytics dashboard, auth, e-commerce.
- Real project screenshots (placeholders until assets provided).

## Future seams

- Swap `/content/*.ts` for MDX or Sanity without touching components.
- Add `/work/[slug]` real screenshots and metrics.
- Add team section + Resend key + analytics when ready.
