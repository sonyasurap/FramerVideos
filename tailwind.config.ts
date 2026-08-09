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
        ink: "var(--ink)",
        muted: "var(--muted)",
        "muted-soft": "var(--muted-soft)",
        surface: "var(--surface)",
        border: "var(--border)",
      },
      fontFamily: {
        aktiv: ['"Aktiv Grotesk"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1392px",
      },
    },
  },
  plugins: [],
} satisfies Config;
