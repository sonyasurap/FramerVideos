"use client";

import { motion } from "framer-motion";
import { profile, projects, skillsSentence } from "@/lib/content";
import { ProjectThumb } from "@/components/ProjectThumb";
import { VariantSwitcher } from "@/components/VariantSwitcher";

/**
 * V4 INDEX — compact top identity strip, then an irregular mosaic of thumbnails
 * (not a uniform card stack / not a hero+text page)
 */
export default function VariantFour() {
  const [a, b, c, d, e, f, g, h] = projects;

  return (
    <div className="min-h-svh bg-white text-ink">
      <header className="border-b border-grey-200 px-5 py-4 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-baseline gap-x-8 gap-y-2">
          <h1
            className="text-[1.35rem] font-semibold tracking-[-0.03em] md:text-[1.5rem]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            {profile.name}
          </h1>
          <p
            className="max-w-2xl flex-1 text-[12px] leading-relaxed text-grey-700 md:text-[13px]"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            Skills: {skillsSentence()}. Currently {profile.current}. Prev{" "}
            {profile.previous.join(", ")}.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1400px] grid-cols-6 gap-2 px-2 py-2 pb-28 md:gap-3 md:px-3 md:py-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-6 md:col-span-4"
        >
          <ProjectThumb
            src={a.image}
            alt={a.title}
            label={a.title}
            year={a.year}
            showMeta
            className="aspect-[16/10] border border-grey-200 md:aspect-[16/9]"
          />
        </motion.div>
        <div className="col-span-6 grid grid-cols-2 gap-2 md:col-span-2 md:grid-cols-1 md:gap-3">
          <ProjectThumb
            src={b.image}
            alt={b.title}
            label={b.title}
            year={b.year}
            showMeta
            className="aspect-square border border-grey-200 md:aspect-auto md:h-full"
          />
          <ProjectThumb
            src={c.image}
            alt={c.title}
            label={c.title}
            year={c.year}
            showMeta
            className="aspect-square border border-grey-200 md:aspect-auto md:h-full"
          />
        </div>

        <ProjectThumb
          src={d.image}
          alt={d.title}
          label={d.title}
          year={d.year}
          showMeta
          className="col-span-3 aspect-[4/5] border border-grey-200 md:col-span-2"
        />
        <ProjectThumb
          src={e.image}
          alt={e.title}
          label={e.title}
          year={e.year}
          showMeta
          className="col-span-3 aspect-[4/5] border border-grey-200 md:col-span-2"
        />
        <ProjectThumb
          src={f.image}
          alt={f.title}
          label={f.title}
          year={f.year}
          showMeta
          className="col-span-6 aspect-[16/9] border border-grey-200 md:col-span-2 md:aspect-auto md:min-h-full"
        />

        <ProjectThumb
          src={g.image}
          alt={g.title}
          label={g.title}
          year={g.year}
          showMeta
          className="col-span-2 aspect-square border border-grey-200"
        />
        <ProjectThumb
          src={h.image}
          alt={h.title}
          label={h.title}
          year={h.year}
          showMeta
          className="col-span-4 aspect-[16/9] border border-grey-200 md:aspect-[21/9]"
        />
      </main>

      <VariantSwitcher />
    </div>
  );
}
