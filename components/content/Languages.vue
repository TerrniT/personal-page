<template>
  <div class="flex col flex-wrap gap-x-3 w-full">
    <template v-if="languages">
      <div
        v-for="lang in languages"
        :key="lang.name"
        class="text-foreground w-full flex gap-x-2 py-2 items-center md:hidden"
      >
        <div class="flex gap-x-2">
          <Icon
            :name="lang.icon"
            size="1.5em"
          />
          <span class="text-foreground font-semibold">
            {{ lang.name }}
          </span>
        </div>

        <span>
          ~
        </span>
        <span class="text-foreground font-light">
          {{ lang.level }}
        </span>
      </div>
      <div
        v-for="lang in languages"
        :key="lang.name"
        class="text-foreground w-full hidden md:flex gap-x-2 py-2 items-center justify-between"
      >
        <div class="flex flex-row gap-x-2 w-[20%]">
          <Icon
            :name="lang.icon"
            size="1.5em"
          />
          <span class="text-foreground font-semibold">
            {{ lang.name }}
          </span>
        </div>

        <div class="w-full h-0.5 rounded-full bg-zinc-300" />
        <div class="w-[25%]">
          <span class="text-foreground font-light text-xs">
            {{ lang.level }}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  languages: { name: string; level: string; description: string, icon: string }[]
}>()
</script>
