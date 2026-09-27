import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chrome: "var(--chrome)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        soft: "var(--foreground-soft)",
        muted: "var(--muted)",
        "muted-warm": "var(--muted-warm)",
        accent: "var(--accent)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "link-blue": "var(--link-blue)",
        panel: "var(--panel)",
        "panel-ink": "var(--panel-ink)",
        "panel-soft": "var(--panel-soft)",
        "panel-muted": "var(--panel-muted)",
        "panel-muted-2": "var(--panel-muted-2)",
        "panel-surface": "var(--panel-surface)",
      },
      fontFamily: {
        aktiv: ['"Aktiv Grotesk"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1392px",
        prose: "680px",
      },
      letterSpacing: {
        label: "0.08em",
        nav: "0.02em",
      },
      borderRadius: {
        panel: "16px",
        card: "8px",
        pill: "20.5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
