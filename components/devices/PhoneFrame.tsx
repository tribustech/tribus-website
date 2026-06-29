import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A clean modern phone frame wrapping a raw mobile screenshot.
 * Fixed 9:19.5 aspect; screenshot is object-cover from the top.
 */
export function PhoneFrame({
  src,
  alt,
  className,
  sizes = "240px",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full rounded-[14%/6.5%] bg-ink p-[3.5%] shadow-2xl ring-1 ring-black/30",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[11%/5.2%] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
        {/* dynamic island */}
        <div className="absolute left-1/2 top-[2.5%] h-[3.5%] w-[28%] -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}
