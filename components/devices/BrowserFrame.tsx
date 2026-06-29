import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A browser window chrome wrapping a raw web screenshot — evokes the
 * desktop/laptop experience. Shows the top of the page (object-top).
 */
export function BrowserFrame({
  src,
  alt,
  w,
  h,
  className,
  sizes = "(min-width: 1024px) 640px, 90vw",
  priority = false,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-ink/8 bg-paper-deep px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green/80" />
        <span className="ml-3 hidden h-4 flex-1 rounded-md bg-white/80 ring-1 ring-ink/5 sm:block" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}
