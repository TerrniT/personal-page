import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from '@astrojs/vue';
import astroI18next from "astro-i18next";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind(), vue(), astroI18next(), icon()]
});