/**
 * Clients & partners shown in the "trusted by" logo marquee.
 *
 * Logos are sourced from the 2025 company deck ("Our clients" slide) and
 * normalised to a single monochrome ink silhouette on a transparent
 * background, exported at 96px tall (intrinsic widths recorded below for
 * next/image). Ordered for visual rhythm (wide ↔ narrow marks alternate).
 */
export type Client = {
  name: string;
  /** Path under /public */
  logo: string;
  /** Intrinsic size of the asset (height is a constant 96). */
  width: number;
  height: number;
};

export const clients: Client[] = [
  { name: "Capgemini", logo: "/images/clients/capgemini.png", width: 430, height: 96 },
  { name: "Carrefour", logo: "/images/clients/carrefour.png", width: 118, height: 96 },
  { name: "Secom", logo: "/images/clients/secom.png", width: 301, height: 96 },
  { name: "Qualitance", logo: "/images/clients/qualitance.png", width: 1028, height: 96 },
  { name: "WERK24", logo: "/images/clients/werk24.png", width: 558, height: 96 },
  { name: "Code for Romania", logo: "/images/clients/code-for-romania.png", width: 314, height: 96 },
  { name: "Recorder", logo: "/images/clients/recorder.png", width: 420, height: 96 },
  { name: "EduSport Hub", logo: "/images/clients/edusport-hub.png", width: 329, height: 96 },
  { name: "Commit Global", logo: "/images/clients/commit-global.png", width: 335, height: 96 },
  { name: "Veruvis", logo: "/images/clients/veruvis.png", width: 259, height: 96 },
  { name: "CEO Clubs International", logo: "/images/clients/ceo-clubs.png", width: 129, height: 96 },
  { name: "PlateLogiq", logo: "/images/clients/platelogiq.png", width: 678, height: 96 },
];

export const clientsKicker = "Our clients";
