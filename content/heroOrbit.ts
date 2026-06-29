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
