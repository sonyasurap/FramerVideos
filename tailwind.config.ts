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
        background: "var(--background)",
        foreground: "var(--foreground)",
        soft: "var(--foreground-soft)",
        muted: "var(--muted)",
        "muted-warm": "var(--muted-warm)",
        accent: "var(--accent)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "link-blue": "var(--link-blue)",
      },
      fontFamily: {
        aktiv: ['"Aktiv Grotesk"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
        prose: "680px",
      },
      letterSpacing: {
        label: "0.08em",
      },
    },
  },
  plugins: [],
} satisfies Config;
