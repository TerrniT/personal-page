<template>
  <div class="h-screen py-8 px-4 sticky top-0 md:flex flex-col justify-between w-[220px] hidden">
    <div>
      <LayoutLogo />

      <div class="flex flex-col gap-y-2 px-2 mt-4">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="localePath(link.href)"
          class="hover:text-foreground text-muted-foreground transition-colors duration-150 ease-linear"
        >
          <template v-if="link.locale_key">
            {{ $t('nav.' + link.locale_key) }}
          </template>
          <template v-else>
            {{ link.label }}
          </template>
        </NuxtLink>
      </div>

      <div
        v-if="socialLinks"
        class="flex flex-col gap-y-2 px-2 mt-12"
      >
        <span class="text-muted-foreground font-medium uppercase text-sm"> {{ $t('nav.elsewhere') }}</span>
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
            class="w-6 h-6 "
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
const localePath = useLocalePath()

const store = useLayout()
const {socialLinks, routeLinks: links} = storeToRefs(store)

await store.fetchLinks()
</script>
