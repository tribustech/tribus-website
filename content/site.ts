import type { SiteConfig } from "./types";
import { projects } from "./projects";
import { services } from "./services";

export const site: SiteConfig = {
  name: "Tribus",
  legalName: "Tribus Technologies",
  tagline: "Your success, is our success.",
  altTagline: "Go beyond your wildest dreams.",
  description:
    "We build people-centric web and mobile software that solves real problems — your partner in digital transformation, from discovery to production.",
  email: "andrew.radulescu@wearetribus.com",
  phone: "+40 725 356 633",
  phoneHref: "tel:+40725356633",
  location: "Bucharest, Romania",
  url: "https://wearetribus.com",
  founded: 2021, // REVIEW: confirm actual founding year (used in Organization JSON-LD)
  // REVIEW: add real profile URLs (LinkedIn, Instagram, Facebook…) — see SiteConfig.social
  social: [],
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    { value: projects.length, suffix: "+", label: "Products shipped" },
    { value: services.length, label: "Service areas" },
    { value: 20, suffix: "+", label: "Technologies mastered" },
    { value: 100, suffix: "%", label: "Your success, our focus" },
  ],
};
