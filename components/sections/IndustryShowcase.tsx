"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { animate, motion, useInView, useReducedMotion } from "motion/react";
import type { Project } from "@/content/types";
import { accentHex, accentSoft } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { getMedia } from "@/content/projectMedia";
import { AutoCarousel } from "@/components/devices/AutoCarousel";
import { Coverflow } from "@/components/devices/Coverflow";
import { DeviceCombo } from "@/components/devices/DeviceCombo";

/* Easing shared with the rest of the site. */
const EASE = [0.16, 1, 0.3, 1] as const;

/* Per-project panel colour, sampled to harmonise with the screenshot on it
   (Secom teal-green, Super Brain blue, VoteMonitor's yellow shots, Recorder
   red, SSM indigo, EYF council-blue, SafeField blue). Falls back to the
   project accent. */
const panelColor: Record<string, string> = {
  "secom-professional": "#1fb5a4",
  clubo: "#3160dc",
  votemonitor: "#f2ac24",
  recorder: "#d8332c",
  "ssm-holding": "#4a4dc2",
  "european-youth-foundation": "#15589f",
  safefield: "#2f7cc6",
};

/* The whole card fades up, then orchestrates its children. */
const cardV = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, staggerChildren: 0.12 },
  },
};
/* Left column cascades its own children. */
const copyV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
const mediaV = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Animated count-up — fires once the number scrolls into view. */
function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const decimals = Number.isInteger(value) ? 0 : 1;
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* Sticky-stack geometry: each card pins this far below the header, stepped so
   the previous card keeps a sliver visible above the one covering it. */
const STACK_BASE_REM = 6; // clears the sticky site header (~80px)
const STACK_STEP_REM = 3.5; // visible sliver of each prior card

function stackStyleFor(index: number): CSSProperties {
  return {
    "--stack-top": `${STACK_BASE_REM + index * STACK_STEP_REM}rem`,
    zIndex: index + 1,
  } as CSSProperties;
}

/** Small labelled meta tag. */
function MetaTag({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft/55">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}

/** One industry, as a full-width card. Copy stays left, media right. */
function IndustryCard({ project, index }: { project: Project; index: number }) {
  const cardMedia = getMedia(project.slug);
  const primary = cardMedia[0];
  const web = cardMedia.find(
    (m) => m.type === "browser" || m.type === "mockup-wide",
  );
  const mobile = cardMedia.find(
    (m) => m.type === "phone" || m.type === "shot" || m.type === "mockup",
  );
  const accent = accentHex[project.accent];
  const panel = panelColor[project.slug] ?? accent;

  return (
    <motion.article
      variants={cardV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      style={stackStyleFor(index)}
      className="industry-stack-card grid items-stretch gap-8 overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 bg-white p-6 shadow-[var(--shadow-card-hover)] sm:p-8 lg:grid-cols-2 lg:gap-10"
    >
      {/* Copy */}
      <motion.div variants={copyV} className="flex flex-col">
        <motion.p
          variants={itemV}
          className="mb-2 font-display text-lg font-medium italic"
          style={{ color: accent }}
        >
          {project.industry}
        </motion.p>
        <motion.h3
          variants={itemV}
          className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance"
        >
          {project.name}
        </motion.h3>
        <motion.p
          variants={itemV}
          className="mt-3 max-w-md text-lg text-ink-soft text-balance"
        >
          {project.description}
        </motion.p>

        {/* Metrics (count-up) */}
        {project.metrics && project.metrics.length > 0 && (
          <motion.dl variants={itemV} className="mt-7 grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-4 ring-1 ring-ink/5"
                style={{ backgroundColor: `${accent}12` }}
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="font-display text-2xl font-bold leading-none text-ink sm:text-3xl">
                    <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                  </span>
                  <span className="mt-1.5 block text-xs font-medium leading-snug text-ink-soft">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <motion.figure
            variants={itemV}
            className="mt-6 border-l-2 pl-4"
            style={{ borderColor: accent }}
          >
            <blockquote className="text-base italic text-ink/90 text-balance">
              “{project.testimonial.quote}”
            </blockquote>
            <figcaption className="mt-2 flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 place-items-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: accent }}
                aria-hidden
              >
                {project.testimonial.author.slice(0, 1)}
              </span>
              <span className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">
                  {project.testimonial.author}
                </span>{" "}
                · {project.testimonial.role}
              </span>
            </figcaption>
          </motion.figure>
        )}

        {/* Clean meta tags + CTA */}
        <motion.div
          variants={itemV}
          className="mt-auto flex flex-wrap items-start gap-x-7 gap-y-4 pt-7"
        >
          <MetaTag label="Platforms" value={project.platforms.join(" · ")} />
          <MetaTag label="Shipped" value={String(project.year)} />
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium",
                  accentSoft[project.accent],
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={itemV}>
          <Link
            href={`/work/${project.slug}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-teal-ink"
          >
            View project
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Media on a screenshot-matched gradient panel */}
      <motion.div
        variants={mediaV}
        className="group relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[var(--radius-xl2)] p-8"
        style={{
          backgroundImage: `linear-gradient(150deg, ${panel} 0%, ${panel}cc 55%, ${panel}99 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-10%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div
          aria-hidden
          className="absolute -bottom-16 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full blur-3xl opacity-50"
          style={{ backgroundColor: panel }}
        />
        {web && mobile ? (
          <div className="relative w-full max-w-[440px] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
            <DeviceCombo web={web} mobile={mobile} />
          </div>
        ) : primary &&
          (primary.type === "browser" || primary.type === "mockup-wide") ? (
          <div className="relative w-full max-w-[460px] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
            <AutoCarousel
              media={cardMedia}
              sizes="(min-width:1024px) 460px, 80vw"
            />
          </div>
        ) : primary ? (
          <Coverflow media={cardMedia} className="h-[440px] w-full max-w-[480px]" />
        ) : null}
      </motion.div>
    </motion.article>
  );
}

/** Closing card — a generic CTA into the full portfolio with a screenshot mosaic. */
function ViewAllCard({ index, tiles }: { index: number; tiles: string[] }) {
  return (
    <motion.article
      variants={cardV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      style={stackStyleFor(index)}
      className="industry-stack-card grid items-stretch gap-8 overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 bg-white p-6 shadow-[var(--shadow-card-hover)] sm:p-8 lg:grid-cols-2 lg:gap-10"
    >
      {/* Copy */}
      <motion.div variants={copyV} className="flex flex-col justify-center">
        <motion.p
          variants={itemV}
          className="mb-2 font-display text-lg font-medium italic text-teal-ink"
        >
          And many more
        </motion.p>
        <motion.h3
          variants={itemV}
          className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance"
        >
          Two dozen products, one craft.
        </motion.h3>
        <motion.p
          variants={itemV}
          className="mt-3 max-w-md text-lg text-ink-soft text-balance"
        >
          From civic-tech apps to B2B platforms, consumer products and online
          stores — explore everything we&apos;ve designed and shipped.
        </motion.p>
        <motion.div variants={itemV}>
          <Link
            href="/work"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-teal-ink"
          >
            View all our work
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Screenshot mosaic */}
      <motion.div
        variants={mediaV}
        className="relative min-h-[300px] overflow-hidden rounded-[var(--radius-xl2)] bg-ink p-4"
      >
        <div className="grid h-full grid-cols-3 gap-2 sm:grid-cols-4">
          {tiles.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src + i}
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              className="h-full w-full rounded-lg object-cover object-top ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.04]"
            />
          ))}
        </div>
        {/* edge fade for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,rgba(0,0,0,0.55),transparent_60%)]" />
      </motion.div>
    </motion.article>
  );
}

export function IndustryShowcase({ projects }: { projects: Project[] }) {
  // Build the mosaic from a spread of real primaries (mobile + web).
  const tiles = [
    "bluvi",
    "safefield",
    "vic",
    "rundezvous",
    "ssm-holding",
    "european-youth-foundation",
    "secom-professional",
    "pescarmania",
    "ptsd-help",
    "covasna-media",
    "recorder",
    "arhiv360",
  ]
    .map((slug) => getMedia(slug)[0]?.src)
    .filter((s): s is string => Boolean(s));

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-3 py-1 text-sm font-semibold text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-teal" />
          Industry wins
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl text-balance">
          Proven success in{" "}
          <span className="italic text-teal-ink">every industry</span>.
        </h2>

        {/* Curated highlights, then a generic "view all" card. On desktop the
            cards pin and slide over each other; on mobile they stack normally. */}
        <div className="mt-10 space-y-6 sm:mt-12">
          {projects.map((project, i) => (
            <IndustryCard key={project.slug} project={project} index={i} />
          ))}
          <ViewAllCard index={projects.length} tiles={tiles} />
        </div>
      </div>
    </section>
  );
}
