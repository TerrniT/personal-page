<template>
  <div class="flex flex-row gap-x-2 flex-wrap w-full mb-7">
    <div
      v-if="expertise"
      class="grid grid-cols-2 md:grid-cols-3 gap-3 w-full"
    >
      <div
        v-for="s in expertise"
        :key="s.name"
        class="text-foreground flex items-center flex-col gap-y-2 py-6 px-4 bg-muted rounded-md"
      >
        <Icon
          :name="s.icon"
          size="2em"
        />
        <span class="text-foreground font-medium">
          {{ s.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  expertise: { name: string; level: string; description: string, icon: string }[]
}>()
</script>
