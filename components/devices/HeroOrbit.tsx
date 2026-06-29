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
 *
 * The screen cross-fade layers the incoming screen over the still-opaque
 * previous one (delayed exit + monotonic z-index), so the white phone
 * background never flashes between screens.
 */
export function HeroOrbit({ reduce }: { reduce: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setStep((s) => s + 1), 4800);
    return () => clearInterval(id);
  }, [reduce]);

  const app = ORBIT_APPS[step % ORBIT_APPS.length];

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
            {/* isolate scopes the per-screen z-index so the island always wins */}
            <div className="absolute inset-0 isolate">
              <AnimatePresence initial={false}>
                <motion.div
                  key={step}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                  // Stay fully opaque underneath while the next screen fades in
                  // on top, then drop instantly once it's already covered — so
                  // the white phone background never shows between screens.
                  exit={{ opacity: 0, transition: { duration: 0.01, delay: 0.85 } }}
                  style={{ zIndex: step }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/images/work/${app.slug}/${app.screen}`}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 240px, 0px"
                    className="object-cover object-top"
                    priority={step === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* dynamic island */}
            <div className="absolute left-1/2 top-[2.5%] h-[3.5%] w-[28%] -translate-x-1/2 rounded-full bg-ink" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
