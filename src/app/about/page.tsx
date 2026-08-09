"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const sections = [
  { id: "background", label: "My background" },
  { id: "reading", label: "What I'm reading" },
  { id: "listening", label: "What I'm listening to" },
  { id: "watching", label: "What I'm watching" },
];

const lifePhotos = [
  "/images/ID3ptKp2mBmJn0FNN5uyspYrGi4.png",
  "/images/qbcQACFlXm0dyjHBs0W8Q3jA.png",
  "/images/Chq91YqDjUIezf5BYfpEvcd2pE.jpg",
  "/images/TRfJfBATh4ktMrHmrNloFkTrZSc.png",
];

const interestPhotos = [
  "/images/6DlRphjwBQ4ZlivyxWqs2LorH4.png",
  "/images/6lKdfSxzuIMrG1YvkOdnSWXNk.png",
  "/images/FgYwn67mX0FbXdZ7p51ItUJUVD8.png",
  "/images/IW1KCBiPWIcZinXBufrdDvo1Cg.png",
];

const books = [
  { src: "/images/pJOaEWpb2uEeMoX8gMspjv5xZmw.jpg", title: "The Creative Act" },
  { src: "/images/LFJ2C2kOiD9zBEMvJcKVShoQGnI.jpg", title: "Principles of UX" },
  { src: "/images/Mb3WV5PJMBndPG8FEy9BSxwE.jpg", title: "App Icon Book" },
  { src: "/images/WG8YpaasNln8BJFiPLqPZCFyONQ.jpg", title: "Jony Ive" },
  { src: "/images/AUZTjuns9NOUXRLLuH90Pc9pSw.jpg", title: "Kinfolk Entrepreneur" },
  { src: "/images/dDBxKWhRTdI2pvCKwxzoFyVjIM.jpg", title: "Grid Systems" },
];

const watching = [
  { src: "/images/RIGY8q2VVrn94Imh9ehAFdgUYqQ.jpg", title: "Severance" },
  { src: "/images/nffxphz4sANbpOJTUg7Pkf9TC8.webp", title: "The Office" },
  { src: "/images/rh5V29FtTMvZ7eTfne7PccFJY.png", title: "The Boys" },
];

export default function AboutPage() {
  const [active, setActive] = useState("background");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-28 pt-28 md:pt-32">
      <div className="mx-auto mb-14 max-w-site px-5 text-center md:mb-20 md:px-8">
        <p className="text-[28px] font-medium tracking-[-0.02em] text-accent md:text-[36px]">
          My world, through writing & media ✶
        </p>
      </div>

      <div className="mx-auto grid max-w-site gap-10 px-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-14 md:px-8">
        <aside className="hidden md:block">
          <nav className="sticky top-28 flex flex-col gap-3 text-[14px] text-muted">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={clsx(
                  "transition-colors hover:text-soft",
                  active === section.id && "text-soft",
                )}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-28">
          <section id="background" className="scroll-mt-28">
            <p className="mb-6 text-[12px] uppercase tracking-label text-muted">
              01 my background
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {lifePhotos.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-square rounded-2xl object-cover"
                />
              ))}
            </div>
            <div className="max-w-prose space-y-5 text-[16px] leading-[1.75] text-soft">
              <p>
                I&apos;m a student at UCLA studying cognitive science and
                computing. I&apos;m fascinated by intelligence, both human and
                artificial, and much of my work focuses on designing experiences
                that bridge the two realms.
              </p>
              <p>
                When I&apos;m not designing, you&apos;ll find me recording
                episodes for my uplifting POC voices podcast, concert hopping,
                hunting for cozy new cafes with friends, and tackling massive
                puzzles (just wrapped up a 1000-piece one). And as always,
                I&apos;m endlessly obsessed with the media space. Scroll down to
                see my favorites of the month!
              </p>
              <p>
                I fall down rabbit holes easily, and I&apos;ve always been drawn
                to organizations with that same depth of passion — where what we
                create isn&apos;t just functional, it grows into something
                cultural. For communities like these, ideas need to be
                experienced to be truly understood, which is why I focus on
                prototyping early and often.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {interestPhotos.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-square rounded-2xl object-cover"
                />
              ))}
            </div>
          </section>

          <section id="reading" className="scroll-mt-28">
            <p className="mb-6 text-[12px] uppercase tracking-label text-muted">
              02 what i&apos;m reading
            </p>
            <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {books.map((book) => (
                <div key={book.src} className="w-[140px] shrink-0 md:w-[160px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.src}
                    alt={book.title}
                    className="aspect-[2/3] w-full rounded-md object-cover shadow-lg shadow-black/40"
                  />
                  <p className="mt-3 text-[13px] text-muted">{book.title}</p>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2 text-[15px] text-soft">
              <li>1984</li>
              <li>The Inheritance of Loss</li>
              <li>The Seven Husbands of Evelyn Hugo</li>
              <li>The Book Thief</li>
              <li>Pride and Prejudice</li>
              <li>Things Fall Apart</li>
            </ul>
          </section>

          <section id="listening" className="scroll-mt-28">
            <p className="mb-6 text-[12px] uppercase tracking-label text-muted">
              03 what i&apos;m listening to
            </p>
            <div className="flex max-w-md items-center gap-5 rounded-2xl bg-surface p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/NQPhihM1R2aMeK6u99BFv9WXTI.jpg"
                alt="Album art"
                className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
              />
              <div>
                <p className="text-[15px] text-soft">Lorde</p>
                <p className="mt-1 text-[18px] font-medium">Sober II (Melodrama)</p>
                <p className="mt-3 text-[13px] text-muted">1:10 / 2:58</p>
                <div className="mt-2 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[37%] bg-accent" />
                </div>
              </div>
            </div>
          </section>

          <section id="watching" className="scroll-mt-28">
            <p className="mb-6 text-[12px] uppercase tracking-label text-muted">
              04 what i&apos;m watching
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {watching.map((item, i) => (
                <div key={item.src} className="overflow-hidden rounded-xl bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="aspect-video w-full object-cover"
                  />
                  <p className="px-3 py-3 text-[13px] text-soft">
                    <span className="mr-2 text-muted">
                      0{watching.length - i}
                    </span>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
