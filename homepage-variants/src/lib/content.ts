export const profile = {
  name: "Sonya Surapaneni",
  firstName: "Sonya",
  lastName: "Surapaneni",
  current: "Coinbase",
  previous: ["Uber", "LEGO", "Persona", "Framer"] as const,
  skills: [
    "AI",
    "prototyping",
    "storytelling",
    "product sense",
    "B2B and B2C work",
    "multi-medium design",
    "coding experience",
  ] as const,
};

export const projects = [
  {
    slug: "lego",
    title: "LEGO filtering",
    year: "2025",
    image: "/images/2hE1G1aaIwDkzyf5G78GswCmU.png",
    fallback: "/images/lego-frame.png",
  },
  {
    slug: "textontv",
    title: "Text on TV",
    year: "2024",
    image: "/images/fLn6q13LZzF7CCekn27yyrDn8.jpg",
    fallback: "/images/tv-frame.png",
  },
  {
    slug: "nyt",
    title: "NYT Crossword",
    year: "2024",
    image: "/images/4WKVGi9JUKmGX1tKXWUKnyAZTi0.png",
    fallback: "/images/nyt-frame.png",
  },
  {
    slug: "pov",
    title: "POV writing app",
    year: "Sandbox",
    image: "/images/R9P5mf06qf0YME5igvd1foMkN1M.jpeg",
  },
  {
    slug: "hoppi",
    title: "Hoppi cafe",
    year: "Sandbox",
    image: "/images/JGrPnHUZ6C25XPmgFC9MD5iq67I.png",
  },
  {
    slug: "teapot",
    title: "Teapot gardens",
    year: "Sandbox",
    image: "/images/Ezo9yAdbM1u3FBAMJ7duxrIPbLc.png",
  },
  {
    slug: "office",
    title: "LEGO office",
    year: "2025",
    image: "/images/2hE1G1aaIwDkzyf5G78GswCmU.png",
  },
  {
    slug: "research",
    title: "Part research",
    year: "2025",
    image: "/images/FjkBbyTjTXvfNgKzk1TueKpRwug.png",
  },
] as const;

export const variants = [
  {
    id: "v1",
    href: "/v1",
    title: "Feed",
    blurb: "Vertical work stack — name pinned, case studies scroll underneath.",
  },
  {
    id: "v2",
    href: "/v2",
    title: "Reel",
    blurb: "Fixed identity rail + full-bleed horizontal project reel.",
  },
  {
    id: "v3",
    href: "/v3",
    title: "Feature",
    blurb: "One giant case study hero, bio as a narrow side column.",
  },
  {
    id: "v4",
    href: "/v4",
    title: "Index",
    blurb: "Dense mosaic of thumbnails with a compact identity header.",
  },
  {
    id: "v5",
    href: "/v5",
    title: "Strip",
    blurb: "Typographic top bar, then a single cinematic project band.",
  },
] as const;

export function skillsSentence(skills: readonly string[] = profile.skills) {
  if (skills.length <= 1) return skills[0] ?? "";
  const head = skills.slice(0, -1).join(", ");
  return `${head}, and ${skills[skills.length - 1]}`;
}
