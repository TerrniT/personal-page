<template>
  <div
    v-if="links"
    class="flex flex-col gap-y-4 w-full"
  >
    <div
      v-for="hard_skill in links"
      :key="hard_skill.name"
      class="text-foreground py-4 px-2 bg-muted hover:ring-1 hover:ring-primary cursor-pointer hover:scale-[1.01] transition-all duration-100 ease-linear  relative rounded-md justify-center items-center"
    >
      <div class="flex flex-col items-start px-3 justify-center">
        <a
          v-if="hard_skill.link"
          :href="hard_skill.link"
          target="_blank"
          class="flex flex-row gap-x-2 items-center"
        >
          <Icon
            :name="hard_skill.icon"
            size="1.7em"
          />
          <span class="text-foreground font-medium text-sm block">
            {{ hard_skill.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: { name: string; link: string; icon: string}[]
}>()
</script>
