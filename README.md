# Tokyo French Illustrated · 東京フレンチ図鑑 · 东京法餐图鉴

A personal illustrated almanac of French and Japanese-French bistros in Tokyo.

No ratings. No recommendations. No hours. No maps. Only the rooms I sat in, the words I wrote, the frames I kept.

Ongoing.

---

## Dev

```bash
npm install
npm run dev
```

## Stack

- Astro 5
- Fontshare: Zodiak (serif), Switzer (sans) · Google Fonts: Noto Sans JP / Noto Serif SC
- Content Collections for typed, trilingual (ZH/JA/EN) entries
- Vercel (Analytics + Speed Insights)

## Structure

```
src/
├── components/Masthead.astro
├── content.config.ts
├── content/entries/
│   ├── {slug}.md              — one restaurant = one markdown file
│   └── images/{slug}/*.jpg    — photos for that entry
├── data/i18n.ts               — ZH/JA/EN UI copy
├── layouts/Base.astro
├── pages/
│   ├── index.astro            — contents + entry list
│   └── [...slug].astro        — per-entry detail page
└── styles/global.css
```

## Contributing

**PRs welcome.** See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for the full guide — the short version: fork, upload 3–6 photos, write a trilingual frontmatter block, open a PR. No terminal required; everything works from the GitHub web UI.
