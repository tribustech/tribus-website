# SEO & AI-agent optimization — review notes

Uncommitted work to optimize the site for search engines and AI assistants
(ChatGPT, Claude, Perplexity, …). Nothing committed — review and tweak freely.

## ⚠️ Two things that need your input

1. **`content/site.ts` → `social: []`** — left empty on purpose. Add the real
   LinkedIn / Instagram / Facebook URLs. They feed schema.org `sameAs`, which
   lets Google & AI verify the entity. Wrong URLs hurt SEO, so I didn't guess.
2. **`content/site.ts` → `founded: 2021`** — a placeholder. Confirm the real
   founding year (used in the Organization JSON-LD).

## What changed

### New files
- `lib/seo.ts` — `pageMetadata()` helper: canonical + OpenGraph per page, plus
  `absoluteUrl()`.
- `lib/schema.ts` — JSON-LD builders (Organization, WebSite, BreadcrumbList,
  OfferCatalog/Service, project CreativeWork/SoftwareApplication, team Persons,
  Work collection).
- `components/JsonLd.tsx` — renders `<script type="application/ld+json">` safely.
- `lib/llms.ts` + `app/llms.txt/route.ts` + `app/llms-full.txt/route.ts` —
  generates `/llms.txt` (concise index) and `/llms-full.txt` (full content) live
  from `content/*.ts`, so they never drift. This is the de-facto "agents file"
  standard (llmstxt.org) that AI assistants look for.
- `app/manifest.ts` — web app manifest (`/manifest.webmanifest`).

### Edited
- `app/layout.tsx` — richer root metadata (robots/ googleBot rich-result
  directives, authors/creator/publisher, applicationName, formatDetection) +
  global Organization & WebSite JSON-LD.
- `app/page.tsx`, `about`, `services`, `work`, `work/[slug]`, `contact` — each
  now emits a canonical URL, per-page OpenGraph, and relevant JSON-LD
  (breadcrumbs everywhere; services catalog; project schema; team; ContactPage).
- `app/robots.ts` — explicitly welcomes major AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, CCBot, …); disallows `/api/`; adds `host`.
- `app/sitemap.ts` — adds per-project image entries; featured projects get a
  slightly higher priority.
- `content/types.ts` + `content/site.ts` — added `founded` and `social` fields.

### About "agents.txt"
There is no ratified `agents.txt` web standard for site-visiting AI crawlers —
`/llms.txt` (llmstxt.org) is the convention, and that's what's implemented.
(The repo's `AGENTS.md` is a different thing: instructions for coding agents
working *on* the repo, not for crawlers visiting the site.)

## Verified
`npm run build` passes; served via `next start` and confirmed: `/llms.txt`,
`/llms-full.txt`, `/robots.txt`, `/sitemap.xml` (with images), `/manifest.webmanifest`,
per-page canonicals, googlebot rich-result meta, and JSON-LD on every page
(Organization, WebSite, OfferCatalog, BreadcrumbList, SoftwareApplication for
store-linked apps, 12 Person nodes on /about, ContactPage on /contact).

## Note on unrelated changes
`components/sections/FeatureBento.tsx`, `content/projects.ts`, `content/team.ts`
and the new images/PDF were already modified/untracked before this work — they
are not part of the SEO change.
