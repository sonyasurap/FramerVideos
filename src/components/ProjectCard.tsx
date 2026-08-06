"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  href: string;
  title: string;
  frame: string;
  video?: string;
  index?: number;
};

export function ProjectCard({
  href,
  title,
  frame,
  video,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={href} className="group block">
        <div className="relative overflow-hidden rounded-[6px] bg-[#121212] aspect-[16/9]">
          {video ? (
            <video
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={frame}
            alt=""
            className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
          />
        </div>
        <p className="mt-4 text-center text-[12px] font-medium uppercase tracking-label text-soft md:mt-5 md:text-[13px]">
          {title}
        </p>
      </Link>
    </motion.div>
  );
}
