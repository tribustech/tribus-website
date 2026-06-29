import type { Accent } from "@/content/types";

/**
 * Static class maps per accent. Tailwind only detects classes that appear
 * literally in source, so we enumerate every variant we use here.
 */
export const accentHex: Record<Accent, string> = {
  teal: "#01c2bb",
  indigo: "#7678ed",
  coral: "#db5461",
  amber: "#f6ae2d",
  blue: "#1c77c3",
  green: "#8fc93a",
};

export const accentText: Record<Accent, string> = {
  teal: "text-teal",
  indigo: "text-indigo",
  coral: "text-coral",
  amber: "text-amber",
  blue: "text-blue",
  green: "text-green",
};

export const accentBg: Record<Accent, string> = {
  teal: "bg-teal",
  indigo: "bg-indigo",
  coral: "bg-coral",
  amber: "bg-amber",
  blue: "bg-blue",
  green: "bg-green",
};

export const accentBorder: Record<Accent, string> = {
  teal: "border-teal",
  indigo: "border-indigo",
  coral: "border-coral",
  amber: "border-amber",
  blue: "border-blue",
  green: "border-green",
};

/** Soft tinted background (10% via color-mix) + matching text for chips/badges. */
export const accentSoft: Record<Accent, string> = {
  teal: "bg-teal/10 text-teal-ink",
  indigo: "bg-indigo/10 text-indigo",
  coral: "bg-coral/10 text-coral",
  amber: "bg-amber/15 text-amber",
  blue: "bg-blue/10 text-blue",
  green: "bg-green/15 text-green",
};

/** Ring color used on hover/focus. */
export const accentRing: Record<Accent, string> = {
  teal: "ring-teal",
  indigo: "ring-indigo",
  coral: "ring-coral",
  amber: "ring-amber",
  blue: "ring-blue",
  green: "ring-green",
};
