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
      <div class="flex flex-col mt-3 gap-y-12">
        <!-- <div
          v-for="item in documents"
          :key="item.createdAt"
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
                class="text-foreground font-medium hover:text-primary transition-all duration-150 ease-linear hover:underline hover:underline-offset-4 decoration-wavy "
                :href="item.live_url"
                target="_blank"
              >
                {{ item.company_name }}
              </a>
              <span>•</span>
              <span class="">Ekaterinburg, Russia</span>
            </div>
            <p class="text-muted-foreground">
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
        </div> -->
        <!-- <div
          v-for="article in data?.works.recent_articles"
          :key="article.created_at"
          class="border-b border-border rounded-sm py-2 gap-x-2 flex flex-row justify-between items-center"
        >
          <div class="flex flex-row gap-x-2 items-center">
            <span class="text-muted-foreground bg-muted rounded-md p-0.5 hidden md:block md:text-xs">#{{ article.languages[0].name.slice(0,2) }}</span>
            <h3 class="md:text-base text-sm text-foreground font-medium ">
              {{ article.label }}
            </h3>
          </div>
          <div class="md:flex md:flex-row gap-x-1 text-muted-foreground text-sm hidden">
            <div class="flex flex-row gap-x-2">
              <span
                v-for="topic in article.topics"
                :key="topic.id"
                class="text-muted-foreground text-sm uppercase text-nowrap"
              >
                {{ topic.name }}
              </span>
            </div>
            <span class=""> ~ </span>
            <span class="">{{ article.created_at.slice(0,4) }}</span>
          </div>
        </div> -->
      </div>
      <div class="grid md:grid-cols-1 grid-cols-1 gap-y-6 md:gap-x-2">
        <LayoutHeadingH2>
          <ContentSlot
            :use="$slots.experiences_title"
            unwrap="p"
          />
        </LayoutHeadingH2>

        <ContentSlot :use="$slots.experiences" />
        <LayoutHeadingH2>
          <ContentSlot
            :use="$slots.skills_title"
            unwrap="p"
          />
        </LayoutHeadingH2>

        <ContentSlot :use="$slots.skills" />
        <LayoutHeadingH2>
          <ContentSlot
            :use="$slots.expertise_title"
            unwrap="p"
          />
        </LayoutHeadingH2>
        <ContentSlot :use="$slots.expertise" />

        <LayoutHeadingH2>
          <ContentSlot
            :use="$slots.languages_title"
            unwrap="p"
          />
        </LayoutHeadingH2>
        <ContentSlot :use="$slots.languages" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('about.title') + " | Gleb Kotovsky",
  description: t('about.description')
})

</script>
