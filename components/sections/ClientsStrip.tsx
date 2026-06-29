import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import {
  clientsRowOne,
  clientsRowTwo,
  clientsKicker,
  type Client,
} from "@/content/clients";

const LOGO_HEIGHT = 32; // rendered px; PNG assets are 96px tall for retina crispness
const PANEL = "#101218";

function LogoRow({ items }: { items: Client[] }) {
  return (
    <>
      {items.map((client) => (
        <span
          key={client.name}
          className="mx-8 flex shrink-0 items-center sm:mx-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.logo}
            alt={client.name}
            width={client.width}
            height={client.height}
            loading="lazy"
            style={{ height: LOGO_HEIGHT, width: "auto" }}
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
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
        {/* Full-bleed dark band */}
        <div
          className="relative w-full overflow-hidden py-12"
          style={{ backgroundColor: PANEL }}
        >
          {/* Soft edge fades — logos dissolve into the band at the screen edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-48 lg:w-64"
            style={{
              background: `linear-gradient(to right, ${PANEL}, transparent)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-48 lg:w-64"
            style={{
              background: `linear-gradient(to left, ${PANEL}, transparent)`,
            }}
          />

          <div className="flex flex-col gap-8">
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
