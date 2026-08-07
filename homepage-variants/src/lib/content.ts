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

export const variants = [
  {
    id: "v1",
    href: "/v1",
    title: "Statement",
    blurb: "Oversized type, one continuous skill sentence, quiet company trail.",
  },
  {
    id: "v2",
    href: "/v2",
    title: "Specimen",
    blurb: "Design-spec energy — numbered skills, status block, modular rhythm.",
  },
  {
    id: "v3",
    href: "/v3",
    title: "Split",
    blurb: "Editorial split: skills on the left, path on the right.",
  },
  {
    id: "v4",
    href: "/v4",
    title: "Chapters",
    blurb: "Three thematic fields for how you work — still name-first.",
  },
  {
    id: "v5",
    href: "/v5",
    title: "Quiet",
    blurb: "Maximum air. Name, one line, a soft current/prev whisper.",
  },
] as const;

export function skillsSentence(skills: readonly string[] = profile.skills) {
  if (skills.length <= 1) return skills[0] ?? "";
  const head = skills.slice(0, -1).join(", ");
  return `${head}, and ${skills[skills.length - 1]}`;
}
