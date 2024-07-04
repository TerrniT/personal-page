<template>
  <div
    v-for="(item, i) in experiences"
    :key="item.company_name + i"
    class="flex md:flex-row flex-col gap-y-3 md:gap-x-3 my-3"
  >
    <div class="lg:w-1/3 md:w-1/2 w-full">
      <span class="text-muted-foreground font-medium">{{ item.duration }}</span>
    </div>
    <div class="w-full">
      <h3 class="text-xl text-foreground font-semibold">
        {{ item.job_title }}
      </h3>
      <div class="flex gap-x-2 text-muted-foreground mb-2">
        <a
          v-if="item.live_url"
          class="text-foreground font-medium hover:text-primary transition-all duration-150 ease-linear hover:underline hover:underline-offset-4 decoration-wavy "
          :href="item.live_url"
          target="_blank"
        >
          {{ item.company_name }}
        </a>
        <span>•</span>
        <span class="">Ekaterinburg, Russia</span>
      </div>
      <p
        v-if="item.description"
        class="text-muted-foreground"
      >
        {{ item.description }}
      </p>
      <div class="flex gap-x-2 flex-wrap mt-2">
        <div
          v-for="(stack_item, l) in item.stack"
          :key="l"
          class="text-muted-foreground bg-muted rounded-md px-2 p-0.5 text-xs md:text-sm"
        >
          {{ stack_item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  experiences: {
    job_title: string
    company_name: string
    live_url?: string
    duration: string
    description?: string
    icon?: string
    stack?: string[]
  }[]
}>()
</script>