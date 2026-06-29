"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { workModel } from "@/content/workModel";
import { accentHex } from "@/lib/accents";

const EASE = [0.16, 1, 0.3, 1] as const;

/* One line icon per step, drawn in the badge over the accent gradient. */
const stepIcon: Record<number, ReactNode> = {
  1: (
    // pen / design
    <path d="M4 20l4-1L19 8a2.5 2.5 0 0 0-3.5-3.5L4.5 15.5 4 20ZM14 6l4 4" />
  ),
  2: (
    // code brackets / build
    <path d="M8 8l-4 4 4 4m8-8 4 4-4 4m-2-11-4 14" />
  ),
  3: (
    // paper plane / ship to market
    <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-8.5L2 8.5 21 3Z" />
  ),
};

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};
const cardV = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function WorkModelFlow() {
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(gridRef, { once: true, amount: 0.4 });

  return (
    <Section className="relative overflow-hidden bg-ink text-paper" id="how-we-work">
      {/* ambient brand glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-10 h-80 w-80 rounded-full opacity-25 blur-[120px]"
          style={{ backgroundColor: accentHex.teal }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: accentHex.indigo }}
        />
        <div
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: accentHex.amber }}
        />
      </div>

      <div className="relative">
        <SectionHeading
          kicker="How we work"
          title={
            <span className="text-paper">
              Design. Build &amp; Test.{" "}
              <span className="text-teal">Go to market.</span>
            </span>
          }
          description={
            <span className="text-paper/70">
              A tight, feedback-driven loop that gets a production-ready solution
              into your customers&apos; hands as fast as possible.
            </span>
          }
        />

        <motion.div
          ref={gridRef}
          variants={containerV}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-16 grid gap-6 md:grid-cols-3"
        >
          {/* animated gradient connector (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px md:block">
            <motion.div
              className="h-full origin-left"
              style={{
                background: `linear-gradient(90deg, ${accentHex.teal}, ${accentHex.indigo}, ${accentHex.amber})`,
              }}
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            />
          </div>

          {workModel.map((step) => {
            const hex = accentHex[step.accent];
            return (
              <motion.div
                key={step.index}
                variants={cardV}
                className="group relative overflow-hidden rounded-[var(--radius-xl2)] border border-paper/10 bg-paper/[0.04] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-paper/[0.06]"
                style={{ ["--hex" as string]: hex }}
              >
                {/* hover accent border + top glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl2)] opacity-0 ring-1 ring-inset transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 1px ${hex}66`, ["--tw-ring-color" as string]: `${hex}55` }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: hex }}
                />

                {/* ghost number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-bold leading-none text-paper/[0.05]"
                >
                  0{step.index}
                </span>

                {/* badge */}
                <div className="relative">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-ink shadow-lg transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(140deg, ${hex}, ${hex}cc)`,
                      boxShadow: `0 10px 30px -8px ${hex}99`,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7"
                    >
                      {stepIcon[step.index]}
                    </svg>
                  </div>
                </div>

                <h3
                  className="relative mt-6 font-display text-2xl font-bold tracking-tight"
                  style={{ color: hex }}
                >
                  {step.title}
                </h3>
                <p className="relative mt-3 text-paper/70">{step.description}</p>

                {step.chips && step.chips.length > 0 && (
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {step.chips.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full border px-3 py-1 text-xs font-medium text-paper/85"
                        style={{ borderColor: `${hex}40`, backgroundColor: `${hex}14` }}
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
