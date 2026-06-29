import type { Media } from "./types";

/**
 * Real product screenshots curated from the company deck, optimized to WebP.
 * Keyed by project slug. media[0] is the primary (card) image.
 * Add more entries (or new slugs) as projects gain assets.
 */
export const projectMedia: Record<string, Media[]> = {
  // Bluvi: clean in-app screenshots (com.tribustech.bluvi).
  bluvi: [
    { type: "phone", src: "/images/work/bluvi/screen-home.webp", w: 600, h: 1300, alt: "Bluvi — home & live competitions" },
    { type: "phone", src: "/images/work/bluvi/screen-spot.webp", w: 600, h: 1300, alt: "Bluvi — fishing spot detail" },
    { type: "phone", src: "/images/work/bluvi/screen-map.webp", w: 600, h: 1300, alt: "Bluvi — map of fishing spots" },
    { type: "phone", src: "/images/work/bluvi/screen-board.webp", w: 600, h: 1300, alt: "Bluvi — competition leaderboard" },
  ],
  // Secom Professional: clean in-app screenshots.
  "secom-professional": [
    { type: "phone", src: "/images/work/secom-professional/screen-home.webp", w: 600, h: 1300, alt: "Secom Professional — home & systems" },
    { type: "phone", src: "/images/work/secom-professional/screen-catalog.webp", w: 600, h: 1300, alt: "Secom Professional — product catalogue" },
    { type: "phone", src: "/images/work/secom-professional/screen-product.webp", w: 600, h: 1300, alt: "Secom Professional — product detail" },
    { type: "phone", src: "/images/work/secom-professional/screen-fav.webp", w: 600, h: 1300, alt: "Secom Professional — favourites" },
  ],
  // Clubo: clean in-app screenshots (members club app).
  clubo: [
    { type: "phone", src: "/images/work/clubo/screen-home.webp", w: 600, h: 1300, alt: "Clubo — member home & meetings" },
    { type: "phone", src: "/images/work/clubo/screen-meeting.webp", w: 600, h: 1300, alt: "Clubo — meeting detail" },
    { type: "phone", src: "/images/work/clubo/screen-meetings.webp", w: 600, h: 1300, alt: "Clubo — meetings" },
    { type: "phone", src: "/images/work/clubo/screen-partners.webp", w: 600, h: 1300, alt: "Clubo — partner benefits" },
    { type: "phone", src: "/images/work/clubo/screen-profile.webp", w: 600, h: 1300, alt: "Clubo — member profile" },
  ],
  // VoteMonitor: real marketing screenshots from Google Play (Code for Romania).
  votemonitor: [
    { type: "shot", src: "/images/work/votemonitor/shot-01.webp", w: 720, h: 1440, alt: "VoteMonitor — monitor polling stations" },
    { type: "shot", src: "/images/work/votemonitor/shot-02.webp", w: 720, h: 1440, alt: "VoteMonitor — form overview" },
    { type: "shot", src: "/images/work/votemonitor/shot-03.webp", w: 720, h: 1440, alt: "VoteMonitor — answer questions" },
    { type: "shot", src: "/images/work/votemonitor/shot-04.webp", w: 720, h: 1440, alt: "VoteMonitor — observation" },
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
    { type: "browser", src: "/images/work/covasna-media/web-01.webp", w: 1440, h: 900, alt: "Covasna Media — news portal" },
  ],
  // Recorder: website + mobile app (shown together as a responsive combo).
  recorder: [
    { type: "browser", src: "/images/work/recorder/web-01.webp", w: 1440, h: 774, alt: "Recorder — newsroom website" },
    { type: "shot", src: "/images/work/recorder/shot-01.webp", w: 720, h: 1558, alt: "Recorder — mobile app" },
    { type: "shot", src: "/images/work/recorder/shot-02.webp", w: 720, h: 1558, alt: "Recorder — notification settings" },
  ],
  "armenia-refugee-support": [
    { type: "browser", src: "/images/work/armenia-refugee-support/web-01.webp", w: 1440, h: 900, alt: "Refugee Support — service map landing" },
    { type: "phone", src: "/images/work/armenia-refugee-support/phone-01.webp", w: 390, h: 844, alt: "Refugee Support — mobile" },
  ],
  "ssm-holding": [
    { type: "phone", src: "/images/work/ssm-holding/screen-01.webp", w: 393, h: 1444, alt: "SSM Holding — dashboard" },
    { type: "phone", src: "/images/work/ssm-holding/screen-02.webp", w: 393, h: 852, alt: "SSM Holding — calendar" },
    { type: "phone", src: "/images/work/ssm-holding/screen-03.webp", w: 393, h: 852, alt: "SSM Holding — sign in" },
  ],
  "european-youth-foundation": [
    { type: "browser", src: "/images/work/european-youth-foundation/web-02.webp", w: 1129, h: 728, alt: "European Youth Foundation — calls for proposals" },
    { type: "browser", src: "/images/work/european-youth-foundation/web-01.webp", w: 715, h: 461, alt: "European Youth Foundation — platform home" },
  ],
  safefield: [
    { type: "browser", src: "/images/work/safefield/web-01.webp", w: 1500, h: 744, alt: "SafeField — compliance dashboard" },
    { type: "browser", src: "/images/work/safefield/web-02.webp", w: 1500, h: 745, alt: "SafeField — company overview" },
    { type: "browser", src: "/images/work/safefield/web-03.webp", w: 1500, h: 744, alt: "SafeField — add SSM passport" },
    { type: "browser", src: "/images/work/safefield/web-04.webp", w: 1500, h: 746, alt: "SafeField — reference data" },
  ],
  // VIC: clean in-app screenshots (volunteering platform).
  vic: [
    { type: "phone", src: "/images/work/vic/screen-home.webp", w: 600, h: 1300, alt: "VIC — volunteer home" },
    { type: "phone", src: "/images/work/vic/screen-event.webp", w: 600, h: 1300, alt: "VIC — event detail" },
    { type: "phone", src: "/images/work/vic/screen-events.webp", w: 600, h: 1300, alt: "VIC — open events" },
    { type: "phone", src: "/images/work/vic/screen-org.webp", w: 600, h: 1300, alt: "VIC — organisation profile" },
  ],
  "silent-auction": [
    { type: "phone", src: "/images/work/silent-auction/01.webp", w: 560, h: 1213, alt: "Silent Auction — live bidding" },
    { type: "phone", src: "/images/work/silent-auction/02.webp", w: 560, h: 1186, alt: "Silent Auction — auction item" },
    { type: "phone", src: "/images/work/silent-auction/03.webp", w: 560, h: 1009, alt: "Silent Auction — leaderboard" },
  ],
  // PTSD Help: clean in-app screenshots (mental-health support app).
  "ptsd-help": [
    { type: "phone", src: "/images/work/ptsd-help/screen-home.webp", w: 430, h: 932, alt: "PTSD Help — home & feelings" },
    { type: "phone", src: "/images/work/ptsd-help/screen-symptoms.webp", w: 430, h: 932, alt: "PTSD Help — manage symptoms" },
    { type: "phone", src: "/images/work/ptsd-help/screen-distress.webp", w: 431, h: 932, alt: "PTSD Help — distress meter" },
    { type: "phone", src: "/images/work/ptsd-help/screen-relax.webp", w: 430, h: 932, alt: "PTSD Help — muscle relaxation tool" },
  ],
  // Practice4Good: NGO internship & practice platform (a Commit Global product).
  practice4good: [
    { type: "browser", src: "/images/work/practice4good/web-01.webp", w: 1440, h: 900, alt: "Practice4Good — search practice programmes at NGOs" },
  ],
  // Centru Civic: civic services directory (a Commit Global product).
  "centru-civic": [
    { type: "browser", src: "/images/work/centru-civic/web-01.webp", w: 1440, h: 900, alt: "Centru Civic — find civil-society services by need" },
  ],
  // Rundezvous: running-gear & coffee e-commerce store.
  rundezvous: [
    { type: "browser", src: "/images/work/rundezvous/web-01.webp", w: 1440, h: 900, alt: "Rundezvous — running hub & coffee shop store" },
  ],
  // PescarMania: fishing-equipment e-commerce store.
  pescarmania: [
    { type: "browser", src: "/images/work/pescarmania/web-01.webp", w: 1440, h: 900, alt: "PescarMania — fishing-equipment online store" },
  ],
  // WWF: green public procurement campaign page (wwf.ro).
  wwf: [
    { type: "browser", src: "/images/work/wwf/web-01.webp", w: 1440, h: 900, alt: "WWF — green public procurement campaign page" },
  ],
};

export function getMedia(slug: string): Media[] {
  return projectMedia[slug] ?? [];
}

export function getPrimaryMedia(slug: string): Media | undefined {
  return projectMedia[slug]?.[0];
}
