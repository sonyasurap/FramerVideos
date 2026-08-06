# Sonya Surapaneni — Portfolio

Editable Next.js rebuild of the Framer portfolio at
[second-development-877919.framer.app](https://second-development-877919.framer.app).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Content |
| --- | --- |
| `/` | Home + selected work |
| `/about` | About / media tastes |
| `/sandbox` | Design explorations |
| `/legofiltering` | LEGO BrickLink case study |
| `/textontv` | Short-form text on TV case study |
| `/nytcrossword` | NYT crossword case study |

## Editing tips

- Global styles / colors: `src/app/globals.css`, `tailwind.config.ts`
- Navigation: `src/components/SiteNav.tsx`
- Case study chrome: `src/components/CaseStudyLayout.tsx`
- Media lives in `public/images` and `public/videos`
- Fonts (Aktiv Grotesk) live in `public/fonts`
