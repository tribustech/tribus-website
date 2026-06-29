import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-xl2)] bg-ink px-7 py-16 text-center sm:px-16 sm:py-20">
            <div className="bg-mesh pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-paper sm:text-5xl text-balance">
                Have an idea? Let&apos;s make it real.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-paper/70 text-balance">
                Tell us what you&apos;re building. We&apos;ll bring the team,
                the craft and the momentum to ship it.
              </p>
              <div className="mt-9 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
