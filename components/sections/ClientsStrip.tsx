import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { clients, clientsKicker } from "@/content/clients";

const LOGO_HEIGHT = 30; // rendered px; assets are 96px tall for retina crispness

function LogoRow() {
  return (
    <>
      {clients.map((client) => (
        <span
          key={client.name}
          className="mx-7 flex shrink-0 items-center sm:mx-10"
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={client.width}
            height={client.height}
            style={{ height: LOGO_HEIGHT, width: "auto" }}
            className="opacity-55 transition-opacity duration-300 hover:opacity-100"
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
        <div className="mt-12">
          <Marquee durationSeconds={50}>
            <LogoRow />
          </Marquee>
        </div>
      </Reveal>
    </Section>
  );
}
