"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ORBIT_APPS,
  ORBIT_RINGS,
  ORBIT_TILES,
} from "@/content/heroOrbit";

/**
 * Bevel-style living hero cluster (desktop only): a phone whose screen
 * cross-fades through real client apps, encircled by tech-stack tiles that
 * orbit on slowly rotating concentric rings (each tile counter-rotates to
 * stay upright). The phone sits above the rings, so the left arc passes
 * behind it — keeping the visible tiles in the open space to its right.
 */
export function HeroOrbit({ reduce }: { reduce: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % ORBIT_APPS.length),
      4800,
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
      {/* teal radial glow, centred on the orbit */}
      <div className="pointer-events-none absolute left-[58%] top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(1,194,187,0.16),transparent_62%)]" />

      {/* faint ring guides matching the orbit radii */}
      <div className="pointer-events-none absolute left-[58%] top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        {ORBIT_RINGS.map((r) => (
          <div
            key={r.radius}
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.05]"
            style={{ width: r.radius * 2, height: r.radius * 2 }}
          />
        ))}
      </div>

      {/* orbit rings — anchored at a zero-size centre point right of the phone */}
      <div className="absolute left-[58%] top-1/2">
        {ORBIT_RINGS.map((ring, ri) => (
          <motion.div
            key={ri}
            className="absolute left-0 top-0"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{
              duration: ring.duration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {ORBIT_TILES.filter((t) => t.ring === ri).map((t) => (
              <div
                key={t.title}
                className="absolute left-0 top-0"
                style={{
                  transform: `rotate(${t.angle}deg) translateY(-${ring.radius}px) rotate(${-t.angle}deg)`,
                }}
              >
                <motion.div
                  animate={reduce ? undefined : { rotate: -360 }}
                  transition={{
                    duration: ring.duration,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    width: t.size,
                    height: t.size,
                    marginLeft: -t.size / 2,
                    marginTop: -t.size / 2,
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-[22%] bg-white shadow-[var(--shadow-card)]">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-[52%] w-[52%]"
                      fill={`#${t.hex}`}
                    >
                      <path d={t.path} />
                    </svg>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* phone, center-left, above the rings; cycling app screens */}
      <div className="absolute left-[4%] top-1/2 z-10 w-[46%] -translate-y-1/2">
        <div className="relative aspect-[9/19.5] w-full rounded-[14%/6.5%] bg-ink p-[3.5%] shadow-2xl ring-1 ring-black/30">
          <div className="relative h-full w-full overflow-hidden rounded-[11%/5.2%] bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={app.slug}
                initial={reduce ? false : { opacity: 0, scale: 1.04, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.99, y: -8 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={`/images/work/${app.slug}/${app.screen}`}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 240px, 0px"
                  className="object-cover object-top"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
            {/* dynamic island */}
            <div className="absolute left-1/2 top-[2.5%] h-[3.5%] w-[28%] -translate-x-1/2 rounded-full bg-ink" />
          </div>
        </div>
      </div>

      {/* caption card synced to the phone screen, above everything */}
      <div className="absolute bottom-[6%] left-[1%] z-20 w-[46%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={app.slug}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur"
          >
            <p className="font-display text-sm font-bold text-ink">{app.name}</p>
            <p className="mt-0.5 text-xs font-medium text-ink-soft">{app.tag}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
