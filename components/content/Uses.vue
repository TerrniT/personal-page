<template>
  <div class="">
    <div class="flex flex-col gap-x-4 items-center">
      <div class="flex flex-col w-full justify-start my-auto gap-y-4">
        <h1 class="text-4xl font-bold text-foreground">
          <ContentSlot :use="$slots.title" />
        </h1>
        <span class="text-muted-foreground">
          <ContentSlot :use="$slots.description" />
        </span>
      </div>
    </div>

    <div class="mt-12 flex flex-col gap-y-16 ">
      <div
        class="flex flex-col"
      >
        <h2 class="text-xl font-bold text-foreground">
          <ContentSlot :use="$slots.workstation_title" />
        </h2>
        <ContentSlot :use="$slots.workstation" />
      </div>
      <div
        class="flex flex-col"
      >
        <h2 class="text-xl font-bold text-foreground">
          <ContentSlot :use="$slots.devtools_title" />
        </h2>
        <ContentSlot :use="$slots.devtools" />
      </div>
      <div
        class="flex flex-col"
      >
        <h2 class="text-xl font-bold text-foreground">
          <ContentSlot :use="$slots.other_software_title" />
        </h2>
        <ContentSlot :use="$slots.other_software" />
      </div>
      <div
        class="flex flex-col"
      >
        <h2 class="text-xl font-bold text-foreground">
          <ContentSlot :use="$slots.misc_title" />
        </h2>
        <ContentSlot :use="$slots.misc" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
    title: t('uses.title') + " | Gleb Kotovsky",
    description: t('uses.description')
})
</script>
