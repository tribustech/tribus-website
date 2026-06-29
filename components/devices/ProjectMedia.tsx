import Image from "next/image";
import type { Media } from "@/content/types";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./PhoneFrame";
import { BrowserFrame } from "./BrowserFrame";

/**
 * Renders one piece of project media using the appropriate device treatment.
 * - phone   → PhoneFrame (raw screen gets a device)
 * - browser → BrowserFrame (raw web gets a window)
 * - mockup / mockup-wide → pre-rendered transparent render, floated with shadow
 */
export function ProjectMedia({
  media,
  className,
  sizes,
  priority = false,
}: {
  media: Media;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (media.type === "phone") {
    return (
      <PhoneFrame
        src={media.src}
        alt={media.alt}
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  if (media.type === "browser") {
    return (
      <BrowserFrame
        src={media.src}
        alt={media.alt}
        w={media.w}
        h={media.h}
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  // Branded marketing screenshot — opaque, rounded, full-bleed.
  if (media.type === "shot") {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        width={media.w}
        height={media.h}
        sizes={sizes ?? "(min-width: 1024px) 360px, 70vw"}
        priority={priority}
        className={cn(
          "block h-auto w-full rounded-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/5",
          className,
        )}
      />
    );
  }

  // Pre-rendered transparent mockups — show as-is, floating.
  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.w}
      height={media.h}
      sizes={sizes ?? "(min-width: 1024px) 420px, 60vw"}
      priority={priority}
      className={cn(
        "block h-auto w-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.28)]",
        className,
      )}
    />
  );
}
