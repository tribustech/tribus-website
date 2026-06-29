import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="font-display text-7xl font-bold text-teal">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
        That project doesn&apos;t exist.
      </h1>
      <p className="mt-3 text-lg text-ink-soft">
        It may have moved, or the link is incorrect.
      </p>
      <Link
        href="/work"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-teal-ink"
      >
        Browse all work
      </Link>
    </div>
  );
}
