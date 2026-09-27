const links = [
  { href: "mailto:sonyasurap@ucla.edu", label: "Email" },
  {
    href: "https://www.linkedin.com/in/sonya-surapaneni-2235421a9/",
    label: "LinkedIn",
  },
  { href: "https://x.com/sonyasurap", label: "Twitter" },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          className="rounded-md bg-[#1f1f1f] px-4 py-2 text-[13px] text-soft transition hover:bg-[#2a2a2a]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
