# 投稿指南 / Contributing Guide

> 欢迎投稿一家你觉得值得被记录的东京法餐厅。本站**不设评分**、**不做推荐**，只收录"你去过、写下、拍过"的餐厅。保持克制，就是全部。

English summary at the bottom.

---

## 你需要准备的东西

1. **3–6 张照片**
   - JPG 或 PNG（**请不要上传 HEIC**；Mac 用户可右键 → "快速操作" → "转换图像" → JPEG；Windows / 手机用户网页搜 "HEIC to JPG"）
   - 原图即可，不用压缩，网站会自动生成多分辨率版本

2. **三语店名**（一般原名即可，三语写一样的店名）

3. **三语短评**：一句话，各 20 字以内

4. **到访日期**：YYYY-MM-DD

5. **街区**：如 `Shimokitazawa · 下北沢`（建议中英对照）

6. **一段短文**：精炼 1–3 句你对这家的感受（中文 150 字以内）

---

## 五步投稿流程（全程在 GitHub 网页，0 终端操作）

### ① Fork 这个仓库
访问 https://github.com/ayas-e0/tokyo-french-illustrated ，点**右上角 Fork**，复制到你自己账号下。

### ② 准备图片文件名
在你电脑上把照片重命名为这种格式（注意 **`slug` 是你的餐厅短名**，小写+连字符，比如 `nakameguro-bistro-x` / `daikanyama-frenchie`）：

```
{slug}-cover.jpg        ← 封面（列表页缩略图 + 详情页第 Fig.01）
{slug}-01.jpg           ← 其他图
{slug}-02.jpg
{slug}-03.jpg
```

### ③ 上传图片
在你 fork 的仓库里：
1. 进入目录 `src/content/entries/images/`
2. 点 **Add file → Upload files**
3. 拖入上一步重命名过的 4 张图
4. 底部 commit message 写 `add images: {slug}`，点 **Commit changes**

### ④ 创建条目的 markdown 文件
1. 进入目录 `src/content/entries/`
2. 点 **Add file → Create new file**
3. 文件名写：`{slug}.md`（和图片名里的 slug 一致）
4. 把下面模板**整段复制**进去，替换 `{...}` 的内容：

```markdown
---
name:
  zh: "{餐厅名}"
  ja: "{店名}"
  en: "{Restaurant Name}"

caption:
  zh: "{一句中文短评}"
  ja: "{一句日文短评}"
  en: "{One English line}"

date: {YYYY-MM-DD}

neighborhood: "{英文街区 · 日文街区}"

cover: ./images/{slug}-cover.jpg

gallery:
  - ./images/{slug}-01.jpg
  - ./images/{slug}-02.jpg
  - ./images/{slug}-03.jpg
---

{一段精炼的短文，1–3 句话。}
```

5. 底部 commit message 写 `add entry: {slug}`，点 **Commit changes**

### ⑤ 开 PR（Pull Request）
1. 回到你的 fork 主页，会看到顶部提示 **"This branch is X commits ahead of ayas-e0:main"**
2. 点 **Contribute → Open pull request**
3. 标题写 `New entry: {餐厅名}`，正文按 PR 模板填一下
4. 点 **Create pull request**

提交后我（或 repo owner）会审阅、合并，Vercel 几分钟内自动部署上线。

---

## 投稿规则（硬）

**精神**：这是印刷物，不是应用。凡是感觉像"评测 app"的东西都不要：

- ❌ **不要打分** 不要写"9/10"、"五星推荐"、"必去"
- ❌ **不要推荐** 不要写"特别推荐给……"、"千万别错过……"
- ❌ **不要罗列菜单** 一两道签名菜可以提，不要写菜单 PDF
- ❌ **不要价位信息** 不要写人均、不要写套餐价格
- ❌ **不要营业时间 / 地址 / 电话 / 预订链接**
- ❌ **不要 emoji**
- ✅ 保持克制，写你真实的感受。精炼。

**格式**：

- 短评最长 20 字，body 最长 150 字（中文）
- 三语 title + caption 必填，英日有短板用 DeepL 过一下即可
- 照片 3–6 张，包含 cover
- slug 全小写、连字符，世界范围唯一（建议 `{街区}-{店名}` 格式）

**品控**：

- 你至少**真的去过一次**
- 不接受未公开的探店 / 公关活动 / 邀请制餐厅（本站是公共档案，不是渠道）

---

## 常见问题

**Q: 我的照片是 HEIC 格式怎么办？**
- Mac：右键图片 → 快速操作 → 转换图像 → JPEG
- iPhone：设置 → 相机 → 格式 → 改为"兼容性最佳"（以后拍的都是 JPG）
- Windows：下载 [imazing-heic-converter.exe](https://imazing.com/heic) 或用微软商店的 "HEIF Image Extensions"

**Q: 我不会英文 / 日文怎么办？**
- 先用 DeepL 过一遍（deepl.com）
- PR 里注明"三语求校对"，我合并前会帮忙润色

**Q: slug 是什么？**
- URL 里那个短名。比如 meso 这家店的 URL 是 `ayase0.com/meso`，meso 就是 slug
- 建议格式：小写 + 连字符；如果店名容易重，加街区前缀：`shimokita-meso`

**Q: 我可以删除 / 修改我之前提交过的条目吗？**
- 可以，再开一个 PR 改你那条的 md 文件就行

**Q: 能不能投稿法国之外的菜系？**
- 当前版本只收录**东京的法国菜 / 日法融合**。其他菜系以后可能另开姊妹站，暂不在本站范围

---

## English Summary

This is an anti-digital illustrated almanac of French bistros in Tokyo. No ratings, no recommendations, no hours, no prices. Just the rooms, the words, the frames.

**To contribute:**
1. **Fork** this repo on GitHub
2. **Upload 3–6 photos** (JPG/PNG, not HEIC) to `src/content/entries/images/`, named `{slug}-cover.jpg`, `{slug}-01.jpg`, etc.
3. **Create a markdown file** at `src/content/entries/{slug}.md` following the template in this doc
4. **Fill in ZH, JA, EN** for name and caption (trilingual is required)
5. **Open a PR** — owner reviews and merges

Rules: no ratings, no "must-try", no menus, no prices, no hours. Restraint is the aesthetic.

See the [template above](#④-创建条目的-markdown-文件) for the exact frontmatter shape.
