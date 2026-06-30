import { ProjectGrid } from "@/components/ProjectGrid";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, workCollectionSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  projects,
  allIndustries,
  allPlatforms,
  allTech,
} from "@/content/projects";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Explore the web and mobile products Tribus has designed, built and shipped — filter by platform, industry and technology.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
          workCollectionSchema(projects),
        ]}
      />
      <header className="max-w-3xl">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" />
          Our work
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
          Products built with one obsession: the end user.
        </h1>
        <p className="mt-5 text-lg text-ink-soft text-balance">
          From civic-tech apps to B2B platforms and consumer products — filter
          by platform, industry or the technology behind each build.
        </p>
      </header>

      <div className="mt-14">
        <ProjectGrid
          projects={projects}
          platforms={allPlatforms()}
          industries={allIndustries()}
          tech={allTech()}
        />
      </div>
    </div>
  );
}
