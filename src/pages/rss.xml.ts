import rss from '@astrojs/rss'
import { SITE } from '@consts'

import { getPostInfoList } from '@lib/mdx'

interface Context {
  site: string
}

export async function GET(context: Context) {
  const posts = await getPostInfoList('ru')

  const articles = posts.filter(item => (item.type ?? 'article') === 'article')

  return rss({
    title: `${SITE.NAME} — статьи`,
    description: SITE.DESCRIPTION,
    site: context.site ?? 'https://terrnit.com',
    items: articles.map(item => ({
      title: item.title,
      description: item.description,
      pubDate: item.date,
      link: item.href,
    })),
  })
}
