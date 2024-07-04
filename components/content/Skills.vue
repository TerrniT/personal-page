<template>
  <div class="flex flex-row flex-wrap gap-x-3 w-full mb-7">
    <LayoutHeadingH2>
      <ContentSlot
        :use="$slots.skills_title"
        unwrap="p"
      />
    </LayoutHeadingH2>
    <div
      v-if="skills"
      class="grid grid-cols-5 md:grid-cols-9 gap-2 w-full"
    >
      <div
        v-for="hard_skill in skills"
        :key="hard_skill.name"
        class="text-foreground flex flex-col gap-y-2 py-4 px-2 bg-muted relative rounded-md justify-center items-center"
      >
        <div class="flex flex-col gap-y-1 items-center justify-center">
          <UiTooltipProvider>
            <UiTooltip>
              <UiTooltipTrigger>
                <a
                  v-if="hard_skill.href"
                  :href="hard_skill.href"
                  target="_blank"
                >
                  <Icon
                    :name="hard_skill.icon"
                    size="1.7em"
                  />
                </a>
                <Icon
                  v-else
                  :name="hard_skill.icon"
                  size="1.7em"
                />
              </UiTooltipTrigger>
              <UiTooltipContent>
                <div class="flex gap-x-2 items-center">
                  <p class="text-foreground font-bold">
                    {{ hard_skill.name }}
                  </p>
                </div>
              </UiTooltipContent>
            </UiTooltip>
          </UiTooltipProvider>
        </div>
        <Icon
          v-if="hard_skill.is_favorite"
          name="ic:round-star"
          size="1em"
          class="text-primary absolute right-0 top-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skills: { name: string; level: string; icon: string, is_favorite?: boolean, href?: string}[]
}>()
</script>
