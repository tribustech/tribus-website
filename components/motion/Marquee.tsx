"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Infinite horizontal marquee. Renders the children twice for a seamless loop.
 * Pauses on hover; CSS reduced-motion rules freeze the animation entirely.
 */
export function Marquee({
  children,
  className,
  durationSeconds = 32,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
    >
      <div
        className="flex min-w-full shrink-0 items-center gap-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": `${durationSeconds}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
        aria-hidden={false}
      >
        {children}
        <span className="flex items-center gap-4" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
