"use client";

import { motion } from "framer-motion";
import { profile, projects, skillsSentence } from "@/lib/content";
import { ProjectThumb } from "@/components/ProjectThumb";
import { VariantSwitcher } from "@/components/VariantSwitcher";

const feature = projects[1]; // Text on TV as giant hero
const rest = [projects[0], projects[2], projects[3]];

/** V3 FEATURE — one enormous case-study fills most of the viewport; identity is a slim right rail */
export default function VariantThree() {
  return (
    <div className="min-h-svh bg-grey-50 text-ink">
      <div className="grid min-h-svh md:grid-cols-[minmax(0,1fr)_280px]">
        <section className="relative min-h-[70svh] border-b border-grey-200 md:min-h-svh md:border-b-0 md:border-r">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <ProjectThumb
              src={feature.image}
              alt={feature.title}
              className="h-full w-full"
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5 md:p-8">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.14em] text-white/70"
                style={{ fontFamily: "var(--font-plex)" }}
              >
                Selected — {feature.year}
              </p>
              <h2
                className="mt-2 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.04em] text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {feature.title}
              </h2>
            </div>
          </div>
        </section>

        <aside className="flex flex-col justify-between bg-white px-5 py-6 md:px-6 md:py-8">
          <div>
            <h1
              className="text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {profile.name}
            </h1>
            <p
              className="mt-5 text-[13px] leading-relaxed text-grey-700"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              My skills are {skillsSentence()}.
            </p>
            <div
              className="mt-8 space-y-2 border-t border-grey-200 pt-6 text-[11px] uppercase tracking-[0.12em] text-grey-500"
              style={{ fontFamily: "var(--font-plex)" }}
            >
              <p>Currently {profile.current}</p>
              <p>Prev {profile.previous.join(", ")}</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 md:mt-0 md:grid-cols-1">
            {rest.map((p) => (
              <ProjectThumb
                key={p.slug}
                src={p.image}
                alt={p.title}
                className="aspect-[4/3] border border-grey-200"
              />
            ))}
          </div>
        </aside>
      </div>

      <VariantSwitcher />
    </div>
  );
}
