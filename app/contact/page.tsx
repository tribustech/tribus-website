import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us what you're building. Reach the Tribus team in Bucharest by email, phone, or the form.",
  path: "/contact",
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#contact`,
  name: "Contact Tribus Technologies",
  url: absoluteUrl("/contact"),
  mainEntity: { "@id": `${site.url}/#organization` },
};

const CONTACT_ITEMS = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Location", value: site.location, href: null },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageSchema,
        ]}
      />
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Contact us
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
            Let&apos;s meet the team.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft text-balance">
            Whether it&apos;s a small particular task or a fully-fledged project
            from discovery to production — we&apos;d love to hear about it.
          </p>

          <dl className="mt-10 space-y-6">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft/60">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-medium text-ink">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-teal-ink"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex gap-2">
            {["teal", "indigo", "coral", "amber", "blue", "green"].map((c) => (
              <span
                key={c}
                className="h-2 w-10 rounded-full"
                style={{ background: `var(--color-${c})` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-xl2)] border border-ink/10 bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
