<template>
  <div>
    <UiDropdownMenu>
      <UiDropdownMenuTrigger
        aria-label="change theme"
        class="p-1 items-center flex justify-center rounded-md size-8 hover:bg-secondary"
      >
        <IconsLanguageIcon class="size-6" />
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent class="mx-3 w-56 bg-secondary border-border">
        <UiDropdownMenuLabel class="text-foreground">
          {{ $t('select_language') }}
        </UiDropdownMenuLabel>
        <UiDropdownMenuSeparator class="bg-border" />
        <UiDropdownMenuGroup v-model="local">
          <UiDropdownMenuItem
            v-for="lang in availableLocales"
            :key="lang.iso"
            :value="lang.iso"
            :class="{
              'text-foreground':
                local === lang.iso,
              'text-muted-foreground':
                local !== lang.iso,
            }"
          >
            <NuxtLink
              :to="switchLocalePath(lang.iso)"
              class="flex w-full cursor-pointer items-center justify-between"
            >
              <span class="truncate">
                {{ lang.name }}
              </span>
            </NuxtLink>
          </UiDropdownMenuItem>
        </UiDropdownMenuGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<script setup lang="ts">
interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag?: string
  }
}

const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
  },
  ru: {
    name: 'Русский',
    iso: 'ru',
  },
  ko: {
    name: '한국어',
    iso: 'ko',
  },
  zh: {
    name: '中文',
    iso: 'zh',
  },
  da: {
    name: 'Dansk',
    iso: 'da',
  },
  nl: {
    name: 'Nederlandse taal',
    iso: 'nl',
  },
}

const switchLocalePath = useSwitchLocalePath()

const { locale } = useI18n()

const local = computed(() => {
  return locale.value
})
</script>
