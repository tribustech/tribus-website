import { cn } from "@/lib/utils";

/**
 * Tribus "T" monogram — bold geometric mark inspired by the brand deck.
 * Uses currentColor so it inherits text color. Swap in the official vector when available.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Crossbar with a rounded hood on the left */}
      <path d="M20 6h24a14 14 0 1 1 0 28H38v-9a5 5 0 0 0-5-5H6A14 14 0 0 1 20 6Z" />
      {/* Stem with a rounded foot */}
      <path d="M25 20h7a6 6 0 0 1 6 6v18a14 14 0 0 1-14 14h-5V26a6 6 0 0 1 6-6Z" />
    </svg>
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
