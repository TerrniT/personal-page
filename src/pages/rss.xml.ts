import rss from "@astrojs/rss";
import { getPostInfoList } from "@lib/mdx";

import { SITE } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
	const articles = await getPostInfoList("en")
//   const projects = (await getCollection("projects"))
//     .filter(project => !project.data.draft);

  const items = [...articles]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
