"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Media } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "./ProjectMedia";

/**
 * 3D coverflow carousel — the active screen sits upright in the centre, its
 * neighbours angle back (rotateY ±). Auto-advances; pauses on hover; respects
 * reduced motion. Best for portrait (phone) media.
 */
export function Coverflow({
  media,
  intervalMs = 3800,
  className,
}: {
  media: Media[];
  intervalMs?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = media.length;

  useEffect(() => {
    if (reduce || paused || n < 2) return;
    const t = setInterval(() => setActive((p) => (p + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [reduce, paused, n, intervalMs]);

  if (n === 0) return null;

  // Signed circular distance from the active index.
  const rel = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center [perspective:1200px]",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {media.map((m, i) => {
        const d = rel(i);
        const abs = Math.abs(d);
        if (abs > 1) return null; // centre + immediate neighbours only
        return (
          <motion.button
            key={m.src}
            type="button"
            aria-label={`Show screen ${i + 1}`}
            onClick={() => setActive(i)}
            className="absolute w-[52%] max-w-[192px] cursor-pointer [transform-style:preserve-3d]"
            initial={false}
            animate={{
              x: `${d * 72}%`,
              rotateY: -d * 30,
              scale: d === 0 ? 1.02 : 0.78,
              opacity: d === 0 ? 1 : 0.45,
              filter: d === 0 ? "brightness(1)" : "brightness(0.9)",
              zIndex: 30 - abs * 10,
            }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ zIndex: 30 - abs * 10 }}
          >
            <ProjectMedia media={m} sizes="220px" />
          </motion.button>
        );
      })}

      <div className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 gap-1.5">
        {media.map((m, i) => (
          <button
            key={m.src}
            type="button"
            aria-label={`Go to screen ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-5 bg-white" : "w-1.5 bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
