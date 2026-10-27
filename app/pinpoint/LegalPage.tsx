import Link from "next/link";

/** Shared frame for the Pinpoint Arcade pages: eyebrow, title, and readable prose. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
        <Link href="/pinpoint">Pinpoint Arcade</Link>
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl text-balance">
        {title}
      </h1>
      {updated ? (
        <p className="mt-3 text-sm text-ink-soft">Last updated {updated}</p>
      ) : null}
      <div className="mt-10 space-y-4 text-lg leading-relaxed text-ink-soft [&_a]:text-teal-ink [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-2 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </div>
  );
}
