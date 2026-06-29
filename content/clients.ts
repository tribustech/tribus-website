/**
 * Clients & partners shown in the "trusted by" logo marquee.
 *
 * Logos are kept in their ORIGINAL brand colours and shown on the site's
 * light background. Sources: official brand assets / Wikimedia (Capgemini,
 * WWF, Council of Europe), brand sites (Secom, Veruvis, Recorder, Code for
 * Romania, Commit Global, Super Brain), a supplied GOPA PACE vector, and the
 * 2025 company deck (WERK24, Qualitance, PlateLogiq, CEO Clubs, EduSport —
 * recoloured from their white deck versions to dark ink so they read on light).
 *
 * `scale` boosts compact / icon-dominant marks (WWF, Council, CEO Clubs) so
 * every logo carries roughly equal visual weight at a shared base height.
 */
export type Client = {
  name: string;
  /** Path under /public */
  logo: string;
  /** Intrinsic asset size (PNGs 96px tall; SVG width derived from viewBox). */
  width: number;
  height: number;
  /** Render-height multiplier vs the base height. Defaults to 1. */
  scale?: number;
};

export const clientsRowOne: Client[] = [
  { name: "Capgemini", logo: "/images/clients/capgemini.svg", width: 412, height: 96 },
  { name: "Veruvis", logo: "/images/clients/veruvis.png", width: 165, height: 96, scale: 1.6 },
  { name: "WERK24", logo: "/images/clients/werk24.png", width: 558, height: 96 },
  { name: "Council of Europe", logo: "/images/clients/council-of-europe.svg", width: 120, height: 96, scale: 1.5 },
  { name: "Recorder", logo: "/images/clients/recorder.svg", width: 420, height: 96 },
  { name: "Code for Romania", logo: "/images/clients/code-for-romania.png", width: 311, height: 96 },
  { name: "Super Brain Clubs", logo: "/images/clients/super-brain.svg", width: 524, height: 96 },
];

export const clientsRowTwo: Client[] = [
  { name: "Secom", logo: "/images/clients/secom.png", width: 300, height: 96 },
  { name: "Qualitance", logo: "/images/clients/qualitance.png", width: 1029, height: 96 },
  { name: "GOPA PACE", logo: "/images/clients/gopa-pace.svg", width: 605, height: 96 },
  { name: "WWF", logo: "/images/clients/wwf.svg", width: 65, height: 96, scale: 1.7 },
  { name: "Commit Global", logo: "/images/clients/commit-global.png", width: 337, height: 96 },
  { name: "CEO Clubs International", logo: "/images/clients/ceo-clubs.png", width: 130, height: 96, scale: 1.35 },
  { name: "PlateLogiq", logo: "/images/clients/platelogiq.png", width: 678, height: 96 },
  { name: "EduSport Hub", logo: "/images/clients/edusport-hub.png", width: 330, height: 96 },
];

export const clientsKicker = "Our clients";
