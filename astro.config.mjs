import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'

import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue'
import icon from 'astro-icon'

import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

import remarkToc from 'remark-toc'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://terrnit.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    vue(),
    react(),
    svelte(),
    icon(),
    mdx({
      //   syntaxHighlight: false,
      shikiConfig: {
        theme: 'solarized-dark',
        themes: {
          'light': 'solarized-light',
          'dark': 'solarized-dark',
          'dark-green': 'catppuccin-macchiato',
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
  adapter: vercel(),
})
