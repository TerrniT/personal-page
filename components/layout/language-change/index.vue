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
          {{ $t('nav.select_language') }}
        </UiDropdownMenuLabel>
        <UiDropdownMenuSeparator class="bg-border" />
        <ClientOnly>
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem
              v-for="lang in availableLocales"
              :key="lang.code"
              :value="lang.code"
              :class="{
                'text-foreground':
                  currentLocale!.code === lang.code,
                'text-muted-foreground':
                  currentLocale!.code !== lang.code,
              }"
            >
              <div
                class="flex w-full cursor-pointer items-center justify-between"
                @click="$i18n.locale = lang.code"
              >
                <span class="truncate">
                  {{ lang.name }}
                </span>
              </div>
            </UiDropdownMenuItem>
          </UiDropdownMenuGroup>
          <template #fallback>
            <div class="h-2 w-5" />
          </template>
        </ClientOnly>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>

<script setup lang="ts">
const availableLocales = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Русский',
    code: 'ru',
  },
  // {
  //   name: '한국어',
  //   code: 'ko',
  // },
  // {
  //   name: '中文',
  //   code: 'zh',
  // },
  // {
  //   name: 'Dansk',
  //   code: 'da',
  // },
  // {
  //   name: 'Nederlandse taal',
  //   code: 'nl',
  // }
]

const { locale: current, setLocaleCookie } = useI18n()

const currentLocale = computed(() => {
  return availableLocales.find(locale => locale.code === current.value)
})

if(!currentLocale.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Locale Error",
    data: {
      myCustomField: true,
    },
  });
}

watch(current, (newLocale) => {
  setLocaleCookie(newLocale)
})
</script>
