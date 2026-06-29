"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="font-display text-7xl font-bold text-coral">Oops</p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
        Something went wrong.
      </h1>
      <p className="mt-3 text-lg text-ink-soft">
        An unexpected error occurred. Try again, or head back home.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-teal-ink"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/40"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
