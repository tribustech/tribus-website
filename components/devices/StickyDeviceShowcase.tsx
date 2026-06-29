"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Media } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "./ProjectMedia";

export interface ShowcaseBlock {
  kicker?: string;
  title: string;
  body: string;
}

/**
 * Bevel-style sticky device that swaps its screen as feature blocks scroll past.
 * The device pins on the left (desktop); blocks scroll on the right. Each block
 * maps to one screen (clamped to available media). On mobile the device renders
 * inline above each block.
 */
export function StickyDeviceShowcase({
  media,
  blocks,
  accentClass,
}: {
  media: Media[];
  blocks: ShowcaseBlock[];
  accentClass?: string;
}) {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number(
            (visible.target as HTMLElement).dataset.index ?? 0,
          );
          setActive(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] },
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const portrait = (m: Media) =>
    m.type === "phone" || m.type === "mockup" || m.type === "shot";
  const activeMedia = media[Math.min(active, media.length - 1)] ?? media[0];

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Sticky device (desktop) */}
      <div className="hidden lg:block">
        <div className="sticky top-24 flex h-[80vh] items-center justify-center">
          <div
            className={cn(
              "flex w-full items-center justify-center",
              activeMedia && portrait(activeMedia) ? "max-w-[300px]" : "max-w-[600px]",
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMedia?.src}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {activeMedia && (
                  <ProjectMedia
                    media={activeMedia}
                    sizes="(min-width:1024px) 560px, 80vw"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scrolling feature blocks */}
      <div>
        {blocks.map((block, i) => {
          const m = media[Math.min(i, media.length - 1)];
          return (
            <div
              key={i}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              data-index={i}
              className="flex min-h-[60vh] flex-col justify-center py-8 lg:min-h-[80vh]"
            >
              {/* inline device on mobile */}
              {m && (
                <div className="mb-6 lg:hidden">
                  <div
                    className={cn(
                      "mx-auto",
                      portrait(m) ? "max-w-[230px]" : "max-w-[520px]",
                    )}
                  >
                    <ProjectMedia media={m} sizes="80vw" />
                  </div>
                </div>
              )}
              {block.kicker && (
                <p
                  className={cn(
                    "mb-3 text-sm font-semibold uppercase tracking-wider",
                    accentClass ?? "text-teal-ink",
                  )}
                >
                  {block.kicker}
                </p>
              )}
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl text-balance">
                {block.title}
              </h3>
              <p className="mt-3 max-w-md text-lg text-ink-soft text-balance">
                {block.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
