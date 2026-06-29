"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Media } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "./ProjectMedia";

/**
 * Auto-advancing media carousel with crossfade + dot controls.
 * Pauses on hover; respects reduced motion (no auto-advance).
 */
export function AutoCarousel({
  media,
  intervalMs = 3000,
  sizes,
  className,
}: {
  media: Media[];
  intervalMs?: number;
  sizes?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused || media.length < 2) return;
    const t = setInterval(
      () => setIndex((p) => (p + 1) % media.length),
      intervalMs,
    );
    return () => clearInterval(t);
  }, [reduce, paused, media.length, intervalMs]);

  if (media.length === 0) return null;
  const active = media[Math.min(index, media.length - 1)];

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.src}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectMedia media={active} sizes={sizes} />
        </motion.div>
      </AnimatePresence>

      {media.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {media.map((m, i) => (
            <button
              key={m.src}
              type="button"
              aria-label={`Show screen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
