import type { Service } from "./types";

/** Six service areas with the exact stack listed in the 2025 deck. */
export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Fast, accessible web apps — from server-rendered platforms to rich single-page experiences and installable PWAs.",
    accent: "teal",
    stack: [
      { label: "Frontend", items: ["Angular", "ReactJS (CSR)", "Next.js (SSR)", "Progressive Web Apps"] },
      { label: "Backend", items: ["NodeJS", "Express", "NestJS", "Koa"] },
    ],
  },
  {
    slug: "hybrid-mobile",
    title: "Hybrid Mobile Apps",
    summary:
      "One codebase, both stores. Cross-platform apps that feel native on Android and iOS without doubling the build.",
    accent: "indigo",
    stack: [
      { label: "Frameworks", items: ["React Native", "Flutter", "Ionic"] },
      { label: "Targets", items: ["Android", "iOS"] },
    ],
  },
  {
    slug: "native-mobile",
    title: "Native Mobile Apps",
    summary:
      "When you need the metal — fully native Android builds that squeeze the most out of the platform.",
    accent: "coral",
    stack: [{ label: "Languages", items: ["Java", "Kotlin"] }],
  },
  {
    slug: "databases",
    title: "Databases",
    summary:
      "The right datastore for the job — relational, document or realtime — designed for integrity and scale.",
    accent: "blue",
    stack: [
      { label: "Relational", items: ["MySQL", "PostgreSQL"] },
      { label: "NoSQL / Realtime", items: ["MongoDB", "DynamoDB", "Firebase", "Supabase"] },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    summary:
      "Reliable, observable deployments on modern cloud — provisioned, automated and ready to grow.",
    accent: "amber",
    stack: [
      { label: "Cloud", items: ["AWS", "Google Cloud"] },
      { label: "With partners", items: ["Heroku", "Bunnyshell", "Hosting-shop"] },
    ],
  },
  {
    slug: "ui-ux",
    title: "UI / UX",
    summary:
      "Research-led design that makes products clear and delightful — from first wireframe to polished prototype.",
    accent: "green",
    stack: [
      { label: "Services", items: ["Wireframing", "Prototyping", "Sprint Design"] },
      { label: "Tools", items: ["Figma", "Adobe Illustrator", "Adobe XD", "Animate", "Sketch"] },
    ],
  },
];
