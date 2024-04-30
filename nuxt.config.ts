// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxtjs/eslint-module", '@nuxtjs/tailwindcss', "@nuxt/image"],
	css: ['/assets/css/tailwind.css', '/assets/css/app.scss'],
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		}
	},
})