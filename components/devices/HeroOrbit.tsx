"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ORBIT_APPS } from "@/content/heroOrbit";

/**
 * Hero product visual (desktop only): a floating phone whose screen cross-fades
 * through real client apps, with a caption card naming the current one. The
 * cross-fade layers the incoming screen over the still-opaque previous one
 * (monotonic z-index), so the white phone background never flashes between.
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
      {/* teal radial glow behind the phone */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(1,194,187,0.16),transparent_62%)]" />

      {/* phone, centred, cycling app screens with a clean crossfade */}
      <div className="absolute left-1/2 top-1/2 w-[54%] max-w-[290px] -translate-x-1/2 -translate-y-1/2">
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
                    sizes="(min-width:1024px) 290px, 0px"
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

        {/* caption card synced to the phone screen */}
        <div className="absolute -bottom-5 left-1/2 z-20 -translate-x-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={app.slug}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="whitespace-nowrap rounded-2xl border border-ink/10 bg-white/90 px-4 py-3 text-center shadow-[var(--shadow-card)] backdrop-blur"
            >
              <p className="font-display text-sm font-bold text-ink">{app.name}</p>
              <p className="mt-0.5 text-xs font-medium text-ink-soft">{app.tag}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
