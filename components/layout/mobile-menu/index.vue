<template>
  <div>
    <UiSheet
      :open="sheetModal"
      @update:open="sheetModal = $event"
    >
      <UiSheetTrigger as-child>
        <UiButton
          size="lg-icon"
          variant="ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#888888"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
            />
          </svg>
        </UiButton>
      </UiSheetTrigger>
      <UiSheetContent
        side="bottom"
      >
        <UiSheetHeader>
          <UiSheetTitle>
            <span class="hidden">
              Navbar menu
            </span>
          </UiSheetTitle>
          <div
            v-if="navigation"
            class="flex flex-col gap-y-1 mt-4"
          >
            <NuxtLink
              v-for="link in navigation"
              :key="link.nav_title"
              :to="localePath(link._path)"
              class="hover:text-foreground rounded-md px-2 hover:bg-primary text-base text-muted-foreground transition-colors py-2 duration-150 ease-linear"
              @click="sheetModal = false"
            >
              {{ link.nav_title }}
            </NuxtLink>
          </div>

          <div
            v-if="socialLinks"
            class="flex gap-x-4 px-2 mt-2"
          >
            <NuxtLink
              v-for="link in socialLinks"
              :key="link.name"
              :to="link.link"
              target="_blank"
              class="hover:text-foreground text-muted-foreground transition-all duration-150 ease-linear hover:underline underline-offset-2 flex items-center gap-x-2"
            >
              <NuxtImg
                :src="link.icon"
                class="w-6 h-6"
              />
            </NuxtLink>
          </div>
        </UiSheetHeader>
      </UiSheetContent>
    </UiSheet>
  </div>
</template>

<script setup lang="ts">
const sheetModal = ref(false)

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
