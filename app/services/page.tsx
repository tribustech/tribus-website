import { Section, SectionHeading } from "@/components/ui/Section";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WorkModelFlow } from "@/components/sections/WorkModelFlow";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceCatalogSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Web and mobile development, databases, cloud infrastructure and UI/UX — the full range of what Tribus builds, and the stack we build it on.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceCatalogSchema(),
        ]}
      />
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24">
        <header className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Services &amp; stack
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
            Everything you need to go from idea to production.
          </h1>
          <p className="mt-5 text-lg text-ink-soft text-balance">
            We cover small, particular tasks or fully-fledged projects from the
            discovery phase to production — with dedicated Scrum teams and a
            stack chosen to fit the problem.
          </p>
        </header>
      </div>

      <Section>
        <ServicesGrid />
      </Section>

      <WorkModelFlow />

      <Section className="py-16">
        <SectionHeading
          align="center"
          kicker="Industries"
          title="Experience across the board."
          description="Our developers bring expertise from Travel & Transportation, Insurance, IoT, Medical and more — always leveraging new and popular technology to deliver the best experience."
        />
      </Section>

      <CTA />
    </>
  );
}
