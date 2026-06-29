"use client";

import { useCallback, useRef, useState } from "react";
import type { Media } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "./ProjectMedia";

/** Horizontal snap carousel of project screens with drag + arrow controls. */
export function ScreenCarousel({
  media,
  className,
}: {
  media: Media[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  if (media.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {media.map((m) => {
          const portrait =
            m.type === "phone" || m.type === "mockup" || m.type === "shot";
          return (
            <div
              key={m.src}
              className={cn(
                "snap-center shrink-0",
                portrait ? "w-[200px] sm:w-[230px]" : "w-[80vw] max-w-[560px]",
              )}
            >
              <ProjectMedia media={m} sizes="(min-width:640px) 560px, 80vw" />
            </div>
          );
        })}
      </div>

      <CarouselButton
        side="left"
        disabled={!canPrev}
        onClick={() => scrollBy(-1)}
      />
      <CarouselButton
        side="right"
        disabled={!canNext}
        onClick={() => scrollBy(1)}
      />
    </div>
  );
}

function CarouselButton({
  side,
  disabled,
  onClick,
}: {
  side: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={cn(
        "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink shadow-lg backdrop-blur transition-opacity hover:bg-white disabled:pointer-events-none disabled:opacity-0 sm:flex",
        side === "left" ? "left-2" : "right-2",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("h-5 w-5", side === "left" && "rotate-180")}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}
