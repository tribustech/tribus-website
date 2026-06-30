import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getPrimaryMedia } from "@/content/projectMedia";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();

  const routes = ["", "/work", "/services", "/about", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projects.map((p) => {
    const primary = getPrimaryMedia(p.slug);
    return {
      url: `${base}/work/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.7 : 0.6,
      // Image sitemap entry — helps image search & AI surface the right asset.
      ...(primary ? { images: [`${base}${primary.src}`] } : {}),
    };
  });

  return [...routes, ...projectRoutes];
}
