import type { Media } from "./types";

/**
 * Real product screenshots curated from the company deck, optimized to WebP.
 * Keyed by project slug. media[0] is the primary (card) image.
 * Add more entries (or new slugs) as projects gain assets.
 */
export const projectMedia: Record<string, Media[]> = {
  bluvi: [
    { type: "mockup", src: "/images/work/bluvi/01.webp", w: 900, h: 1643, alt: "Bluvi app — discover screen" },
    { type: "mockup", src: "/images/work/bluvi/02.webp", w: 900, h: 1643, alt: "Bluvi app — place detail" },
    { type: "mockup", src: "/images/work/bluvi/03.webp", w: 900, h: 1643, alt: "Bluvi app — map view" },
  ],
  "secom-professional": [
    { type: "mockup", src: "/images/work/secom-professional/01.webp", w: 900, h: 1679, alt: "Secom Professional — product detail" },
    { type: "mockup", src: "/images/work/secom-professional/02.webp", w: 900, h: 1510, alt: "Secom Professional — catalogue" },
    { type: "mockup", src: "/images/work/secom-professional/03.webp", w: 900, h: 1508, alt: "Secom Professional — account" },
  ],
  clubo: [
    { type: "mockup", src: "/images/work/clubo/01.webp", w: 900, h: 1596, alt: "Clubo — club home" },
    { type: "mockup", src: "/images/work/clubo/02.webp", w: 900, h: 1596, alt: "Clubo — schedule" },
    { type: "mockup", src: "/images/work/clubo/03.webp", w: 900, h: 1596, alt: "Clubo — members" },
  ],
  votemonitor: [
    { type: "phone", src: "/images/work/votemonitor/01.webp", w: 387, h: 845, alt: "VoteMonitor — polling station observation" },
    { type: "phone", src: "/images/work/votemonitor/02.webp", w: 372, h: 814, alt: "VoteMonitor — observation form" },
    { type: "phone", src: "/images/work/votemonitor/03.webp", w: 402, h: 865, alt: "VoteMonitor — questions" },
  ],
  arhiv360: [
    { type: "browser", src: "/images/work/arhiv360/01.webp", w: 1500, h: 938, alt: "Arhiv360 — client management" },
    { type: "browser", src: "/images/work/arhiv360/02.webp", w: 1500, h: 938, alt: "Arhiv360 — records" },
  ],
  juke: [
    { type: "mockup-wide", src: "/images/work/juke/01.webp", w: 1500, h: 931, alt: "Juke — social jukebox across devices" },
  ],
  "neuro-performance": [
    { type: "mockup-wide", src: "/images/work/neuro-performance/01.webp", w: 1700, h: 674, alt: "Neuro Performance — app screens" },
  ],
  playtech: [
    { type: "mockup-wide", src: "/images/work/playtech/01.webp", w: 1600, h: 750, alt: "PlayTech — gaming app screens" },
  ],
  "tattoo-app": [
    { type: "mockup-wide", src: "/images/work/tattoo-app/01.webp", w: 1600, h: 750, alt: "Tattoo App — artist & booking screens" },
  ],
  "ong-hub": [
    { type: "browser", src: "/images/work/ong-hub/01.webp", w: 1500, h: 1191, alt: "ONG Hub — NGO dashboard" },
    { type: "browser", src: "/images/work/ong-hub/02.webp", w: 1500, h: 1368, alt: "ONG Hub — reporting" },
  ],
  werk24: [
    { type: "browser", src: "/images/work/werk24/01.webp", w: 1600, h: 830, alt: "WERK24 — planning workspace" },
  ],
  "edu-sport": [
    { type: "browser", src: "/images/work/edu-sport/01.webp", w: 1700, h: 844, alt: "Edu-Sport — courses landing" },
    { type: "browser", src: "/images/work/edu-sport/02.webp", w: 1200, h: 2042, alt: "Edu-Sport — programme detail" },
  ],
  "covasna-media": [
    { type: "browser", src: "/images/work/covasna-media/01.webp", w: 1159, h: 780, alt: "Covasna Media — news portal" },
    { type: "browser", src: "/images/work/covasna-media/02.webp", w: 1186, h: 727, alt: "Covasna Media — video portal" },
  ],
  vic: [
    { type: "mockup", src: "/images/work/vic/01.webp", w: 950, h: 1496, alt: "VIC — organisation profile" },
    { type: "browser", src: "/images/work/vic/02.webp", w: 819, h: 544, alt: "VIC — dashboard" },
  ],
  "silent-auction": [
    { type: "phone", src: "/images/work/silent-auction/01.webp", w: 560, h: 1213, alt: "Silent Auction — live bidding" },
    { type: "phone", src: "/images/work/silent-auction/02.webp", w: 560, h: 1186, alt: "Silent Auction — auction item" },
    { type: "phone", src: "/images/work/silent-auction/03.webp", w: 560, h: 1009, alt: "Silent Auction — leaderboard" },
  ],
};

export function getMedia(slug: string): Media[] {
  return projectMedia[slug] ?? [];
}

export function getPrimaryMedia(slug: string): Media | undefined {
  return projectMedia[slug]?.[0];
}
