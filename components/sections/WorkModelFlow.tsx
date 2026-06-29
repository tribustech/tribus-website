import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { workModel } from "@/content/workModel";
import { accentBg, accentText } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function WorkModelFlow() {
  return (
    <Section className="bg-ink text-paper" id="how-we-work">
      <SectionHeading
        kicker="How we work"
        title={<span className="text-paper">Design. Build &amp; Test. Go to market.</span>}
        description={
          <span className="text-paper/70">
            A tight, feedback-driven loop that gets a production-ready solution
            into your customers&apos; hands as fast as possible.
          </span>
        }
      />

      <div className="relative mt-14 grid gap-6 md:grid-cols-3">
        {/* connecting line */}
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-paper/15 md:block" />
        {workModel.map((step, i) => (
          <Reveal key={step.index} delay={i * 0.12}>
            <div className="relative rounded-[var(--radius-xl2)] border border-paper/10 bg-paper/[0.04] p-7">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl font-display text-2xl font-bold text-ink",
                  accentBg[step.accent],
                )}
              >
                0{step.index}
              </div>
              <h3
                className={cn(
                  "mt-6 font-display text-2xl font-bold tracking-tight",
                  accentText[step.accent],
                )}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-paper/70">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
