import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/content/services";
import { accentBg, accentText } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 2) * 0.08}>
          <div className="group relative h-full overflow-hidden rounded-[var(--radius-xl2)] border border-ink/10 bg-white p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                accentBg[service.accent],
              )}
            />
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                {service.title}
              </h3>
              <span
                className={cn(
                  "mt-1 h-3 w-3 shrink-0 rounded-full",
                  accentBg[service.accent],
                )}
              />
            </div>
            <p className="mt-3 text-ink-soft">{service.summary}</p>

            <div className="mt-6 space-y-4">
              {service.stack.map((group) => (
                <div key={group.label}>
                  <p
                    className={cn(
                      "mb-2 text-xs font-semibold uppercase tracking-wider",
                      accentText[service.accent],
                    )}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-ink/[0.04] px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
