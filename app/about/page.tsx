import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { GroupPhotos } from "@/components/sections/GroupPhotos";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ClientsStrip } from "@/components/sections/ClientsStrip";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, teamSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Tribus is a Bucharest-based team of experienced developers building people-centric software. Your success, is our success.",
  path: "/about",
});

const VALUES = [
  {
    title: "People-centric",
    body: "We strive to augment the end-user's work in the most meaningful way. Real problems, real people — that's the brief.",
  },
  {
    title: "Partners, not vendors",
    body: "We support you through your whole digital transformation journey, from the first idea to production and beyond.",
  },
  {
    title: "Ship to learn",
    body: "Customer feedback is everything. We deliver production-ready solutions fast, then keep improving them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...teamSchema(),
        ]}
      />
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <header className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            About Tribus
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
            Your success, is our success.
          </h1>
          <p className="mt-5 text-lg text-ink-soft text-balance">
            We&apos;re a {site.location}-based team of highly experienced
            developers with expertise across Travel &amp; Transportation,
            Insurance, IoT, Medical and more. We build software to solve real
            issues and improve day-to-day life.
          </p>
        </header>
      </div>

      <Section>
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Life at Tribus
          </p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl text-balance">
            Paint nights, pair-programming, and the occasional sword fight.
          </h2>
        </div>
        <GroupPhotos />
      </Section>

      <Section className="py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="h-full rounded-[var(--radius-xl2)] border border-ink/10 bg-white p-7 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-ink-soft">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-12">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Meet the team
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
            The people behind your success.
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-balance">
            A small, senior team — you work directly with the people who design,
            build, and ship your product.
          </p>
        </div>
        <TeamGrid />
      </Section>

      <ClientsStrip />
      <CTA />
    </>
  );
}
