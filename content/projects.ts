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
    tech: ["React Native", "Node.js", "Strapi", "PostgreSQL", "DigitalOcean", "Cloudflare", "Datadog"],
    accent: "teal",
    year: 2025,
    featured: true,
    link: "https://play.google.com/store/apps/details?id=com.tribustech.bluvi",
    metrics: [
      { value: 30, suffix: "k+", label: "Anglers onboarded" },
      { value: 4.9, suffix: "★", label: "Average store rating" },
      { value: 60, suffix: "%", label: "Weekly active anglers" },
    ],
    testimonial: {
      quote:
        "Bluvi is finally changing a world that had stayed the same for as long as I can remember.",
      author: "Marika",
      role: "Chita Lake",
    },
  },
  {
    slug: "secom-professional",
    name: "Secom Professional",
    tagline: "Secom's product reference for doctors & pharmacists.",
    description:
      "A reference app built for Secom that puts detailed, trustworthy product information in the hands of doctors and pharmacists. Professionals browse Secom's range by system and condition, read in-depth product detail tailored to their specialisation, and save favourites — a pocket companion for confident recommendations.",
    platforms: ["Mobile"],
    industry: "Health & Wellness",
    tech: ["React Native", "Strapi", "PostgreSQL", "Railway"],
    accent: "green",
    year: 2024,
    featured: true,
    link: "https://play.google.com/store/apps/details?id=ro.secom.professional",
    metrics: [
      { value: 100, suffix: "+", label: "Products documented" },
      { value: 2.5, suffix: "k+", label: "Specialists onboarded" },
      { value: 5.0, suffix: "★", label: "Average store rating" },
    ],
    testimonial: {
      quote: "They are the most professional team we have worked with.",
      author: "Lucian Boca",
      role: "Digital & E-Commerce Manager, Secom",
    },
  },
  {
    slug: "clubo",
    name: "Super Brain",
    tagline: "A premium members club, in your pocket.",
    description:
      "A members-club app for Super Brain Clubs — discover and RSVP to curated meetings and events, browse exclusive partner benefits, and connect with fellow members through rich profiles.",
    platforms: ["Mobile"],
    industry: "Community",
    tech: ["React Native", ".NET", "MySQL", "Firebase"],
    accent: "indigo",
    year: 2023,
    featured: false,
    testimonial: {
      quote:
        "They were always going the extra mile and proposing even better ideas.",
      author: "Sandra Diviskova",
      role: "General Director, CEO Clubs Romania",
    },
  },
  {
    slug: "votemonitor",
    name: "VoteMonitor",
    tagline: "Election observation in the palm of your hand.",
    description:
      "A civic-tech app — built in partnership with Commit Global (formerly Code for Romania) — that empowers independent observers to report on polling stations in real time, surfacing irregularities and strengthening electoral transparency. Deployed by observation missions across more than ten countries.",
    platforms: ["Mobile"],
    industry: "Civic Tech",
    tech: ["React Native", ".NET", "PostgreSQL", "AWS"],
    accent: "coral",
    year: 2023,
    featured: true,
    metrics: [
      { value: 10, suffix: "+", label: "Countries deployed" },
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
    tech: ["React", "NestJS", "PostgreSQL", "AWS"],
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
    tech: ["React Native", "Next.js", "NestJS", "Firebase"],
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
    tech: ["Angular"],
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
    platforms: ["Web"],
    industry: "HR & Recruitment",
    tech: ["React", "Python"],
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
    platforms: ["Web"],
    industry: "Education",
    tech: ["PHP", "WordPress"],
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
    tech: ["Next.js", "Strapi", "PostgreSQL", "Railway"],
    accent: "teal",
    year: 2024,
    featured: false,
  },
  {
    slug: "vic",
    name: "VIC",
    tagline: "Connecting NGOs with people who want to help.",
    description:
      "A volunteering platform that links NGOs with volunteers — discover and join organisations, sign up for open events, and log volunteering hours. A community of 2,000+ active volunteers across 150+ organisations.",
    platforms: ["Web", "Mobile"],
    industry: "Civic Tech",
    tech: ["React", "React Native", "NestJS", "PostgreSQL"],
    accent: "amber",
    year: 2024,
    featured: true,
    metrics: [
      { value: 2, suffix: "k+", label: "Active volunteers" },
      { value: 150, suffix: "+", label: "Organisations" },
      { value: 4, suffix: "x", label: "Faster onboarding" },
    ],
  },
  {
    slug: "silent-auction",
    name: "Silent Auction",
    tagline: "Bidding for good causes, made effortless.",
    description:
      "A live auction platform for fundraising events — real-time bidding, item catalogues and seamless checkout that keep guests engaged and donations flowing.",
    platforms: ["Web"],
    industry: "Events & Fundraising",
    tech: ["React", "Supabase"],
    accent: "coral",
    year: 2024,
    featured: true,
  },
  {
    slug: "recorder",
    name: "Recorder",
    tagline: "Independent journalism, in your pocket.",
    description:
      "The website and mobile apps for Recorder — Romania's independent investigative newsroom. Tribus inherited both the iOS and Android apps and is now their active developer and maintainer — shipping new features and treating security as paramount. Readers follow documentaries, daily news and investigations across web and mobile, with fine-grained notification controls to keep up with the stories that matter. We also ran penetration testing to keep the platform untouchable.",
    platforms: ["Web", "Mobile"],
    industry: "Media & Publishing",
    tech: ["Swift", "Kotlin", "PHP", "MariaDB", "Penetration Testing"],
    accent: "coral",
    year: 2024,
    featured: true,
    link: "https://apps.apple.com/ro/app/recorder-ro/id6736685252",
    testimonial: {
      quote:
        "Their project management approach has contributed significantly to the success and smooth execution of our projects.",
      author: "Marian Ciubuc",
      role: "Digital Strategist, Asociația Recorder Community",
    },
  },
  {
    slug: "ssm-holding",
    name: "SSM Holding",
    tagline: "Health & safety inspections, from site visit to signed report.",
    description:
      "A field app for SSM Holding's occupational health & safety (SSM/PSI) inspectors. They schedule client visits, work through structured compliance checklists — marking each criterion present or missing with mandatory photo evidence and flagging the fines a gap carries — then capture handwritten signatures from both parties on-site and generate the official inspection report (proces-verbal) to share in a tap. A built-in recognition system lets teams award points, climb a leaderboard and redeem perks, while admins manage the catalogue. Tasks, calendar and client management tie the day together.",
    platforms: ["Mobile"],
    industry: "Health & Safety",
    tech: ["React Native", ".NET", "PostgreSQL", "Azure"],
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
    tech: ["Angular", ".NET", "SQL Server"],
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
    tech: ["Next.js", "Strapi", "PostgreSQL", "Railway"],
    accent: "blue",
    year: 2024,
    featured: false,
    link: "https://armenia-service-map.vercel.app",
  },
  {
    slug: "ptsd-help",
    name: "PTSD Help",
    tagline: "Tools to regain calm and control.",
    description:
      "A mental-health support app for people living with PTSD, built in collaboration with Code for Romania. It pairs symptom tracking with guided coping tools — a distress meter, muscle-relaxation and meditation sessions, and inspirational content — so users can find the right instrument for whatever they're feeling in the moment.",
    platforms: ["Mobile"],
    industry: "Health & Wellness",
    tech: ["React Native", "Amazon S3"],
    accent: "blue",
    year: 2024,
    featured: true,
  },
  {
    slug: "practice4good",
    name: "Practice4Good",
    tagline: "Internships at NGOs, made discoverable.",
    description:
      "A platform — built for Commit Global — that connects students and recent graduates with practice and internship programmes at Romanian NGOs. Users search opportunities by faculty, duration and field, while organisations post and manage their listings.",
    platforms: ["Web"],
    industry: "Civic Tech",
    tech: ["React", "NestJS", "PostgreSQL", "AWS"],
    accent: "amber",
    year: 2023,
    featured: false,
    link: "https://www.practice4good.ro/",
  },
  {
    slug: "centru-civic",
    name: "Centru Civic",
    tagline: "Every civil-society service, in one place.",
    description:
      "A directory — built for Commit Global — that centralises the services Romanian NGOs offer to citizens. People search by need, domain and beneficiary to find the right support, turning a fragmented sector into a single, searchable resource.",
    platforms: ["Web"],
    industry: "Civic Tech",
    tech: ["React", "NestJS", "PostgreSQL", "AWS"],
    accent: "amber",
    year: 2023,
    featured: false,
    link: "https://www.centrucivic.ro/",
  },
  {
    slug: "rundezvous",
    name: "Rundezvous",
    tagline: "Where the running community meets coffee culture.",
    description:
      "An e-commerce store for Rundezvous — a running hub and coffee shop. Customers browse merchandise, footwear and apparel across a fast, image-led storefront with full cart and checkout.",
    platforms: ["Web"],
    industry: "E-commerce",
    tech: ["Shopify", "Liquid", "JavaScript"],
    accent: "blue",
    year: 2024,
    featured: false,
    link: "https://rundezvous.ro/",
  },
  {
    slug: "pescarmania",
    name: "PescarMania",
    tagline: "Premium gear for performance fishing.",
    description:
      "An e-commerce store for PescarMania — premium fishing equipment. A deep, well-organised catalogue spans carp, feeder and predator fishing, baits, luggage, clothing, camping and boats, with wishlists, promotions and secure online payment.",
    platforms: ["Web"],
    industry: "E-commerce",
    tech: ["WooCommerce", "WordPress", "PHP"],
    accent: "coral",
    year: 2023,
    featured: false,
    link: "https://pescarmania.ro/",
  },
  {
    slug: "wwf",
    name: "WWF — Green Public Procurement",
    tagline: "Local, quality food on public plates.",
    description:
      "A campaign page built for WWF Romania — promoting green public procurement to bring local, quality produce into Romania's public catering. We designed and built this page within the wwf.ro site.",
    platforms: ["Web"],
    industry: "Sustainability",
    tech: ["WordPress", "PHP", "JavaScript"],
    accent: "green",
    year: 2025,
    featured: false,
    link: "https://wwf.ro/ce-facem/achiziii-publice-verzi-hrana/",
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
