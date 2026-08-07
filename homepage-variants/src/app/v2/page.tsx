"use client";

import { profile, projects, skillsSentence } from "@/lib/content";
import { ProjectThumb } from "@/components/ProjectThumb";
import { VariantSwitcher } from "@/components/VariantSwitcher";

/** V2 REEL — fixed left identity column + horizontal scrolling project reel */
export default function VariantTwo() {
  return (
    <div className="h-svh overflow-hidden bg-white text-ink md:flex">
      <aside className="flex w-full shrink-0 flex-col justify-between border-b border-grey-200 px-5 py-6 md:h-svh md:w-[320px] md:border-b-0 md:border-r md:px-7 md:py-8 lg:w-[360px]">
        <div>
          <h1
            className="text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>
          <p
            className="mt-6 text-[13px] leading-relaxed text-grey-700"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            My skills are {skillsSentence()}.
          </p>
        </div>
        <div
          className="mt-8 space-y-4 text-[12px] uppercase tracking-[0.12em] text-grey-500 md:mt-0"
          style={{ fontFamily: "var(--font-plex)" }}
        >
          <p>Currently {profile.current}</p>
          <p>Prev {profile.previous.join(" · ")}</p>
          <p className="text-grey-300">Scroll projects →</p>
        </div>
      </aside>

      <section className="hide-scrollbar flex h-[calc(100svh-220px)] snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-4 md:h-svh md:flex-1 md:px-5 md:py-5">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="h-full w-[78vw] shrink-0 snap-center md:w-[min(62vw,820px)]"
          >
            <ProjectThumb
              src={project.image}
              alt={project.title}
              label={project.title}
              year={project.year}
              showMeta
              className="h-full w-full border border-grey-200"
            />
          </div>
        ))}
      </section>

      <VariantSwitcher />
    </div>
  );
}
