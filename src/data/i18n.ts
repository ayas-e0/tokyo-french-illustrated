export type Lang = 'zh' | 'ja' | 'en';

export const dict = {
  zh: {
    mh: {
      vol: 'VOL. 01',
      season: '二〇二六年春 · 连载中',
      brand: '东京法餐图鉴',
      brand_sub: 'Tokyo French Illustrated · 東京フレンチ図鑑',
    },
    intro: {
      title: '东京法餐图鉴',
      sub: 'Tokyo French Illustrated',
      body: '一份关于东京法式与日法融合餐厅的私人图鉴。没有评分，没有推荐。只有去过的店、写下的字、拍过的图。连载中。',
    },
    idx: {
      heading: '目录',
      count_prefix: '条目',
      empty: '档案编纂中。',
    },
    entry: {
      back: '← 返回目录',
      visited: '到访',
      neighborhood: '街区',
    },
    foot: {
      colophon: '© Ayase · MMXXVI · 衬线 Zodiak，无衬线 Switzer · Astro 构建',
      opensource: '本站开源，欢迎 PR 投稿 · GitHub',
    },
  },

  ja: {
    mh: {
      vol: 'VOL. 01',
      season: '二〇二六年 春 · 連載中',
      brand: '東京フレンチ図鑑',
      brand_sub: 'Tokyo French Illustrated · 东京法餐图鉴',
    },
    intro: {
      title: '東京フレンチ図鑑',
      sub: 'Tokyo French Illustrated',
      body: '東京のフレンチと和仏フュージョンをめぐる、私的な図鑑。点数も、おすすめも、ない。訪れた店、書いた言葉、撮った写真、それだけ。連載中。',
    },
    idx: {
      heading: '目次',
      count_prefix: '件',
      empty: 'アーカイブ編集中。',
    },
    entry: {
      back: '← 目次へ戻る',
      visited: '訪問',
      neighborhood: 'エリア',
    },
    foot: {
      colophon: '© Ayase · MMXXVI · セリフ Zodiak、サンセリフ Switzer · Astro 製',
      opensource: 'オープンソース · PR 歓迎 · GitHub',
    },
  },

  en: {
    mh: {
      vol: 'VOL. 01',
      season: 'SPRING MMXXVI · ONGOING',
      brand: 'Tokyo French Illustrated',
      brand_sub: '東京フレンチ図鑑 · 东京法餐图鉴',
    },
    intro: {
      title: 'Tokyo French Illustrated',
      sub: '東京フレンチ図鑑 · 东京法餐图鉴',
      body: 'A personal illustrated almanac of French and Japanese-French bistros in Tokyo. No ratings. No recommendations. Only the rooms I sat in, the words I wrote, the frames I kept. Ongoing.',
    },
    idx: {
      heading: 'Contents',
      count_prefix: 'entries',
      empty: 'An archive in preparation.',
    },
    entry: {
      back: '← Back to Contents',
      visited: 'Visited',
      neighborhood: 'Neighborhood',
    },
    foot: {
      colophon: '© Ayase · MMXXVI · Set in Zodiak & Switzer · Built with Astro',
      opensource: 'Open source · PRs welcome · GitHub',
    },
  },
} as const;
