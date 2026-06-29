import type { Accent, Platform, Project } from "./types";

/**
 * Tribus project portfolio.
 *
 * Names, industries and platforms are drawn from the 2025 company deck.
 * Per-project descriptions are DRAFT copy (the deck stores them as slide images),
 * written to be accurate to each product's apparent purpose — review & refine.
 */
export const projects: Project[] = [
  {
    slug: "bluvi",
    name: "Bluvi",
    tagline: "The digital community for anglers.",
    description:
      "Bluvi — Aplicația Pescarilor — helps anglers organise their fishing trips: discover lakes with reviews, facilities and species, register for competitions with live rankings, and follow the latest news and tips. Tribus built it end to end, on iOS and Android.",
    platforms: ["Mobile"],
    industry: "Consumer",
    tech: ["React Native", "NestJS", "PostgreSQL"],
    accent: "teal",
    year: 2025,
    featured: true,
    link: "https://play.google.com/store/apps/details?id=com.tribustech.bluvi",
    // DRAFT — placeholder metrics & quote for the industry showcase. Review & refine.
    metrics: [
      { value: 30, suffix: "k+", label: "Anglers onboarded" },
      { value: 4.7, suffix: "★", label: "Average store rating" },
      { value: 60, suffix: "%", label: "Weekly active anglers" },
    ],
    testimonial: {
      quote:
        "Tribus shipped the whole platform — iOS, Android and backend — and made our community feel alive from day one.",
      author: "Bluvi Team",
      role: "Product, Bluvi",
    },
  },
  {
    slug: "secom-professional",
    name: "Secom Professional",
    tagline: "A B2B catalogue & ordering app for health professionals.",
    description:
      "A dedicated mobile app letting healthcare professionals browse the catalogue by system and condition, save favourites, read product detail and order — with content tailored to their specialisation.",
    platforms: ["Mobile"],
    industry: "Health & Wellness",
    tech: ["React Native", "NestJS", "PostgreSQL", "AWS"],
    accent: "green",
    year: 2024,
    featured: true,
    // DRAFT — placeholder metrics & quote for the industry showcase. Review & refine.
    metrics: [
      { value: 42, suffix: "%", label: "Faster reordering" },
      { value: 3, suffix: "x", label: "More B2B accounts" },
      { value: 99.9, suffix: "%", label: "Checkout uptime" },
    ],
    testimonial: {
      quote:
        "The new portal turned a manual ordering process into a self-serve flow our partners actually enjoy using.",
      author: "Secom",
      role: "Digital Team, Secom",
    },
  },
  {
    slug: "clubo",
    name: "Clubo",
    tagline: "A premium members club, in your pocket.",
    description:
      "A members-club app — discover and RSVP to curated meetings and events, browse exclusive partner benefits, and connect with fellow members through rich profiles.",
    platforms: ["Mobile"],
    industry: "Community",
    tech: ["React Native", "Node.js", "Firebase"],
    accent: "indigo",
    year: 2023,
    featured: false,
  },
  {
    slug: "votemonitor",
    name: "VoteMonitor",
    tagline: "Election observation in the palm of your hand.",
    description:
      "A civic-tech app empowering independent observers to report on polling stations in real time, surfacing irregularities and strengthening electoral transparency.",
    platforms: ["Mobile"],
    industry: "Civic Tech",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    accent: "coral",
    year: 2023,
    featured: true,
    // DRAFT — placeholder metrics & quote for the industry showcase. Review & refine.
    metrics: [
      { value: 12, suffix: "k+", label: "Reports filed" },
      { value: 850, suffix: "+", label: "Polling stations" },
      { value: 100, suffix: "%", label: "Real-time sync" },
    ],
    testimonial: {
      quote:
        "Observers could report irregularities the moment they happened — transparency we couldn't achieve on paper.",
      author: "VoteMonitor",
      role: "Programme Lead",
    },
  },
  {
    slug: "arhiv360",
    name: "Arhiv360",
    tagline: "Digital archiving for the paperless office.",
    description:
      "A document-management platform for storing, indexing and retrieving records securely — turning physical archives into searchable digital ones.",
    platforms: ["Web"],
    industry: "Enterprise",
    tech: ["Angular", "NestJS", "PostgreSQL", "AWS"],
    accent: "blue",
    year: 2023,
    featured: false,
  },
  {
    slug: "juke",
    name: "Juke",
    tagline: "The social jukebox for any room.",
    description:
      "A music app that lets a crowd queue and vote on what plays next, turning any venue or gathering into a shared, interactive soundtrack.",
    platforms: ["Mobile"],
    industry: "Entertainment",
    tech: ["React Native", "Node.js", "Supabase"],
    accent: "amber",
    year: 2023,
    featured: true,
    // DRAFT — placeholder metrics & quote for the industry showcase. Review & refine.
    metrics: [
      { value: 2.5, suffix: "x", label: "Longer sessions" },
      { value: 40, suffix: "%", label: "More songs queued" },
      { value: 1, prefix: "<", suffix: "s", label: "Vote-to-play latency" },
    ],
    testimonial: {
      quote:
        "Juke turns a quiet room into a shared playlist in seconds — guests are hooked the moment they vote.",
      author: "Juke",
      role: "Founder",
    },
  },
  {
    slug: "neuro-performance",
    name: "Neuro Performance Enhancement",
    tagline: "Transformative optimization for mind & body.",
    description:
      "A wellbeing product guiding users through structured programmes for cognitive and physical performance, with progress tracking and personalised journeys.",
    platforms: ["Mobile", "Web"],
    industry: "Health & Wellness",
    tech: ["React Native", "Next.js", "NestJS", "MongoDB"],
    accent: "teal",
    year: 2024,
    featured: false,
  },
  {
    slug: "playtech",
    name: "PlayTech",
    tagline: "Engineering for high-scale gaming.",
    description:
      "Software contributions for a demanding gaming environment, focused on performance, reliability and clean integration with existing systems.",
    platforms: ["Web"],
    industry: "Gaming",
    tech: ["React", "Node.js", "Java", "AWS"],
    accent: "indigo",
    year: 2022,
    featured: false,
  },
  {
    slug: "tattoo-app",
    name: "Tattoo App",
    tagline: "Find your artist, book your ink.",
    description:
      "A marketplace connecting people with tattoo artists — browse portfolios, discover styles and book appointments, all from your phone.",
    platforms: ["Mobile"],
    industry: "Marketplace",
    tech: ["Flutter", "Firebase", "Node.js"],
    accent: "coral",
    year: 2023,
    featured: false,
  },
  {
    slug: "ong-hub",
    name: "ONG Hub",
    tagline: "A home base for NGOs.",
    description:
      "A management hub helping non-governmental organisations coordinate programmes, volunteers and reporting — reducing overhead so teams can focus on their mission.",
    platforms: ["Web"],
    industry: "Civic Tech",
    tech: ["React", "NestJS", "PostgreSQL", "AWS"],
    accent: "green",
    year: 2023,
    featured: true,
  },
  {
    slug: "werk24",
    name: "WERK24",
    tagline: "Connecting people with work, around the clock.",
    description:
      "A platform matching workers and opportunities with a fast, mobile-first flow for listings, applications and scheduling.",
    platforms: ["Web", "Mobile"],
    industry: "HR & Recruitment",
    tech: ["Next.js", "React Native", "NestJS", "PostgreSQL"],
    accent: "blue",
    year: 2024,
    featured: false,
  },
  {
    slug: "edu-sport",
    name: "Edu-Sport",
    tagline: "Where education meets the field.",
    description:
      "A platform blending learning and sport — organising courses, sessions and progress for students, coaches and clubs alike.",
    platforms: ["Web", "Mobile"],
    industry: "Education",
    tech: ["React", "React Native", "Node.js", "MySQL"],
    accent: "amber",
    year: 2023,
    featured: false,
  },
  {
    slug: "covasna-media",
    name: "Covasna Media",
    tagline: "A modern home for local media.",
    description:
      "A fast, content-rich publishing platform delivering regional news and media with a clean reading experience across devices.",
    platforms: ["Web"],
    industry: "Media & Publishing",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    accent: "teal",
    year: 2024,
    featured: false,
  },
  {
    slug: "vic",
    name: "VIC",
    tagline: "Connecting NGOs with people who want to help.",
    description:
      "A volunteering platform that links NGOs with volunteers — discover and join organisations, sign up for open events, and log volunteering hours. A community of 1,000+ active volunteers across 100+ organisations.",
    platforms: ["Web", "Mobile"],
    industry: "Civic Tech",
    tech: ["React", "React Native", "NestJS", "MongoDB"],
    accent: "amber",
    year: 2024,
    featured: true,
    // DRAFT — placeholder metrics & quote for the industry showcase. Review & refine.
    metrics: [
      { value: 35, suffix: "%", label: "Less time to answer" },
      { value: 4, suffix: "x", label: "Faster onboarding" },
      { value: 24, suffix: "/7", label: "Always-on assistant" },
    ],
    testimonial: {
      quote:
        "VIC surfaces the right information at exactly the right moment — it feels like a teammate, not a tool.",
      author: "VIC",
      role: "Operations Lead",
    },
  },
  {
    slug: "silent-auction",
    name: "Silent Auction",
    tagline: "Bidding for good causes, made effortless.",
    description:
      "A live auction platform for fundraising events — real-time bidding, item catalogues and seamless checkout that keep guests engaged and donations flowing.",
    platforms: ["Web", "Mobile"],
    industry: "Events & Fundraising",
    tech: ["Next.js", "React Native", "Node.js", "Supabase"],
    accent: "coral",
    year: 2024,
    featured: true,
    // DRAFT — placeholder metrics & quote for the industry showcase. Review & refine.
    metrics: [
      { value: 28, suffix: "%", label: "Higher final bids" },
      { value: 3, suffix: "x", label: "More bids per item" },
      { value: 100, suffix: "%", label: "Digital bidding" },
    ],
    testimonial: {
      quote:
        "Real-time bidding kept the whole room engaged — our fundraising night raised more than ever before.",
      author: "Silent Auction",
      role: "Events Organiser",
    },
  },
  {
    slug: "recorder",
    name: "Recorder",
    tagline: "Independent journalism, in your pocket.",
    description:
      "The website and mobile app for Recorder — Romania's independent investigative newsroom. Readers follow documentaries, daily news and investigations across web and mobile, with fine-grained notification controls to keep up with the stories that matter.",
    platforms: ["Web", "Mobile"],
    industry: "Media & Publishing",
    tech: ["React Native", "NestJS", "PostgreSQL"],
    accent: "coral",
    year: 2024,
    featured: true,
    link: "https://apps.apple.com/ro/app/recorder-ro/id6736685252",
  },
  {
    slug: "ssm-holding",
    name: "SSM Holding",
    tagline: "Tasks, calendar and teams in one place.",
    description:
      "A productivity app for SSM Holding's teams — schedule tasks and events, manage projects and clients, assign work and track completion across a shared calendar.",
    platforms: ["Mobile"],
    industry: "Productivity",
    tech: ["React Native", "NestJS", "PostgreSQL"],
    accent: "indigo",
    year: 2025,
    featured: true,
    link: "https://apps.apple.com/ro/app/ssm-holding/id6757382676",
  },
  {
    slug: "european-youth-foundation",
    name: "European Youth Foundation",
    tagline: "A grant management system for the Council of Europe.",
    description:
      "A grant-management platform for the Council of Europe's European Youth Foundation — youth NGOs discover calls for proposals, apply for grants and study sessions, and manage projects from application to reporting through a single dashboard.",
    platforms: ["Web"],
    industry: "Public Sector",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    accent: "blue",
    year: 2026,
    featured: true,
  },
  {
    slug: "safefield",
    name: "SafeField",
    tagline: "Occupational-safety compliance, without the paperwork.",
    description:
      "A web platform for Net Team to manage SSM (occupational health & safety) — issue and track digital safety passports per employee, manage companies and reference data, and stay ahead of expiries with a compliance dashboard.",
    platforms: ["Web"],
    industry: "Enterprise",
    tech: ["React", "NestJS", "PostgreSQL"],
    accent: "blue",
    year: 2026,
    featured: true,
  },
  {
    slug: "armenia-refugee-support",
    name: "Armenia Refugee Support",
    tagline: "A service map for people who need it most.",
    description:
      "A civic-tech platform helping refugees in Armenia find the services they need — legal aid, social support and more — through an accessible, searchable service map.",
    platforms: ["Web"],
    industry: "Civic Tech",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    accent: "blue",
    year: 2024,
    featured: false,
    link: "https://armenia-service-map.vercel.app",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function allIndustries(): string[] {
  return Array.from(new Set(projects.map((p) => p.industry))).sort();
}

export function allTech(): string[] {
  return Array.from(new Set(projects.flatMap((p) => p.tech))).sort();
}

export function allPlatforms(): Platform[] {
  const order: Platform[] = ["Web", "Mobile", "Cross-platform"];
  const present = new Set(projects.flatMap((p) => p.platforms));
  return order.filter((p) => present.has(p));
}

export const accents: Accent[] = [
  "teal",
  "indigo",
  "coral",
  "amber",
  "blue",
  "green",
];
