import { cn } from "@/lib/utils";

/**
 * Tribus "T" monogram — the real brand mark, rendered as a CSS mask so it
 * recolors with `currentColor` (ink in the header, white in the footer, teal
 * as an accent) while staying crisp. Source: brand deck app icon.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Tribus"
      className={cn("inline-block h-7 w-7 bg-current", className)}
      style={{
        WebkitMaskImage: "url(/tribus-mark.png)",
        maskImage: "url(/tribus-mark.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "white";
}) {
  const src =
    tone === "white"
      ? "/tribus-logo-full-white.svg"
      : "/tribus-logo-full-ink.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Tribus Technologies"
      width={1899}
      height={734}
      draggable={false}
      className={cn("h-9 w-auto select-none", className)}
    />
  );
}
