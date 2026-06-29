/**
 * Clients & partners shown in the "trusted by" logo marquee.
 *
 * Logos are sourced from the 2025 company deck ("Our clients" slide) plus a
 * supplied GOPA PACE vector. Kept in their original brand colours and shown
 * on a dark panel (most deck logos are white versions). PNGs are exported at
 * 96px tall; intrinsic widths recorded for layout stability. Split into two
 * rows that scroll in opposite directions.
 */
export type Client = {
  name: string;
  /** Path under /public */
  logo: string;
  /** Intrinsic asset size (PNGs are 96px tall; SVG keeps its viewBox ratio). */
  width: number;
  height: number;
};

export const clientsRowOne: Client[] = [
  { name: "Capgemini", logo: "/images/clients/capgemini.png", width: 427, height: 96 },
  { name: "Secom", logo: "/images/clients/secom.png", width: 302, height: 96 },
  { name: "WERK24", logo: "/images/clients/werk24.png", width: 558, height: 96 },
  { name: "Recorder", logo: "/images/clients/recorder.png", width: 420, height: 96 },
  { name: "EduSport Hub", logo: "/images/clients/edusport-hub.png", width: 330, height: 96 },
  { name: "Veruvis", logo: "/images/clients/veruvis.png", width: 259, height: 96 },
  { name: "CEO Clubs International", logo: "/images/clients/ceo-clubs.png", width: 130, height: 96 },
];

export const clientsRowTwo: Client[] = [
  { name: "Qualitance", logo: "/images/clients/qualitance.png", width: 1029, height: 96 },
  { name: "Code for Romania", logo: "/images/clients/code-for-romania.png", width: 315, height: 96 },
  { name: "GOPA PACE", logo: "/images/clients/gopa-pace.svg", width: 605, height: 96 },
  { name: "Commit Global", logo: "/images/clients/commit-global.png", width: 335, height: 96 },
  { name: "Council of Europe", logo: "/images/clients/council-of-europe.png", width: 120, height: 96 },
  { name: "WWF", logo: "/images/clients/wwf.png", width: 64, height: 96 },
  { name: "PlateLogiq", logo: "/images/clients/platelogiq.png", width: 678, height: 96 },
];

export const clientsKicker = "Our clients";
