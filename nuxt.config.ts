// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
      "@nuxtjs/eslint-module",
      '@nuxtjs/tailwindcss',
      "@nuxt/image",
      '@nuxtjs/color-mode',
      "@nuxtjs/i18n",
      "@pinia/nuxt",
      "@nuxt/content",
	  'nuxt-icon'
    ],
	css: ['/assets/css/tailwind.css', '/assets/css/app.scss'],
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		}
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
		  htmlAttrs: {
			lang: "en"
		  },
	    },
	},
	content: {
		documentDriven: false,
		// fullTextSearchFields: ['title', 'description', 'slug'],
		highlight: {
		  preload: ['apache', 'bash', 'cmd', 'dart', 'diff', 'css', 'html', 'groovy', 'ini', 'js', 'javascript', 'json', 'latex', 'lua', 'nginx', 'php', 'powershell', 'ps1', 'ruby', 'tex', 'typescript', 'ts', 'sass', 'scss', 'sql', 'vue', 'vue-html', 'vim', 'yaml', 'xml'],
		  // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
		  theme: 'github-dark',
		},
		defaultLocale: 'en',
		locales: ['en', 'da', 'zh', 'ko', 'ru', 'nl'],
		markdown: {
		  remarkPlugins: [
			// 'remark-reading-time',
			// 'remark-emoji'
		  ],
		  toc: { depth: 3, searchDepth: 3 },
		},
		navigation: {
		  fields: ['navTitle'],
		},
	},
	pinia: {
		storesDirs: ['./stores/**'],
	},
	colorMode: {
	  preference: 'system', // default value of $colorMode.preference
	  fallback: 'light', // fallback value if not system preference found
	  hid: 'nuxt-color-mode-script',
	  globalName: '__NUXT_COLOR_MODE__',
	  componentName: 'ColorScheme',
	  classPrefix: '',
	  classSuffix: '-mode',
	  storageKey: 'nuxt-color-mode'
	},
	i18n: {
		locales: [
		  {
			code: 'en',
			file: 'en.json',
		  },
		  {
			code: 'ko',
			file: 'ko.json'
		  },
		  {
			code: 'zh',
			file: 'zh.json'
		  },
		  {
			code: 'ru',
			file: 'ru.json'
		  },
		  {
			code: 'da',
			file: 'da.json'
		  },
		  {
			code: 'nl',
			file: 'nl.json'
		  },
		],
		defaultLocale: 'en',
		// lazy: true,
		langDir: 'i18n/locales/',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: {
			useCookie: false,
			redirectOn: 'root' // recommended
		}
	  }
})