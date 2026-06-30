/**
 * schema.org structured-data (JSON-LD) builders.
 *
 * Rendered via <JsonLd> into a <script type="application/ld+json"> tag. These
 * help both search engines (rich results) and AI agents understand the entity,
 * its services, and its portfolio. All builders return plain objects — see the
 * Next.js JSON-LD guide for the rendering approach.
 */
import { site } from "@/content/site";
import { services } from "@/content/services";
import { team } from "@/content/team";
import type { Project } from "@/content/types";
import { absoluteUrl } from "@/lib/seo";

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/** The company as a schema.org Organization (the canonical entity node). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bucharest",
      addressCountry: "RO",
    },
    areaServed: "Worldwide",
    knowsAbout: services.map((s) => s.title),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Romanian"],
      },
    ],
    // Only emit sameAs when real URLs exist — wrong ones mislead crawlers.
    ...(site.social.length ? { sameAs: site.social } : {}),
  };
}

/** The website node, published by the Organization. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.legalName,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

/** A breadcrumb trail. Pass ordered [{ name, path }] from home → current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** The services offering, as an OfferCatalog of Service entries. */
export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Software development services",
    url: absoluteUrl("/services"),
    provider: { "@id": ORG_ID },
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        serviceType: s.title,
        provider: { "@id": ORG_ID },
      },
    })),
  };
}

const APP_STORE = /play\.google\.com|apps\.apple\.com/;

/** A single portfolio project — SoftwareApplication if it ships to a store,
 *  otherwise a CreativeWork. */
export function projectSchema(project: Project) {
  const url = absoluteUrl(`/work/${project.slug}`);
  const isApp = Boolean(project.link && APP_STORE.test(project.link));
  const base = {
    "@context": "https://schema.org",
    "@id": `${url}#project`,
    name: project.name,
    headline: project.tagline,
    description: project.description,
    url,
    inLanguage: "en",
    dateCreated: String(project.year),
    keywords: [project.industry, ...project.tech].join(", "),
    creator: { "@id": ORG_ID },
    author: { "@id": ORG_ID },
    ...(project.link ? { sameAs: [project.link] } : {}),
  };

  if (isApp) {
    return {
      ...base,
      "@type": "SoftwareApplication",
      applicationCategory: "MobileApplication",
      operatingSystem: project.platforms.includes("Mobile")
        ? "Android, iOS"
        : "Web",
    };
  }
  return { ...base, "@type": "CreativeWork" };
}

/** Collection page listing every project (for /work). */
export function workCollectionSchema(projects: Project[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/work")}#collection`,
    name: "Our work",
    description:
      "Web and mobile products Tribus has designed, built and shipped.",
    url: absoluteUrl("/work"),
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/work/${p.slug}`),
        name: p.name,
      })),
    },
  };
}

/** The team, as Person nodes that work for the Organization (for /about). */
export function teamSchema() {
  return team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: { "@id": ORG_ID },
    ...(member.img ? { image: absoluteUrl(member.img) } : {}),
  }));
}
