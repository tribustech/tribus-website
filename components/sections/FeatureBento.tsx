import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Float } from "@/components/motion/Float";
import { cn } from "@/lib/utils";

const LAVENDER = "bg-gradient-to-b from-[#f1f1fc] to-[#e6e7f6]";

type TrioCard = {
  slug: string;
  title: string;
  body: string;
  img: string;
  w: number;
  h: number;
  kind: "shot" | "mockup";
  glow: string;
};

const TRIO: TrioCard[] = [
  {
    slug: "bluvi",
    title: "Bluvi",
    body: "Discover fishing spots, join competitions with live rankings, and follow the angler community.",
    img: "/images/work/bluvi/shot-01.webp",
    w: 720,
    h: 1280,
    kind: "shot",
    glow: "rgba(118,120,237,0.36)",
  },
  {
    slug: "votemonitor",
    title: "VoteMonitor",
    body: "Observe elections in real time and flag irregularities the moment they happen.",
    img: "/images/work/votemonitor/shot-01.webp",
    w: 720,
    h: 1440,
    kind: "shot",
    glow: "rgba(246,174,45,0.4)",
  },
  {
    slug: "secom-professional",
    title: "Secom Professional",
    body: "A B2B ordering portal that makes restocking effortless for health professionals.",
    img: "/images/work/secom-professional/bevel.webp",
    w: 625,
    h: 1300,
    kind: "mockup",
    glow: "rgba(143,201,58,0.36)",
  },
];

export function FeatureBento() {
  return (
    <Section>
      <SectionHeading
        align="center"
        kicker="What we build"
        title="Products people reach for every day."
        description="From a brief to something real — we sweat the details that make software feel effortless."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TRIO.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <Link
              href={`/work/${card.slug}`}
              className={cn(
                "group relative flex h-[30rem] flex-col overflow-hidden rounded-[28px] shadow-[0_1px_2px_rgba(40,40,80,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-22px_rgba(40,40,80,0.35)] sm:h-[34rem]",
                LAVENDER,
              )}
            >
              {/* colored bottom glow (brightens on hover) */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(85% 65% at 50% 108%, ${card.glow}, transparent 70%)`,
                }}
              />

              <div className="relative px-8 pt-8">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-[26ch] leading-relaxed text-ink-soft">
                  {card.body}
                </p>
              </div>

              <div className="relative mt-4 flex-1">
                <div
                  className={cn(
                    "absolute left-1/2 top-2 -translate-x-1/2 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-3 group-hover:scale-[1.04]",
                    card.kind === "shot"
                      ? "w-[72%] max-w-[250px]"
                      : "w-[70%] max-w-[265px]",
                  )}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={card.w}
                    height={card.h}
                    sizes="300px"
                    className={cn(
                      "h-auto w-full",
                      card.kind === "shot"
                        ? "rounded-t-[20px] shadow-[0_22px_45px_-12px_rgba(40,40,80,0.4)] ring-1 ring-black/5"
                        : "drop-shadow-[0_25px_45px_rgba(40,40,80,0.25)]",
                    )}
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Wide collage bento */}
      <Reveal delay={0.1}>
        <div
          className={cn(
            "mt-6 grid items-center gap-10 overflow-hidden rounded-[28px] p-8 sm:p-12 lg:grid-cols-2",
            LAVENDER,
          )}
        >
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-[2.6rem] text-balance">
              Dashboards that
              <br />
              tame the chaos.
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft text-balance">
              We turn tangled operations into clear, usable software — the kind
              a whole team actually adopts.
            </p>
          </div>

          <div className="relative h-[22rem] sm:h-[24rem]">
            {/* Card A — what we ship */}
            <Float
              amplitude={7}
              duration={8}
              className="absolute left-0 top-2 z-10 w-[66%] max-w-[320px]"
            >
              <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_-15px_rgba(40,40,80,0.3)] ring-1 ring-ink/5">
                <p className="mb-4 text-sm font-semibold text-ink">What we ship</p>
                <ShipRow color="bg-teal" label="Web apps" w="w-[90%]" />
                <ShipRow color="bg-indigo" label="Mobile apps" w="w-[80%]" />
                <ShipRow color="bg-amber" label="Cloud & infra" w="w-[65%]" />
                <ShipRow color="bg-coral" label="UI / UX" w="w-[72%]" last />
              </div>
            </Float>

            {/* Card B — the stack */}
            <Float
              amplitude={6}
              duration={9}
              delay={0.6}
              className="absolute bottom-2 right-0 z-20 w-[60%] max-w-[290px]"
            >
              <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_-15px_rgba(40,40,80,0.3)] ring-1 ring-ink/5">
                <p className="mb-3 text-sm font-semibold text-ink">The stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "React Native", "NestJS", "AWS", "Supabase"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink-soft ring-1 ring-ink/5"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green/10 px-3 py-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green text-[11px] text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-ink">
                    Shipped to production
                  </span>
                </div>
              </div>
            </Float>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ShipRow({
  color,
  label,
  w,
  last = false,
}: {
  color: string;
  label: string;
  w: string;
  last?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", !last && "mb-3")}>
      <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", color)} />
      <span className="w-28 shrink-0 text-sm text-ink-soft">{label}</span>
      <span className="h-2 flex-1 rounded-full bg-paper-deep">
        <span className={cn("block h-full rounded-full", color, w)} />
      </span>
    </div>
  );
}
