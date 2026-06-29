"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { LogoMark } from "@/components/Logo";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="bg-mesh pointer-events-none absolute inset-0 -z-10" />
      <FloatingBlobs disabled={!!reduce} />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-ink-soft backdrop-blur">
              <LogoMark className="h-4 w-4 text-teal" />
              Digital transformation partner · {site.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl text-balance"
          >
            We build software that{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">moves people</span>
              <Underline disabled={!!reduce} />
            </span>{" "}
            forward.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl text-balance"
          >
            {site.tagline} From discovery to production, we ship people-centric
            web and mobile products with dedicated teams — and we sweat every
            detail of the end-user experience.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-teal-ink"
            >
              See our work
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/70 px-7 py-3.5 text-base font-semibold text-ink backdrop-blur transition-colors hover:border-ink/40"
            >
              Start a project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Underline({ disabled }: { disabled: boolean }) {
  return (
    <svg
      className="absolute -bottom-2 left-0 h-3 w-full text-teal"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M2 8 C 50 2, 150 2, 198 8"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        initial={disabled ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: disabled ? 0 : 0.8, delay: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
}

function FloatingBlobs({ disabled }: { disabled: boolean }) {
  const blobs = [
    { color: "var(--color-teal)", size: 280, x: "8%", y: "12%", d: 14 },
    { color: "var(--color-indigo)", size: 220, x: "78%", y: "8%", d: 18 },
    { color: "var(--color-amber)", size: 200, x: "70%", y: "62%", d: 16 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full opacity-[0.18] blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: b.color,
          }}
          animate={
            disabled
              ? undefined
              : { y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }
          }
          transition={{
            duration: b.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
