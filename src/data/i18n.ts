export type Lang = 'zh' | 'ja' | 'en';

export const dict = {
  zh: {
    mh: {
      vol: 'VOL. 01',
      season: '二〇二六年春 · 持续更新',
      brand: '东京法餐图鉴',
      brand_sub: 'Tokyo French Illustrated · 東京フレンチ図鑑',
    },
    intro: {
      title: '东京法餐图鉴',
      sub: 'Tokyo French Illustrated',
      body: '一份关于东京法餐厅的图鉴。不设评分，没有推荐。',
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
      body: '東京のフレンチ・レストランをめぐる図鑑。採点なし、推薦なし。',
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
      body: 'An illustrated almanac of French restaurants in Tokyo. No ratings. No recommendations.',
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
