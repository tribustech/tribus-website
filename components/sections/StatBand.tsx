import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export function StatBand() {
  return (
    <section className="border-y border-ink/8 bg-white/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4">
        {site.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-ink-soft">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
