<template>
  <ul class="mt-4 flex flex-col gap-y-4">
    <li
      v-for="item in items"
      :key="item.name"
      class="flex gap-x-3 items-center flex-wrap"
    >
      <span class="bg-primary block size-1.5 rounded-full" />
      <div class="flex gap-x-1 md:flex-row flex-col">
        <a
          :href="item.link"
          target="_blank"
          class="text-foreground font-medium text-nowrap hover:text-secondary-foreground duration-150 ease-linear hover:underline underline-offset-2"
        >
          {{ item.name }}
        </a>
        <div class="flex gap-x-1">
          <span class="text-muted-foreground hidden md:block">~</span>
          <span class="text-muted-foreground">
            {{ item.description }}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: { name: string; description: string; link: string }[]
}>()
</script>
