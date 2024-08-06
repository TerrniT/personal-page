// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  css: ["/assets/css/tailwind.css", "/assets/css/app.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
    },
    // pageTransition: {
    //   name: 'fade',
    //   mode: 'out-in',
    // },
  },

  routeRules: {
    "/": { isr: true, prerender: true },
  },
  site: {
    url: process.env.NUXT_SITE_URL || "https://www-terrnit.vercel.app",
    identity: {
      type: "Person",
    },
    twitter: "@gaundergod",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        // '/sitemap.xml',
        "/",
        "/work",
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
    preference: "system", // default value of $colorMode.preference
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
    baseUrl: "/",
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
    langDir: "i18n/locales/",
    defaultLocale: "en",
  },
});

