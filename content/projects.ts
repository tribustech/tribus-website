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
  },
  {
    slug: "secom-professional",
    name: "Secom Professional",
    tagline: "A B2B ordering portal for health professionals.",
    description:
      "A dedicated platform letting healthcare professionals browse, manage and order products with role-based access and a streamlined checkout flow.",
    platforms: ["Web"],
    industry: "Health & Wellness",
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
    accent: "green",
    year: 2024,
    featured: true,
  },
  {
    slug: "clubo",
    name: "Clubo",
    tagline: "Club & community management, simplified.",
    description:
      "Tools for organising members, schedules and bookings in one place — built to take the admin burden off community and club organisers.",
    platforms: ["Web", "Mobile"],
    industry: "Sports & Community",
    tech: ["React", "React Native", "Node.js", "Firebase"],
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
    tagline: "A smart digital companion.",
    description:
      "An interactive product pairing an intuitive interface with a responsive backend, designed to guide users and surface the right information at the right moment.",
    platforms: ["Web", "Mobile"],
    industry: "Enterprise",
    tech: ["React", "React Native", "NestJS", "MongoDB"],
    accent: "indigo",
    year: 2024,
    featured: true,
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
