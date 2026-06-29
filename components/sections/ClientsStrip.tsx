import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { clients, clientsKicker } from "@/content/clients";

export function ClientsStrip() {
  return (
    <Section className="py-16">
      <SectionHeading
        align="center"
        kicker={clientsKicker}
        title="Trusted by teams who ship."
      />
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {clients.map((client, i) => (
          <Reveal key={client} delay={i * 0.05} direction="none">
            <span className="font-display text-xl font-semibold text-ink/40 transition-colors hover:text-ink sm:text-2xl">
              {client}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
