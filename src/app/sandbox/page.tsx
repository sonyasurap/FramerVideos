"use client";

import { motion } from "framer-motion";

const explorations = [
  {
    title: "TV ambient mode",
    year: "2025",
    image: "/images/threads-tv-card.png",
  },
  {
    title: "LEGO filtering studies",
    year: "2025",
    image: "/images/2hE1G1aaIwDkzyf5G78GswCmU.png",
  },
  {
    title: "NYT crossword explorations",
    year: "2024",
    image: "/images/4WKVGi9JUKmGX1tKXWUKnyAZTi0.png",
  },
  {
    title: "Short-form text on TV",
    year: "2024",
    image: "/images/fLn6q13LZzF7CCekn27yyrDn8.jpg",
  },
] as const;

export default function SandboxPage() {
  return (
    <div className="mx-auto max-w-site px-6 pb-24 md:px-12 md:pb-32">
      <section className="flex flex-col items-center pt-[120px] text-center md:pt-[156px]">
        <motion.h1
          className="max-w-[420px] text-balance text-[22px] leading-[1.27] tracking-[-0.01em] text-ink md:text-[24px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Sandbox
        </motion.h1>
        <motion.p
          className="mt-2 text-[22px] leading-[1.27] tracking-[-0.01em] text-muted-soft md:text-[24px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Design explorations & side studies
        </motion.p>
      </section>

      <section className="mt-[88px] grid grid-cols-1 gap-x-3.5 gap-y-[88px] md:mt-[120px] md:grid-cols-2 md:gap-y-[106px]">
        {explorations.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="overflow-hidden rounded-[8px] bg-surface aspect-[641/399]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-4 px-1 text-[clamp(15px,1.4vw,19.7px)] leading-[1.27] tracking-[-0.01em] text-[var(--caption)] md:mt-2.5">
              <h2 className="min-w-0 truncate font-normal">{item.title}</h2>
              <span className="shrink-0">{item.year}</span>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
