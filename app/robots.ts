import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Tribus is a marketing site — we *want* to be indexed and cited, including by
 * AI assistants. We allow everything for everyone, and additionally name the
 * major AI crawlers explicitly so the intent ("yes, you may read & cite us") is
 * unambiguous. Only the Next build output and API routes are disallowed.
 *
 * To opt OUT of AI training/citation later, change a bot's rule to `disallow: "/"`.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic (Claude)
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google / Apple AI surfaces
  "Google-Extended",
  "Applebot-Extended",
  // Common Crawl (feeds many models) & others
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_CRAWLERS, allow: "/", disallow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
