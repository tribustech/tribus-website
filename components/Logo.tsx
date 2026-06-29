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
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-7 text-ink" />
      {withWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-ink">
          Tribus
        </span>
      )}
    </span>
  );
}
