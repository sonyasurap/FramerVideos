import Link from "next/link";
import { profile, variants } from "@/lib/content";
import { VariantSwitcher } from "@/components/VariantSwitcher";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-10">
        <p
          className="text-[11px] uppercase tracking-[0.16em] text-grey-500"
          style={{ fontFamily: "var(--font-plex)" }}
        >
          Homepage exploration
        </p>
        <h1
          className="mt-4 text-[clamp(2.4rem,6vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {profile.name}
        </h1>
        <p
          className="mt-5 max-w-lg text-[15px] leading-relaxed text-grey-700"
          style={{ fontFamily: "var(--font-dm)" }}
        >
          Five structurally different homes — white / light grey, with case
          study thumbnails as placeholders. Pick one.
        </p>

        <ul className="mt-12 divide-y divide-grey-200 border-y border-grey-200">
          {variants.map((v, i) => (
            <li key={v.id}>
              <Link
                href={v.href}
                className="group flex items-baseline justify-between gap-6 py-5 transition hover:bg-grey-50"
              >
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] text-grey-500"
                    style={{ fontFamily: "var(--font-plex)" }}
                  >
                    {String(i + 1).padStart(2, "0")} / {v.title}
                  </p>
                  <p
                    className="mt-2 text-[17px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {v.blurb}
                  </p>
                </div>
                <span className="shrink-0 text-[13px] text-grey-500 group-hover:text-ink">
                  Open →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <VariantSwitcher />
    </div>
  );
}
