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
      <NuxtImg
        src="hero.png"
        alt="hero image"
        class="md:h-[250px] h-[150px] mt-3"
      />
    </div>
    <div class="my-24">
      <div class="grid md:grid-cols-1 grid-cols-1 gap-y-6 md:gap-x-2">
        <LayoutHeadingH2>
          <ContentSlot :use="$slots.experiences_title" unwrap="p" />
        </LayoutHeadingH2>

        <ContentSlot :use="$slots.experiences" />
        <LayoutHeadingH2>
          <ContentSlot :use="$slots.skills_title" unwrap="p" />
        </LayoutHeadingH2>

        <ContentSlot :use="$slots.skills" />
        <LayoutHeadingH2>
          <ContentSlot :use="$slots.expertise_title" unwrap="p" />
        </LayoutHeadingH2>
        <ContentSlot :use="$slots.expertise" />

        <LayoutHeadingH2>
          <ContentSlot :use="$slots.languages_title" unwrap="p" />
        </LayoutHeadingH2>
        <ContentSlot :use="$slots.languages" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const seoImage = "put image there";
useLangMeta("about", seoImage);
</script>
