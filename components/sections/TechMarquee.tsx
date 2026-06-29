import { Marquee } from "@/components/motion/Marquee";

// Row one: languages, frameworks, frontend, mobile, design & deploy.
const ROW_ONE = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "React Native",
  "Flutter",
  "Ionic",
  "Kotlin",
  "Java",
  "Node.js",
  "NestJS",
  ".NET",
  "Laravel",
  "Figma",
  "Vercel",
];

// Row two: data stores, AI tooling and cloud / infrastructure.
const ROW_TWO = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Supabase",
  "Firebase",
  "pgvector",
  "OpenAI",
  "Claude",
  "LangChain",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="flex items-center whitespace-nowrap rounded-full border border-ink/10 bg-white px-5 py-2.5 font-display text-base font-medium text-ink-soft shadow-[var(--shadow-card)]">
      {label}
    </span>
  );
}

export function TechMarquee() {
  return (
    <section className="overflow-hidden py-16">
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-soft/70">
          The stack we build on
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Marquee durationSeconds={38}>
          {ROW_ONE.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Marquee>
        <Marquee durationSeconds={44} reverse>
          {ROW_TWO.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
