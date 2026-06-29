import {
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siFlutter,
  siKotlin,
  siFigma,
  siAngular,
} from "simple-icons";

/** One app the hero phone cross-fades through. */
export interface OrbitApp {
  slug: string;
  screen: string;
  name: string;
  tag: string;
}

/** Flagship apps for the phone cycle. Screens verified to exist on disk;
 *  tags use each project's real secondary tech for variety. */
export const ORBIT_APPS: OrbitApp[] = [
  { slug: "bluvi", screen: "screen-home.webp", name: "Bluvi", tag: "React Native · NestJS" },
  { slug: "clubo", screen: "screen-home.webp", name: "Super Brain", tag: "React Native · Firebase" },
  { slug: "secom-professional", screen: "screen-home.webp", name: "Secom Professional", tag: "React Native · AWS" },
  { slug: "vic", screen: "screen-home.webp", name: "VIC", tag: "React · React Native" },
  { slug: "ssm-holding", screen: "screen-01.webp", name: "SSM Holding", tag: "React Native · PostgreSQL" },
];

/** Concentric orbit rings (like Bevel's). Each ring slowly rotates; tiles on
 *  it counter-rotate to stay upright. The outer ring turns slower for depth. */
export interface OrbitRing {
  radius: number; // px from the orbit centre
  duration: number; // seconds per full revolution
}

export const ORBIT_RINGS: OrbitRing[] = [
  { radius: 122, duration: 58 },
  { radius: 198, duration: 86 },
];

/** One tech tile riding an orbit ring. `ring` indexes ORBIT_RINGS; `angle` is
 *  its starting position on that ring (degrees, 0 = top, clockwise). */
export interface OrbitTile {
  title: string;
  hex: string;
  path: string;
  ring: number;
  angle: number;
  size: number;
}

type Icon = { title: string; hex: string; path: string };

const tile = (
  icon: Icon,
  ring: number,
  angle: number,
  size: number,
): OrbitTile => ({
  title: icon.title,
  hex: icon.hex,
  path: icon.path,
  ring,
  angle,
  size,
});

/** 8 tiles spread across two rings. Angles are offset between rings so the
 *  tiles stay evenly distributed as the rings turn. */
export const ORBIT_TILES: OrbitTile[] = [
  // inner ring
  tile(siReact, 0, 8, 60),
  tile(siFigma, 0, 98, 52),
  tile(siKotlin, 0, 188, 48),
  tile(siAngular, 0, 278, 50),
  // outer ring
  tile(siNextdotjs, 1, 46, 56),
  tile(siTypescript, 1, 132, 52),
  tile(siFlutter, 1, 216, 58),
  tile(siNodedotjs, 1, 318, 54),
];
