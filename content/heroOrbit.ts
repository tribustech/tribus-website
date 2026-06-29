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

/** One levitating tech tile. top/left are % of the orbit container;
 *  size is px; amplitude/duration/delay drive the Float bob. */
export interface OrbitTile {
  title: string;
  hex: string;
  path: string;
  top: number;
  left: number;
  size: number;
  amplitude: number;
  duration: number;
  delay: number;
}

type Icon = { title: string; hex: string; path: string };

const tile = (
  icon: Icon,
  top: number,
  left: number,
  size: number,
  amplitude: number,
  duration: number,
  delay: number,
): OrbitTile => ({
  title: icon.title,
  hex: icon.hex,
  path: icon.path,
  top,
  left,
  size,
  amplitude,
  duration,
  delay,
});

/** 8 tiles in a loose arc sweeping top-center → right → bottom-center
 *  around the phone (which sits in the left ~46% of the container). */
export const ORBIT_TILES: OrbitTile[] = [
  tile(siTypescript, 4, 38, 50, 10, 8, 0.3),
  tile(siNextdotjs, 6, 58, 58, 9, 7.5, 0),
  tile(siReact, 20, 82, 64, 12, 8.5, 0.6),
  tile(siAngular, 32, 62, 46, 8, 7, 1.1),
  tile(siFigma, 44, 92, 56, 8, 7, 1.2),
  tile(siKotlin, 52, 68, 48, 7, 6.5, 0.4),
  tile(siFlutter, 66, 84, 60, 11, 9, 0.9),
  tile(siNodedotjs, 84, 64, 54, 9, 7.5, 1.5),
];
