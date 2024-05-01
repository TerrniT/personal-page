// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
      "@nuxtjs/eslint-module",
      '@nuxtjs/tailwindcss',
      "@nuxt/image",
      '@nuxtjs/color-mode',
      "@nuxtjs/i18n"
    ],
	css: ['/assets/css/tailwind.css', '/assets/css/app.scss'],
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		}
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