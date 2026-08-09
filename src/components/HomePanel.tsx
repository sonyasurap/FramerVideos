"use client";

import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { ProjectGridCard } from "@/components/ProjectGridCard";

const projects = [
  {
    href: "/textontv",
    title: "Prototyping Threads on TV",
    year: "2026",
    image: "/images/figma/threads-tv-card.png",
  },
  {
    href: "/textontv",
    title: "Prototyping Threads on TV",
    year: "2026",
    image: "/images/figma/threads-tv-card.png",
  },
  {
    href: "/textontv",
    title: "Prototyping Threads on TV",
    year: "2026",
    image: "/images/figma/threads-tv-card.png",
  },
  {
    href: "/textontv",
    title: "Prototyping Threads on TV",
    year: "2026",
    image: "/images/figma/threads-tv-card.png",
  },
];

export function HomePanel() {
  return (
    <div className="min-h-screen bg-chrome p-3 sm:p-4 md:p-6">
      <div className="mx-auto min-h-[calc(100vh-1.5rem)] w-full max-w-site overflow-hidden rounded-panel bg-panel pb-16 sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] md:pb-24">
        <SiteNav variant="panel" />

        <section className="mx-auto flex max-w-[365px] flex-col items-center px-6 pt-[120px] text-center md:pt-[156px]">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[22px] leading-[1.27] tracking-[-0.01em] text-panel-ink md:text-[24px]"
          >
            Sonya is a product designer with a focus in AI products &amp;
            prototyping
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 text-[22px] leading-[1.27] tracking-[-0.01em] text-panel-muted-2 md:text-[24px]"
          >
            Prev. Coinbase, Uber, Lego
          </motion.p>
        </section>

        <section className="mx-auto mt-16 grid max-w-[1336px] grid-cols-1 gap-x-3 gap-y-14 px-6 sm:mt-20 sm:grid-cols-2 md:mt-[90px] md:gap-x-[14px] md:gap-y-[114px] md:px-12">
          {projects.map((project, index) => (
            <ProjectGridCard
              key={`${project.href}-${index}`}
              {...project}
              index={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
