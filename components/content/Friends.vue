<template>
  <div class="flex flex-col gap-y-4 text-foreground">
    <div class="flex flex-col gap-x-4 items-center">
      <div class="flex flex-col w-full justify-start my-auto gap-y-4">
        <h1 class="text-4xl font-bold text-foreground">
          <!-- <ContentSlot :use="$slots.title" /> -->
          Hello nia
        </h1>
        <span class="text-muted-foreground">
          <!-- <ContentSlot :use="$slots.description" /> -->
        </span>
      </div>
    </div>
    <div class="flex flex-row gap-x-2">
      <!-- <ContentSlot :use="$slots.cta" /> -->
      <!-- <NuxtLink
        :to="localePath('/contact')"
        class="hover:text-primary text-primary/90 underline-offset-4 hover:underline decoration-dashed text-start  transition-colors duration-150 ease-linear"
      >
        <ContentSlot :use="$slots.cta_link" />
      </NuxtLink> -->
    </div>
    <!-- <FriendsList /> -->
    <!-- <ContentSlot :use="$slots.friends" /> -->
  </div>
</template>

<script setup lang="ts">
const seoImage = "put image there";
useLangMeta("friends", seoImage);
</script>
