import type { Media } from "@/content/types";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "./ProjectMedia";

/**
 * Responsive showcase: a website in a browser frame with a phone overlapping
 * the bottom-right corner — for projects that ship on both web and mobile.
 */
export function DeviceCombo({
  web,
  mobile,
  className,
}: {
  web: Media;
  mobile: Media;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <ProjectMedia media={web} sizes="(min-width:1024px) 460px, 80vw" />
      <div className="absolute -bottom-5 -right-2 w-[26%] max-w-[112px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]">
        <ProjectMedia media={mobile} sizes="120px" />
      </div>
    </div>
  );
}
