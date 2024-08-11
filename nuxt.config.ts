/* const constructFeedItem = (post: any, hostname: string) => {
  const url = `${hostname}/blog/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: post.bodyPlainText,
  };
}; */

/* const createRssFeed = async (feed: any) => {
  const hostname = `https://${config.domain}`;
  feed.options = {
    title: `Blog | ${config.name}`,
    description: config.strings.en_US.hero.description,
    link: `${hostname}/feed.xml`,
  };
  const { $content } = require("@nuxt/content");
  const posts = await $content("posts").fetch();
  for (const post of posts) {
    const feedItem = await constructFeedItem(post, hostname);
    feed.addItem(feedItem);
  }
  return feed;
}; */
import config from "./terrnit.config";

const nuxtConfig = defineNuxtConfig({
  runtimeConfig: {
    public: config,
  },
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxthq/studio",
    "@nuxt/content",
    "nuxt-icon",
  ],
  buildModules: ["@nuxtjs/google-analytics"],
  css: ["/assets/css/tailwind.css", "/assets/css/app.scss"],
  googleAnalytics: {
    dev: config.googleAnalyticsV4.enabled,
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: config.name },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  site: {
    url: `https:${config.domain}`,
    name: "Gleb Kotovsky",
  },

  routeRules: {
    "/": { isr: true, prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        // '/sitemap.xml',
        "/",
        "/work",
        "/article",
        "/about",
        "/contact",
      ],
    },
  },
  content: {
    documentDriven: true,
    watch: {
      ws: {
        showURL: false,
      },
    },
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        // 'remark-reading-time',
        // 'remark-emoji'
      ],
      toc: { depth: 3, searchDepth: 3 },
    },
    // fullTextSearchFields: ['title', 'description', 'slug'],
    highlight: {
      preload: [
        "apache",
        "bash",
        "cmd",
        "dart",
        "diff",
        "css",
        "html",
        "groovy",
        "ini",
        "js",
        "javascript",
        "json",
        "latex",
        "lua",
        "nginx",
        "php",
        "powershell",
        "ps1",
        "ruby",
        "tex",
        "typescript",
        "ts",
        "sass",
        "scss",
        "sql",
        "vue",
        "vue-html",
        "vim",
        "yaml",
        "xml",
      ],
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: "github-dark",
    },
    defaultLocale: "en",
    locales: ["en", "da", "zh", "ko", "ru", "nl"],
    navigation: {
      fields: ["image", "_id", "nav_title"],
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    customBlocks: {
      defaultSFCLang: "yaml",
    },
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    baseUrl: config.domain ? config.domain : "/",
    locales: [
      {
        code: "en",
        file: "en.yaml",
      },
      {
        code: "ko",
        file: "ko.yaml",
      },
      {
        code: "zh",
        file: "zh.yaml",
      },
      {
        code: "ru",
        file: "ru.yaml",
      },
      {
        code: "da",
        file: "da.yaml",
      },
      {
        code: "nl",
        file: "nl.yaml",
      },
    ],
    defaultLocale: "en",
    langDir: "i18n/locales/",
  },
});

/* if (config.articles.enabled) {
  // if blog enabled only then create feed
  nuxtConfig.modules.unshift('@nuxtjs/feed')
  nuxtConfig.feed = [
    {
      path: '/feed.xml', // The route to your feed.
      create: createRssFeed, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: [] // Will be passed as 2nd argument to `create` function
    }
  ]
}
*/
export default nuxtConfig;
