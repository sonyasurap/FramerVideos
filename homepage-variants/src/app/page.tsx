import Link from "next/link";
import { profile, variants } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#eceae4] text-ink">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20 md:px-10">
        <p
          className="mb-3 text-[12px] uppercase tracking-[0.18em] text-mute"
          style={{ fontFamily: "var(--font-plex)" }}
        >
          Homepage exploration
        </p>
        <h1
          className="max-w-[12ch] text-[clamp(2.8rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {profile.name}
        </h1>
        <p
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Five homepage directions. Same story — different type energy, density,
          and composition. Pick a variant to explore.
        </p>

        <ol className="mt-14 grid gap-4 md:grid-cols-2">
          {variants.map((v, i) => (
            <li key={v.id}>
              <Link
                href={v.href}
                className="group flex h-full flex-col justify-between border border-black/10 bg-white/50 px-5 py-5 transition hover:border-black/30 hover:bg-white/80"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className="text-[12px] uppercase tracking-[0.16em] text-mute"
                    style={{ fontFamily: "var(--font-plex)" }}
                  >
                    {String(i + 1).padStart(2, "0")} / {v.title}
                  </span>
                  <span className="text-[13px] text-mute transition group-hover:text-ink">
                    Open →
                  </span>
                </div>
                <p
                  className="mt-8 text-[18px] leading-snug tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {v.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <VariantSwitcher />
    </div>
  );
}
