import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Float } from "@/components/motion/Float";
import { ProjectMedia } from "@/components/devices/ProjectMedia";
import { getProject } from "@/content/projects";
import { getPrimaryMedia } from "@/content/projectMedia";
import type { Accent, Media } from "@/content/types";
import { accentSoft, accentText } from "@/lib/accents";
import { cn } from "@/lib/utils";

const TINT: Record<Accent, string> = {
  teal: "bg-teal/8",
  indigo: "bg-indigo/8",
  coral: "bg-coral/8",
  amber: "bg-amber/12",
  blue: "bg-blue/8",
  green: "bg-green/12",
};

// Three featured mobile apps + one wide web product (bevel "Start the day…").
const TRIO = ["bluvi", "clubo", "silent-auction"];
const WIDE = "arhiv360";

export function FeatureBento() {
  const trio = TRIO.map((s) => getProject(s)).filter(Boolean);
  const wide = getProject(WIDE);
  const wideMedia = getPrimaryMedia(WIDE);

  return (
    <Section>
      <SectionHeading
        align="center"
        kicker="What we build"
        title="Products people reach for every day."
        description="From a brief to something real — we sweat the details that make software feel effortless."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {trio.map((p, i) => {
          if (!p) return null;
          const media = getPrimaryMedia(p.slug);
          return (
            <Reveal key={p.slug} delay={i * 0.08}>
              <FeatureCard
                accent={p.accent}
                title={p.name}
                body={p.tagline}
                media={media}
              />
            </Reveal>
          );
        })}
      </div>

      {/* Wide bento — web product */}
      {wide && wideMedia && (
        <Reveal delay={0.1}>
          <div
            className={cn(
              "mt-6 grid items-center gap-8 overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 p-7 sm:p-10 lg:grid-cols-2",
              TINT[wide.accent],
            )}
          >
            <div>
              <p
                className={cn(
                  "mb-3 text-sm font-semibold uppercase tracking-wider",
                  accentText[wide.accent],
                )}
              >
                {wide.industry}
              </p>
              <h3 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
                {wide.name}
              </h3>
              <p className="mt-3 max-w-md text-lg text-ink-soft text-balance">
                {wide.tagline} Built for clarity at scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {wide.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-soft shadow-sm ring-1 ring-ink/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Float amplitude={8} duration={7}>
              <ProjectMedia media={wideMedia} sizes="(min-width:1024px) 560px, 90vw" />
            </Float>
          </div>
        </Reveal>
      )}
    </Section>
  );
}

function FeatureCard({
  accent,
  title,
  body,
  media,
}: {
  accent: Accent;
  title: string;
  body: string;
  media?: Media;
}) {
  const isShot = media?.type === "shot";
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-ink/8 p-7",
        TINT[accent],
      )}
    >
      <span
        className={cn(
          "w-fit rounded-full px-2.5 py-1 text-xs font-medium",
          accentSoft[accent],
        )}
      >
        Mobile
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 text-ink-soft">{body}</p>

      <div className="relative mt-auto h-64 overflow-hidden pt-6">
        {media && (
          <div
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2",
              isShot ? "w-[172px]" : "w-[160px]",
            )}
          >
            <Float amplitude={7} duration={6}>
              <ProjectMedia media={media} sizes="200px" />
            </Float>
          </div>
        )}
      </div>
    </div>
  );
}
