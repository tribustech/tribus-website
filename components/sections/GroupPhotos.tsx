import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * "Life at Tribus" gallery. Real team/culture photos from our Instagram
 * (@tribus_technologies), self-hosted under public/images/team. The dense
 * masonry packs a wide hero (the whole team) with tall working candids and
 * square detail shots. To swap a photo, drop a new .webp in and update the
 * matching entry below — keep the span so the rhythm holds.
 */
type Photo = {
  src: string;
  alt: string;
  /** Grid span. Base = 2-col mobile, sm = 4-col desktop. */
  span: string;
};

const PHOTOS: Photo[] = [
  {
    src: "/images/team/team-swords.webp",
    alt: "The Tribus team together on an off-site, swords in hand",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/team/team-stairs.webp",
    alt: "The whole Tribus team in branded tees on the studio stairs",
    span: "row-span-2 sm:row-span-3",
  },
  {
    src: "/images/team/deep-work.webp",
    alt: "A Tribus developer in the zone, headphones on at the laptop",
    span: "row-span-2 sm:row-span-3",
  },
  {
    src: "/images/team/pair-programming.webp",
    alt: "Two engineers pair-programming at the Bucharest studio",
    span: "row-span-2 sm:row-span-3",
  },
  {
    src: "/images/team/client-superbrain.webp",
    alt: "The team on a visit to client offices",
    span: "row-span-2 sm:row-span-3",
  },
  {
    src: "/images/team/f1-paddock.webp",
    alt: "Tribus teammates at the Formula 1 paddock on a team trip",
    span: "row-span-2 sm:row-span-3",
  },
  {
    src: "/images/team/team-lawn.webp",
    alt: "The Tribus team gathered outside the office on a sunny day",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/team/paint-night.webp",
    alt: "The team gathered around the table for a paint night",
    span: "row-span-2 sm:row-span-3",
  },
  {
    src: "/images/team/christmas.webp",
    alt: "Tribus celebrating the holidays together",
    span: "row-span-2",
  },
  {
    src: "/images/team/cards-night.webp",
    alt: "A relaxed evening at the studio, building a tower of cards",
    span: "row-span-2",
  },
  {
    src: "/images/team/craft-werk24.webp",
    alt: "Technical drawings on the table during a client deep-dive",
    span: "row-span-2",
  },
  {
    src: "/images/team/paint-night-detail.webp",
    alt: "Brushes and canvases up close on paint night",
    span: "row-span-2",
  },
];

export function GroupPhotos() {
  return (
    <div className="grid auto-rows-[120px] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-4 sm:gap-4">
      {PHOTOS.map((photo, i) => (
        <Reveal
          key={photo.src}
          delay={(i % 4) * 0.06}
          direction="none"
          className={cn("h-full", photo.span)}
        >
          <figure className="group relative h-full overflow-hidden rounded-[var(--radius-xl2)] border border-ink/10 bg-ink/5 shadow-[var(--shadow-card)]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
