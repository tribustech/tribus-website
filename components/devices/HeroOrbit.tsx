"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Float } from "@/components/motion/Float";
import { ORBIT_APPS, ORBIT_TILES } from "@/content/heroOrbit";

/**
 * Bevel-style living hero cluster (desktop only): a phone whose screen
 * cross-fades through real client apps, ringed by levitating tech-stack tiles
 * on faint orbital arcs, with a caption card synced to the current app.
 */
export function HeroOrbit({ reduce }: { reduce: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % ORBIT_APPS.length),
      3000,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const app = ORBIT_APPS[active];

  return (
    <motion.div
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative hidden h-[34rem] lg:block"
    >
      {/* teal radial glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_50%,rgba(1,194,187,0.16),transparent_62%)]" />

      {/* faint concentric arc guides, centered behind the phone */}
      <div className="pointer-events-none absolute left-[26%] top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[24rem] w-[24rem] rounded-full border border-ink/[0.06]" />
        <div className="absolute inset-0 m-auto h-[34rem] w-[34rem] rounded-full border border-ink/[0.04]" />
      </div>

      {/* phone, center-left, cycling app screens (own frame so only the
          screen cross-fades; chrome matches PhoneFrame) */}
      <div className="absolute left-[4%] top-1/2 w-[46%] -translate-y-1/2">
        <div className="relative aspect-[9/19.5] w-full rounded-[14%/6.5%] bg-ink p-[3.5%] shadow-2xl ring-1 ring-black/30">
          <div className="relative h-full w-full overflow-hidden rounded-[11%/5.2%] bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={app.slug}
                initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={`/images/work/${app.slug}/${app.screen}`}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 240px, 0px"
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            {/* dynamic island */}
            <div className="absolute left-1/2 top-[2.5%] h-[3.5%] w-[28%] -translate-x-1/2 rounded-full bg-ink" />
          </div>
        </div>
      </div>

      {/* caption card synced to the phone screen */}
      <div className="absolute bottom-[6%] left-[1%] w-[46%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={app.slug}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur"
          >
            <p className="font-display text-sm font-bold text-ink">{app.name}</p>
            <p className="mt-0.5 text-xs font-medium text-ink-soft">{app.tag}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* levitating tech tiles — outer div positions, Float bobs, tile draws */}
      {ORBIT_TILES.map((t) => (
        <div
          key={t.title}
          className="absolute"
          style={{
            top: `${t.top}%`,
            left: `${t.left}%`,
            width: t.size,
            height: t.size,
          }}
        >
          <Float
            amplitude={t.amplitude}
            duration={t.duration}
            delay={t.delay}
            className="h-full w-full"
          >
            <div className="flex h-full w-full items-center justify-center rounded-[22%] bg-white shadow-[var(--shadow-card)]">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-[52%] w-[52%]"
                fill={`#${t.hex}`}
              >
                <path d={t.path} />
              </svg>
            </div>
          </Float>
        </div>
      ))}
    </motion.div>
  );
}
