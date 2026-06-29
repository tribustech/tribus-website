import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  className,
  align = "left",
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink-soft text-balance">{description}</p>
      )}
    </div>
  );
}
