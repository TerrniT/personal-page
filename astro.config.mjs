import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import react from '@astrojs/react'
import icon from 'astro-icon'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

// https://astro.build/config
export default defineConfig({
  site: 'https://www-terrnit.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    vue(),
    react(),
    icon(),
    mdx({
      //   syntaxHighlight: false,
      shikiConfig: {
        theme: 'solarized-dark',
        themes: {
          light: 'solarized-light',
          dark: 'solarized-dark',
		  'dark-green': 'catppuccin-macchiato'
        },

        defaultColor: false,
        cssVariablePrefix: '--shiki-',

        wrap: true,
      },
	//   { theme: "css-variables" }
      remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
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
      ],
    }),
  ],
})
