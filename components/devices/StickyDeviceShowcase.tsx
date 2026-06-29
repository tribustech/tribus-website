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

const portrait = (m: Media) =>
  m.type === "phone" || m.type === "mockup" || m.type === "shot";

/**
 * Bevel-style sticky media that swaps as feature blocks scroll past. Two modes:
 * - default: device pinned centered on the left, blocks on the right.
 * - bleed:   web screenshots render large and run off the left screen edge
 *            (≈60% visible, big), blocks pushed to the right half.
 * On mobile the media renders inline above each block in both modes.
 */
export function StickyDeviceShowcase({
  media,
  blocks,
  accentClass,
  bleed = false,
}: {
  media: Media[];
  blocks: ShowcaseBlock[];
  accentClass?: string;
  bleed?: boolean;
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

  const activeMedia = media[Math.min(active, media.length - 1)] ?? media[0];

  /* Scrolling feature blocks — shared by both modes. */
  const blockList = (
    <div className={cn(bleed && "lg:ml-[50%] lg:pl-10 xl:pl-16")}>
      {blocks.map((block, i) => {
        const m = media[Math.min(i, media.length - 1)];
        return (
          <div
            key={i}
            ref={(el) => {
              blockRefs.current[i] = el;
            }}
            data-index={i}
            className="flex min-h-[60vh] flex-col justify-center py-8 lg:min-h-[85vh]"
          >
            {/* inline media on mobile */}
            {m && (
              <div className="mb-6 lg:hidden">
                <div
                  className={cn(
                    "mx-auto",
                    portrait(m) ? "max-w-[230px]" : "max-w-[560px]",
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
  );

  // ── Bleed mode: big web screenshots running off the left edge ──────────────
  if (bleed) {
    return (
      <div className="relative">
        {/* full-bleed sticky media layer (desktop) */}
        <div aria-hidden className="absolute inset-0 hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMedia?.src}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2",
                  activeMedia && portrait(activeMedia)
                    ? "left-[6%] w-[clamp(240px,22vw,320px)]"
                    : "right-[52vw] w-[78vw] max-w-[1300px]",
                )}
              >
                {activeMedia && (
                  <ProjectMedia media={activeMedia} sizes="80vw" priority />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Soft fade where the big screenshot runs off the left edge, so the
                crop reads as intentional rather than broken. */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[16vw] bg-gradient-to-r from-paper via-paper/70 to-transparent" />
          </div>
        </div>

        {/* text blocks, constrained to the right half */}
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">{blockList}</div>
      </div>
    );
  }

  // ── Default mode: centered device on the left ─────────────────────────────
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-24 flex h-[80vh] items-center justify-center">
          <div
            className={cn(
              "flex w-full items-center justify-center",
              activeMedia && portrait(activeMedia)
                ? "max-w-[300px]"
                : "max-w-[600px]",
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

      <div>{blockList}</div>
    </div>
  );
}
