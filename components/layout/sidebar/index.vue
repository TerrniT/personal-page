<template>
  <div
    class="h-screen py-8 px-4 sticky top-0 md:flex flex-col justify-between w-[220px] hidden"
  >
    <div>
      <LayoutLogo />

      <div
        v-if="navigation"
        class="flex flex-col gap-y-2 px-2 mt-4"
      >
        <ul class="flex flex-col gap-y-2">
          <li
            v-for="link of navigation.filter((item) => item.nav_title)"
            :key="link._path"
            class="hover:text-foreground text-muted-foreground transition-colors duration-150 ease-linear"
          >
            <NuxtLink :to="localePath(link._path)">
              {{ link.nav_title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        v-if="socialLinks"
        class="flex flex-col gap-y-2 px-2 mt-12"
      >
        <span class="text-muted-foreground font-medium uppercase text-sm">
          {{ $t("nav.elsewhere") }}</span>

        <NuxtLink
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.link"
          target="_blank"
          class="hover:text-foreground text-muted-foreground transition-all duration-150 ease-linear hover:underline underline-offset-2 flex items-center gap-x-2"
        >
          {{ link.name }}
          <NuxtImg
            :src="link.icon"
            class="w-6 h-6"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="px-2 flex flex-col gap-y-3">
      <LayoutLanguageChange />
      <LayoutThemeChange />
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();

const socialLinks = [
  {
    icon: "https://api.iconify.design/skill-icons:devto-dark.svg?color=%23888888",
    name: "Devto",
    link: "https://dev.to/terrnitllc",
  },
  {
    icon: "https://api.iconify.design/icomoon-free:youtube.svg?color=%23888888",
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC-Xu_hPhWucbV06VeyyIZig",
  },
];

const { data: navigation } = await useAsyncData(
  "navigation",
  () => fetchContentNavigation(queryContent().where({ _locale: locale.value })),
  {
    watch: [locale],
  },
);
</script>
