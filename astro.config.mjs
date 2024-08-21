import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';
import astroI18next from "astro-i18next";
import icon from "astro-icon";


export default defineConfig({
  site: "https://www-terrnit.vercel.app",
  integrations: [
	expressiveCode({
		themes: ["poimandres", "solarized-light"]
  	}),
	mdx(), sitemap(), tailwind(), vue(), astroI18next(), icon()]
});