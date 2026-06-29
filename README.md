# Tribus Technologies — Website

Modern marketing site for Tribus Technologies. Built with Next.js 15 (App Router),
Tailwind CSS v4 and Framer Motion. The centerpiece is a live-filterable portfolio
of real projects.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npm test         # vitest (content + filter + contact validation)
```

## Editing content

All site content lives in typed modules under [`content/`](content/) — no CMS needed:

| File | What it holds |
|------|---------------|
| `content/projects.ts` | Portfolio projects. Add a project = append one object. |
| `content/services.ts` | The six service areas and their tech stacks. |
| `content/workModel.ts` | The 3-step "Design → Build & Test → Go to market" flow. |
| `content/clients.ts` | Client names shown in the trust strip. |
| `content/site.ts` | Nav, contact details, hero stats. |

> **Note:** Per-project descriptions are *draft* copy (the source deck stored them
> as images). Review and refine the `description`/`tagline` fields in `projects.ts`.

### Brand colors

Defined once in [`app/globals.css`](app/globals.css) under `@theme`. Change them
there and the whole site updates. The per-project accent is set by each project's
`accent` field.

### Images

- Project screenshots: `public/images/work/<slug>/` — then wire them into
  `components/sections/CaseStudy.tsx` (currently branded placeholders).
- Team / group photos: `public/images/team/` — referenced by
  `components/sections/GroupPhotos.tsx`.

## Contact form

`POST /api/contact` validates input and emails via [Resend](https://resend.com)
when configured. Copy `.env.example` to `.env.local` and set:

```
RESEND_API_KEY=...           # without this, the form returns a clear "not configured" message
CONTACT_TO_EMAIL=...         # defaults to andrew.radulescu@wearetribus.com
```

## Deploy

Optimised for [Vercel](https://vercel.com): push the repo, import the project,
add the env vars above. Everything except `/api/contact` is statically generated.

## Project docs

- Design spec: `docs/superpowers/specs/2026-06-29-tribus-website-design.md`
- Implementation plan: `docs/superpowers/plans/2026-06-29-tribus-website.md`
