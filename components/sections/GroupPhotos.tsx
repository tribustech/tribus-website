import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Group-photo gallery. Drop real images into public/images/team and replace
 * the placeholder tiles below (keep the spans for the masonry rhythm).
 */
const TILES = [
  { span: "col-span-2 row-span-2", accent: "bg-teal/15", label: "The team" },
  { span: "sm:col-span-2", accent: "bg-indigo/15", label: "Off-site" },
  { span: "", accent: "bg-amber/15", label: "Workshop" },
  { span: "", accent: "bg-coral/15", label: "Shipping day" },
];

export function GroupPhotos() {
  return (
    <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-4">
      {TILES.map((tile, i) => (
        <Reveal
          key={i}
          delay={i * 0.06}
          direction="none"
          className={cn("h-full", tile.span)}
        >
          <div
            className={cn(
              "flex h-full items-center justify-center rounded-[var(--radius-xl2)] border border-ink/10",
              tile.accent,
            )}
          >
            <span className="text-sm font-medium text-ink/45">
              {tile.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
