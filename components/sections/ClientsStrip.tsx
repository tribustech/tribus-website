import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import {
  clientsRowOne,
  clientsRowTwo,
  clientsKicker,
  type Client,
} from "@/content/clients";

const LOGO_HEIGHT = 32; // rendered px; PNG assets are 96px tall for retina crispness

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
    <Section className="py-16">
      <SectionHeading
        align="center"
        kicker={clientsKicker}
        title="Trusted by ambitious teams."
        description="From global enterprises to mission-driven NGOs — the teams behind these products partnered with Tribus to ship."
      />
      <Reveal direction="none">
        <div className="mt-12 overflow-hidden rounded-3xl bg-[#101218] py-12 ring-1 ring-white/10">
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
    </Section>
  );
}
