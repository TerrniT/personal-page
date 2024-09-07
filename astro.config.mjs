import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import react from '@astrojs/react'
import icon from 'astro-icon'
import i18n from '@astrolicious/i18n'

// https://astro.build/config
export default defineConfig({
  site: 'https://www-terrnit.vercel.app',
  //   output: 'hybrid',
  integrations: [
    expressiveCode({
      themes: ['poimandres', 'solarized-light'],
    }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    vue(),
    react(),
    icon(),
    i18n({
      defaultLocale: 'en',
      locales: ['en', 'ru'],
      pages: {
        '/contact': {
          ru: '/contact',
        },
        '/about': {
          ru: '/about',
        },
        '/articles': {
          ru: '/articles',
        },
        '/articles/[slug]': {
          ru: '/articles/[slug]',
        },
        '/projects': {
          ru: '/projects',
        },
        '/projects/[slug]': {
          ru: '/projects/[slug]',
        },
        '/uses': {
          ru: '/uses',
        },
        '/uses/[slug]': {
          ru: '/uses/[slug]',
        },
      },
      client: {
        data: true,
        paths: true,
      },
      sitemap: true,
    }),
  ],
})
