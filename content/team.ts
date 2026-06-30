import type { Accent } from "@/content/types";

export type TeamMember = {
  name: string;
  role: string;
  /** Headshot under public/images/team/people. Omit to render an initials avatar. */
  img?: string;
  founder?: boolean;
  accent: Accent;
};

/**
 * The Tribus team. Photos sourced from the live site (wearetribus.com/about)
 * and self-hosted under public/images/team/people. Members without a photo
 * fall back to a tinted initials avatar — drop a .webp in and add `img` to swap.
 */
export const team: TeamMember[] = [
  {
    name: "Andrew Rădulescu",
    role: "Co-Founder & CEO",
    img: "/images/team/people/andrew.webp",
    founder: true,
    accent: "teal",
  },
  {
    name: "Toni Rădulescu",
    role: "Co-Founder & COO",
    img: "/images/team/people/toni.webp",
    founder: true,
    accent: "indigo",
  },
  {
    name: "Andreea Pașcu",
    role: "Full-Stack Software Developer",
    img: "/images/team/people/andreea.webp",
    accent: "coral",
  },
  {
    name: "Dragoș Strat",
    role: "Code Forger",
    img: "/images/team/people/dragos.webp",
    accent: "amber",
  },
  {
    name: "Florian Bîrloi",
    role: "Abstract Hardcode Engineer",
    img: "/images/team/people/florian.webp",
    accent: "blue",
  },
  {
    name: "Laurențiu Oncescu",
    role: "Front-End Developer",
    img: "/images/team/people/laurentiu.webp",
    accent: "green",
  },
  {
    name: "Lucia Țugui",
    role: "Mrs. Pixel Perfect",
    img: "/images/team/people/lucia.webp",
    accent: "teal",
  },
  {
    name: "Andrei Manda",
    role: "Product Manager & QA Lead",
    img: "/images/team/people/andrei-manda-v2.webp",
    accent: "indigo",
  },
  {
    name: "Mario Grigoroșița",
    role: "QA Engineer",
    img: "/images/team/people/mario-v2.webp",
    accent: "coral",
  },
  {
    name: "Catalin Mihai",
    role: "DevOps Engineer",
    img: "/images/team/people/catalin.webp",
    accent: "blue",
  },
  {
    name: "Sabin Nicula",
    role: "The CyberJedi",
    img: "/images/team/people/sabin.webp",
    accent: "green",
  },
  {
    name: "Marius Paraschiv",
    role: "PHP Developer",
    img: "/images/team/people/marius.webp",
    accent: "coral",
  },
];
