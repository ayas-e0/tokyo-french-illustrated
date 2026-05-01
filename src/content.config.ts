import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Trilingual string — ZH/JA/EN required for every user-facing field. */
const trilingual = z.object({
  zh: z.string(),
  ja: z.string(),
  en: z.string(),
});

/**
 * 图鉴条目 = 一家餐厅。
 * 每条记录 = src/content/entries/{slug}.md + src/content/entries/images/{slug}/ 下的图。
 *
 * 刻意保持极简（anti-digital 原则）：
 *   - 不设打分 / 价位 / 营业时间 / 地址 / 预订链接 / 标签
 *   - 仅保留：店名 · 一句短评 · 到访日期 · 街区（可选）· 封面 · 图集 · 正文
 */
const entries = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/entries',
  }),
  schema: ({ image }) =>
    z.object({
      /** 餐厅名（原名，三语一致；需要转写时三语可不同）。*/
      name: trilingual,

      /** 一句短评（三语必填）。*/
      caption: trilingual,

      /** 到访日期。*/
      date: z.date(),

      /** 街区（如 "Shimokitazawa"、"銀座"）。可选但建议填。*/
      neighborhood: z.string().optional(),

      /** 封面图：列表页缩略图 + 详情页图集的第 Fig. 01。*/
      cover: image().optional(),

      /** 图集（不含封面，封面自动并入第一张）。*/
      gallery: z.array(image()).optional(),

      /** draft: true 不会出现在生产目录。*/
      draft: z.boolean().default(false),
    }),
});

export const collections = { entries };
