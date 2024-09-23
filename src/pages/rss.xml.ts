import rss from '@astrojs/rss'
import { getPostInfoList } from '@lib/mdx'

import { SITE } from '@consts'

type Context = {
  site: string
}

export async function GET(context: Context) {
  const articles = await getPostInfoList('en')

  const items = [...articles]

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.title,
      description: item.description,
      pubDate: item.date,
      link: item.href,
	  author: item.author
      // TODO: Specify source
      // source: item.source
    })),
  })
}
