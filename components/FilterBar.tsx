"use client";

import { cn } from "@/lib/utils";

export interface FilterGroup {
  key: string;
  label: string;
  options: string[];
}

export function FilterBar({
  groups,
  active,
  onChange,
  resultCount,
}: {
  groups: FilterGroup[];
  active: Record<string, string | null>;
  onChange: (key: string, value: string | null) => void;
  resultCount: number;
}) {
  return (
    <div className="flex flex-col gap-5">
      {groups.map((group) => (
        <div key={group.key} className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">
            {group.label}
          </span>
          <div
            role="group"
            aria-label={group.label}
            className="flex flex-wrap gap-2"
          >
            <Pill
              selected={active[group.key] == null}
              onClick={() => onChange(group.key, null)}
            >
              All
            </Pill>
            {group.options.map((option) => (
              <Pill
                key={option}
                selected={active[group.key] === option}
                onClick={() =>
                  onChange(
                    group.key,
                    active[group.key] === option ? null : option,
                  )
                }
              >
                {option}
              </Pill>
            ))}
          </div>
        </div>
      ))}
      <p className="text-sm text-ink-soft" aria-live="polite">
        Showing <span className="font-semibold text-ink">{resultCount}</span>{" "}
        {resultCount === 1 ? "project" : "projects"}
      </p>
    </div>
  );
}

function Pill({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
        selected
          ? "border-ink bg-ink text-paper"
          : "border-ink/15 bg-white text-ink-soft hover:border-ink/40 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
