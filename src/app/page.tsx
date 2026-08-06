import { ProjectCard } from "@/components/ProjectCard";
import { RotatingPhrase } from "@/components/RotatingPhrase";
import { SocialLinks } from "@/components/SocialLinks";

const projects = [
  {
    href: "/legofiltering",
    title: "A filtering system for part-finding at The LEGO Group",
    frame: "/images/lego-frame.png",
    video: "/videos/framer/UUTBWERgxHoHdFdD8nmynSqJKw.mp4",
  },
  {
    href: "/textontv",
    title: "Prototyping a Short-Form Text App for Television",
    frame: "/images/tv-frame.png",
    video: "/videos/Passive scroll x7 (1).mov",
  },
  {
    href: "/nytcrossword",
    title: "A NYT Crossword: Gamified Storytelling to Bridge Families",
    frame: "/images/nyt-frame.png",
    video: "/videos/Mini.mp4",
  },
];

export default function HomePage() {
  return (
    <div className="pb-28">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center md:px-8">
        <div className="relative mb-8 h-[210px] w-[210px] md:mb-10 md:h-[250px] md:w-[250px]">
          <video
            className="h-full w-full object-contain opacity-95"
            src="/videos/globe.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        </div>

        <p className="mx-auto max-w-[34rem] text-[17px] leading-[1.55] text-foreground md:text-[19px]">
          Sonya is a product designer using prototyping ◎ and storytelling ✦ to{" "}
          <RotatingPhrase />
        </p>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </section>

      <section className="mx-auto max-w-[920px] px-5 md:px-8">
        <p className="mb-10 text-center text-[12px] uppercase tracking-label text-muted-warm md:mb-14 md:text-[13px]">
          Selected work ↓
        </p>
        <div className="flex flex-col gap-16 md:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.href} {...project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
