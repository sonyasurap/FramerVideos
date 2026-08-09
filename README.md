# Sonya Surapaneni — Portfolio

Next.js implementation of the [Portfolio Inspo](https://www.figma.com/design/JCBRwD1qH6U3U0DgN5B2dB/Portfolio-Inspo?node-id=8-483) Figma design.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Aktiv Grotesk (local fonts)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Content |
| --- | --- |
| `/` | Home — hero + 2×2 project grid |
| `/about` | About |
| `/sandbox` | Design explorations |
| `/textontv` | Threads on TV case study |

## Editing

- Tokens & type: `src/app/globals.css`, `tailwind.config.ts`
- Copy & projects: `src/lib/content.ts`
- Nav: `src/components/SiteNav.tsx`
- Project cards: `src/components/ProjectCard.tsx`
- Assets: `public/images`, `public/fonts`
