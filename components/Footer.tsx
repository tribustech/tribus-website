import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-paper">
      {/* Accent top edge */}
      <div className="flex h-1.5 w-full">
        <span className="flex-1 bg-teal" />
        <span className="flex-1 bg-indigo" />
        <span className="flex-1 bg-coral" />
        <span className="flex-1 bg-amber" />
        <span className="flex-1 bg-blue" />
        <span className="flex-1 bg-green" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-paper" />
              <span className="font-display text-xl font-bold tracking-tight">
                Tribus
              </span>
            </div>
            <p className="mt-4 max-w-sm text-balance text-paper/70">
              {site.tagline} We build people-centric software and partner with
              you through your digital transformation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/80 transition-colors hover:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-paper/80">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-teal"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-teal"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-paper/60">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 text-sm text-paper/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-display italic text-paper/70">{site.altTagline}</p>
        </div>
      </div>
    </footer>
  );
}
