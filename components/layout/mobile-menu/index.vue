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
          <div class="flex flex-col gap-y-1 mt-4">
            <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="localePath(link.href)"
              class="hover:text-foreground rounded-md px-2 hover:bg-primary text-base text-muted-foreground transition-colors py-2 duration-150 ease-linear"
              @click="sheetModal = false"
            >
              <template v-if="link.locale_key">
                {{ $t(link.locale_key) }}
              </template>
              <template v-else>
                {{ link.label }}
              </template>
            </NuxtLink>
          </div>
        </UiSheetHeader>
      </UiSheetContent>
    </UiSheet>
  </div>
</template>

<script setup lang="ts">
const sheetModal = ref(false)

const localePath = useLocalePath()
const store = useLayout()
const {routeLinks: links} = storeToRefs(store)
</script>
