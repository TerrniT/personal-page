import { defineConfig } from 'astro/config';
// import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import icon from 'astro-icon';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
// import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';


// https://astro.build/config
export default defineConfig({
	site: 'https://www-terrnit.vercel.app',
	//   output: 'hybrid',
	integrations: [
		// expressiveCode({
		// 	themes: ['poimandres', 'solarized-light']
		// }),
		mdx({
			syntaxHighlight: false,
			remarkPlugins: [remarkGfm, remarkBreaks],
			rehypePlugins: [
			  rehypeSlug,
			  [
				rehypeAutolinkHeadings,
				{
				  behavior: 'wrap',
				  properties: {
					className: ['anchor'],
				  },
				},
			  ],
			  [
				rehypeExternalLinks,
				{
				  properties: {
					class: 'external-link',
				  },
				  target: '_blank',
				  rel: ['noopener noreferrer'],
				},
			  ],
			//   [
			// 	rehypePrettyCode,
			// 	{
			// 	  theme: 'css-variables',
			// 	},
			//   ],
			],
		}),
		tailwind({
			applyBaseStyles: false
		}),
		vue(),
		react(),
		icon()
	]
});