/**
 * Generators for the AI-agent discovery files served at:
 *   /llms.txt       — concise, link-first index (llmstxt.org convention)
 *   /llms-full.txt  — full content inlined for ingestion
 *
 * Both are built from the same content layer (content/*.ts) so they never drift
 * from the site. This is the de-facto "agents file" standard that assistants
 * (ChatGPT, Claude, Perplexity, …) look for — a clean, structured summary they
 * can read without parsing rendered HTML.
 */
import { site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { team } from "@/content/team";
import { workModel } from "@/content/workModel";
import { absoluteUrl } from "@/lib/seo";

/** Concise index — H1, summary, then link sections. */
export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${site.legalName}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    `${site.legalName} ("${site.name}") is a software development company based in ${site.location}, building people-centric web and mobile products end to end — from discovery to production. Tagline: "${site.tagline}"`,
  );
  lines.push("");

  lines.push("## Pages");
  lines.push(`- [Home](${absoluteUrl("/")}): Overview of Tribus and its work.`);
  lines.push(
    `- [Work](${absoluteUrl("/work")}): Portfolio of ${projects.length} shipped web & mobile products, filterable by platform, industry and technology.`,
  );
  lines.push(
    `- [Services](${absoluteUrl("/services")}): Service areas and the technology stack Tribus builds on.`,
  );
  lines.push(
    `- [About](${absoluteUrl("/about")}): The team, values and ways of working.`,
  );
  lines.push(
    `- [Contact](${absoluteUrl("/contact")}): How to start a project with Tribus.`,
  );
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- **${s.title}**: ${s.summary}`);
  }
  lines.push("");

  lines.push("## Selected work");
  for (const p of projects.filter((p) => p.featured)) {
    lines.push(
      `- [${p.name}](${absoluteUrl(`/work/${p.slug}`)}): ${p.tagline} (${p.industry}, ${p.year})`,
    );
  }
  lines.push("");

  lines.push("## Contact");
  lines.push(`- Email: ${site.email}`);
  lines.push(`- Phone: ${site.phone}`);
  lines.push(`- Location: ${site.location}`);
  lines.push(`- Website: ${site.url}`);
  lines.push("");

  return lines.join("\n");
}

/** Full inlined content for ingestion. */
export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${site.legalName}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(`- Tagline: ${site.tagline}`);
  lines.push(`- Also: ${site.altTagline}`);
  lines.push(`- Location: ${site.location}`);
  lines.push(`- Founded: ${site.founded}`);
  lines.push(`- Email: ${site.email}`);
  lines.push(`- Phone: ${site.phone}`);
  lines.push(`- Website: ${site.url}`);
  lines.push("");

  lines.push("## How we work");
  for (const step of workModel) {
    lines.push(`### ${step.index}. ${step.title}`);
    lines.push(step.description);
    if (step.chips?.length) lines.push(`Deliverables: ${step.chips.join(", ")}`);
    lines.push("");
  }

  lines.push("## Services");
  for (const s of services) {
    lines.push(`### ${s.title}`);
    lines.push(s.summary);
    for (const group of s.stack) {
      lines.push(`- ${group.label}: ${group.items.join(", ")}`);
    }
    lines.push("");
  }

  lines.push("## Work — full portfolio");
  for (const p of projects) {
    lines.push(`### ${p.name}`);
    lines.push(`${p.tagline}`);
    lines.push(p.description);
    lines.push(
      `- Industry: ${p.industry} · Platforms: ${p.platforms.join(", ")} · Year: ${p.year}`,
    );
    lines.push(`- Tech: ${p.tech.join(", ")}`);
    if (p.link) lines.push(`- Link: ${p.link}`);
    lines.push(`- Page: ${absoluteUrl(`/work/${p.slug}`)}`);
    if (p.testimonial) {
      lines.push(
        `- Testimonial: "${p.testimonial.quote}" — ${p.testimonial.author}, ${p.testimonial.role}`,
      );
    }
    lines.push("");
  }

  lines.push("## Team");
  for (const m of team) {
    lines.push(`- ${m.name} — ${m.role}${m.founder ? " (founder)" : ""}`);
  }
  lines.push("");

  return lines.join("\n");
}
