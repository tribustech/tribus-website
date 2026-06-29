import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import {
  clientsRowOne,
  clientsRowTwo,
  clientsKicker,
  type Client,
} from "@/content/clients";

const LOGO_HEIGHT = 36; // base rendered px; PNG assets are 96px tall for retina crispness

function LogoRow({ items }: { items: Client[] }) {
  return (
    <>
      {items.map((client) => (
        <span
          key={client.name}
          className="mx-8 flex shrink-0 items-center sm:mx-14"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.logo}
            alt={client.name}
            width={client.width}
            height={client.height}
            loading="lazy"
            draggable={false}
            style={{ height: LOGO_HEIGHT * (client.scale ?? 1), width: "auto" }}
            className="select-none"
          />
        </span>
      ))}
    </>
  );
}

export function ClientsStrip() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto mb-12 max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          kicker={clientsKicker}
          title="Trusted by ambitious teams."
          description="From global enterprises to mission-driven NGOs — the teams behind these products partnered with Tribus to ship."
        />
      </div>

      <Reveal direction="none">
        {/* Full-bleed white band — colored logos pop, hairline borders define the strip */}
        <div className="relative w-full overflow-hidden border-y border-black/[0.06] bg-white py-10">
          {/* Soft white edge fades on both sides */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-44"
            style={{ background: "linear-gradient(to right, #fff, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-44"
            style={{ background: "linear-gradient(to left, #fff, transparent)" }}
          />

          <div className="flex flex-col gap-9">
            <Marquee durationSeconds={46}>
              <LogoRow items={clientsRowOne} />
            </Marquee>
            <Marquee durationSeconds={52} reverse>
              <LogoRow items={clientsRowTwo} />
            </Marquee>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
