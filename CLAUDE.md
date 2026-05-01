# CLAUDE.md — 东京法餐图鉴 · 协作手册

> 给未来进入本项目的 Claude / AI 代理读。保持短、准、实用。

---

## 1 · 项目是什么

**Tokyo French Illustrated · 东京法餐图鉴** —— Ayase 的东京法餐 / 日法融合餐厅记录，**反 digital** 风格的印刷物式网站。姊妹项目是 [my-portfolio](https://github.com/ayas-e0/my-portfolio)（个人作品集），两者共用设计语言，不共用代码。

- 原始 PRD: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/ayase0/raw/东京法餐图鉴网站.md`
- Repo: TBD（准备推 `ayas-e0/tokyo-french-illustrated`）
- Deploy: TBD（准备挂 Vercel，子域名或独立域名待定）
- 版本：`v0.1` 实验

## 2 · 核心约束（硬）

1. **反 digital 感** —— 这是整个项目的灵魂。不是"应用"，是印刷物。**禁止**：打分系统 · 推荐列表 · 嵌入地图 · 营业时间 / 电话 / 价位 · 预订链接 · 社交分享按钮 · tag 云 · 过度悬停交互 · 弹窗提示。有疑问时，问"这是不是让它更像 app 了？" 答案是肯定就不做
2. **仅标注餐厅名** —— 标题只写店名（如 `meso`），不要复合结构（~~`meso · 下北泽`~~）。街区作为独立的 meta 字段呈现，不抢标题
3. **极简 schema** —— 每条条目只有：name · caption · date · neighborhood(可选) · cover · gallery · body。**没有** tags / rating / price / hours / address / map。schema 定义在 `src/content.config.ts`，改动要谨慎
4. **三语必填** —— `name` 和 `caption` 的 ZH/JA/EN 都必须有，缺任何一个 schema 校验会失败
5. **风格沿用 my-portfolio 的黑白杂志风** —— 同样的 Zodiak + Switzer + 暖米纸 + 近黑墨，但更克制（去掉了 my-portfolio 的 SysBar 期号 + 5 章节结构）

## 3 · 技术栈

- Astro 5（静态生成）
- Fontshare: Zodiak + Switzer · Google Fonts: Noto Sans JP + Noto Serif SC
- @vercel/analytics + @vercel/speed-insights（跟 my-portfolio 同步）
- 客户端 i18n：`data-i18n` 静态 key + `data-i18n-{zh|ja|en}` 动态内容。字典在 `src/data/i18n.ts`，运行时切换脚本在 `src/layouts/Base.astro`

## 4 · 文件地图

```
src/
├── components/Masthead.astro  — 顶部 sticky 栏：VOL.xx · 品牌名 · 语言切换
├── content.config.ts          — entries collection schema
├── content/entries/
│   ├── {slug}.md              — 一条记录 = 一家餐厅
│   └── images/{slug}/         — 该餐厅的图片
├── data/i18n.ts               — UI 文案三语字典
├── layouts/Base.astro         — shell + analytics + i18n 运行时 + 滚动淡入
├── pages/
│   ├── index.astro            — Masthead 下方：intro + 目录 + 页脚
│   └── [...slug].astro        — 详情页：back · 店名 · caption · 正文 · 图集 · prev/next
└── styles/global.css          — 所有 tokens + utility
```

## 5 · 加一条新餐厅

1. 新建 `src/content/entries/images/{slug}/`（`{slug}` 为 URL 的 slug，小写+连字符或下划线）
2. 扔原图进去（别压），命名 `cover.jpg` + `01.jpg` + `02.jpg` ...
3. 新建 `src/content/entries/{slug}.md`，frontmatter 参照 `meso.md`。`name` + `caption` 三语必填。正文写精炼短评（不要写成餐厅评测博客，保持克制）
4. `draft: true` 或省略该字段控制发布
5. `npm run dev` 验证
6. commit + push，Vercel 自动部署

**不要**在 `src/content/entries/` 里放 README.md —— glob loader 会把它当条目报错。文档写在 CLAUDE.md 或 README.md。

## 6 · 运行

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
```

## 7 · 协作风格

- 先确认方向，再写代码（my-portfolio 跑通的流程）
- 中文回复
- 简洁更新 > 长解释
- 大改前先描一下方向等 owner 点头

## 8 · 投稿流程

- 面向非技术用户的投稿指南在 `CONTRIBUTING.md`
- PR 模板在 `.github/PULL_REQUEST_TEMPLATE.md`
- **图片命名约定**：投稿者走扁平结构 `{slug}-cover.jpg` / `{slug}-01.jpg`（不用子目录，网页版 GitHub 友好）；早期 meso 条目用的是子目录 `{slug}/cover.jpg`，两种都能 work，schema 不关心。后续条目统一走扁平命名

## 9 · 未来要做但现在没做

- [ ] 独立域名（如 `tfi.cc` / `tokyofrench.cafe` 等），目前用 Vercel 默认子域
- [ ] 按街区 / 按年份的可选索引（**不要**加过滤器，会破坏反 digital 调性。如果真要做，用"分卷 / Volumes"的形式：Vol.01 2026 春，Vol.02 2026 夏……）
- [ ] GitHub Action 自动校验 PR：HEIC 拒绝 / 缺三语字段拒绝 / 短评超长提示
