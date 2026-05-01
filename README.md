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

The contribution guide + PR template will be added in `v0.2`, once the entry format has settled. For now, entries are curated by the repo owner.
