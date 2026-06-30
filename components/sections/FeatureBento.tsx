import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Float } from "@/components/motion/Float";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { PhoneFrame } from "@/components/devices/PhoneFrame";
import { cn } from "@/lib/utils";

const LAVENDER = "bg-gradient-to-b from-[#f1f1fc] to-[#e6e7f6]";

// Headline track-record figures (company-wide totals, not just the cases in
// content/projects.ts). Render as real numbers — not decorative bars.
const PROOF = [
  { value: 100, suffix: "+", label: "Successful projects" },
  { value: 16, suffix: "", label: "Industries served" },
  { value: 10, suffix: "+", label: "Countries reached" },
  { value: 20, suffix: "+", label: "Technologies" },
] as const;

// Brand logos shown on the stack card. SVGs self-hosted under public/images/tech
// (sourced from devicon — simple-icons lacks AWS/Azure for trademark reasons).
const STACK = [
  { name: "React", src: "/images/tech/react.svg" },
  { name: "Next.js", src: "/images/tech/nextjs.svg" },
  { name: ".NET", src: "/images/tech/dotnetcore.svg" },
  { name: "NestJS", src: "/images/tech/nestjs.svg" },
  { name: "AWS", src: "/images/tech/aws.svg" },
  { name: "Azure", src: "/images/tech/azure.svg" },
  { name: "Node.js", src: "/images/tech/nodejs.svg" },
  { name: "TypeScript", src: "/images/tech/typescript.svg" },
] as const;

type TrioCard = {
  slug: string;
  title: string;
  body: string;
  img: string;
  /** Second screen — cross-fades in on hover. */
  imgHover: string;
  glow: string;
};

// Clean in-app screens in consistent phone frames (bevel-style).
const TRIO: TrioCard[] = [
  {
    slug: "clubo",
    title: "Super Brain",
    body: "RSVP to curated meetings and events, unlock exclusive partner benefits, and connect with fellow members.",
    img: "/images/work/clubo/screen-home.webp",
    imgHover: "/images/work/clubo/screen-meeting.webp",
    glow: "rgba(49,96,220,0.34)",
  },
  {
    slug: "votemonitor",
    title: "VoteMonitor",
    body: "Observe elections in real time and flag irregularities the moment they happen.",
    img: "/images/work/votemonitor/01.webp",
    imgHover: "/images/work/votemonitor/03.webp",
    glow: "rgba(219,84,97,0.34)",
  },
  {
    slug: "ssm-holding",
    title: "SSM Holding",
    body: "Schedule tasks and events, manage projects and track your team — all in one place.",
    img: "/images/work/ssm-holding/screen-01.webp",
    imgHover: "/images/work/ssm-holding/screen-02.webp",
    glow: "rgba(118,120,237,0.36)",
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

              <div className="relative mt-5 flex-1">
                <div className="absolute left-1/2 top-2 w-[64%] max-w-[228px] -translate-x-1/2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-3 group-hover:scale-[1.04]">
                  <div className="relative">
                    <PhoneFrame
                      src={card.img}
                      alt={card.title}
                      sizes="260px"
                      className="transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <PhoneFrame
                      src={card.imgHover}
                      alt={`${card.title} — alternate screen`}
                      sizes="260px"
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
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
            {/* Card A — proof in real numbers */}
            <Float
              amplitude={7}
              duration={8}
              className="absolute left-0 top-2 z-10 w-[66%] max-w-[320px]"
            >
              <div className="rounded-2xl bg-white p-5 shadow-[0_20px_45px_-15px_rgba(40,40,80,0.3)] ring-1 ring-ink/5">
                <p className="mb-4 text-sm font-semibold text-ink">Track record</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {PROOF.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-paper px-3 py-2.5 ring-1 ring-ink/5"
                    >
                      <div className="font-display text-2xl font-bold leading-none tracking-tight text-ink">
                        <AnimatedCounter value={m.value} suffix={m.suffix} />
                      </div>
                      <p className="mt-1 text-xs font-medium leading-tight text-ink-soft">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
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
                <div className="grid grid-cols-4 gap-2">
                  {STACK.map((t) => (
                    <div
                      key={t.name}
                      title={t.name}
                      className="flex h-11 items-center justify-center rounded-xl bg-paper ring-1 ring-ink/5"
                    >
                      <Image
                        src={t.src}
                        alt={t.name}
                        width={28}
                        height={28}
                        unoptimized
                        className="h-6 w-auto max-w-[72%] object-contain"
                      />
                    </div>
                  ))}
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