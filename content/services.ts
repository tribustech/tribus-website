import type { Service } from "./types";

/** Service areas and the stack we build on. Started from the 2025 deck, since
   extended with backend languages (.NET, Laravel), AI integrations and QA. */
export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Fast, accessible web apps — from server-rendered platforms to rich single-page experiences and installable PWAs.",
    accent: "teal",
    stack: [
      { label: "Frontend", items: ["Angular", "ReactJS (CSR)", "Next.js (SSR)", "Progressive Web Apps"] },
      { label: "Backend", items: ["NodeJS", "Express", "NestJS", "Koa", ".NET", "Laravel"] },
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
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    summary:
      "LLM features that fit your product — from answers grounded in your own data to assistants that take action.",
    accent: "indigo",
    stack: [
      { label: "Capabilities", items: ["AI Integrations", "RAG", "Chatbots & Agents", "Semantic Search"] },
      { label: "Models & tooling", items: ["OpenAI", "Claude", "LangChain", "Vercel AI SDK"] },
      { label: "Open-source models", items: ["Llama", "Mistral", "Qwen", "Gemma"] },
      { label: "Vectors", items: ["pgvector", "Pinecone"] },
    ],
  },
  {
    slug: "qa-testing",
    title: "QA & Testing",
    summary:
      "Confidence to ship — automated and manual testing that catches regressions before your users do.",
    accent: "coral",
    stack: [
      { label: "Testing", items: ["Unit", "Integration", "End-to-End", "Manual QA"] },
      { label: "Tools", items: ["Jest", "Playwright", "Cypress", "Detox"] },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary:
      "Offensive and defensive security — ethical hackers who probe for weaknesses, simulate real attackers, and respond fast when a breach hits.",
    accent: "blue",
    stack: [
      { label: "Penetration Testing", items: ["Web apps", "APIs", "Mobile apps", "Networks", "IoT devices"] },
      { label: "Red Teaming", items: ["Attacker simulation", "Exploitation", "Mitigation guidance"] },
      { label: "Malware & Incident Response", items: ["Breach response", "Malware analysis", "SecOps hardening"] },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    summary:
      "Keep shipping after launch — proactive monitoring, updates and dependable support that keep your product healthy, fast and secure.",
    accent: "green",
    stack: [
      { label: "Services", items: ["Bug fixes", "Dependency updates", "Performance tuning", "Security patches"] },
      { label: "Support", items: ["SLAs", "On-call", "Uptime monitoring"] },
    ],
  },
];
