import type { Metadata } from "next";
import { site } from "@/content/site";

/** Resolve a site-relative path to an absolute URL on the canonical host. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

interface PageMetaInput {
  /** Page title — the layout template appends "— Tribus Technologies". */
  title?: string;
  description?: string;
  /** Site-relative path, e.g. "/work". Drives the canonical + OpenGraph URL. */
  path: string;
}

/**
 * Builds per-page Metadata with a canonical URL and matching OpenGraph/Twitter
 * entries. Centralised so every route stays consistent — the single biggest
 * SEO gap was that pages had titles/descriptions but no canonical or per-page
 * OG URL. OpenGraph images cascade from app/opengraph-image.tsx automatically.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} — ${site.legalName}` : site.legalName;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      url,
      title: ogTitle,
      description,
    },
    twitter: {
      title: ogTitle,
      description,
    },
  };
}
