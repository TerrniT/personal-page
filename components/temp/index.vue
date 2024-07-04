<template>
  <div class="">
    <div class="flex flex-col gap-x-4 items-center">
      <div class="flex flex-col w-full justify-start my-auto gap-y-4">
        <h1 class="text-4xl font-bold text-foreground">
          {{ t("hero.content.hi") }}
        </h1>
        <LayoutDescription page-key="hero" />
      </div>
      <NuxtImg
        src="hero.png"
        alt="hero image"
        class="md:h-[250px] h-[150px] mt-3"
      />
    </div>
    <div class="my-24">
      <LayoutHeadingH2 page-key="hero.content.experience" />
      <div class="flex flex-col mt-3 gap-y-12">
        <div
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
        </div>
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
    </div>

    <div class="grid md:grid-cols-1 grid-cols-1 gap-y-6 md:gap-x-2">
      <div>
        <LayoutHeadingH2 page-key="hero.content.hard_skills" />
        <div class="flex flex-row flex-wrap gap-x-3 w-full my-5">
          <template v-if="data && data.skills.hard_skills">
            <div
              v-for="hard_skill in data.skills.hard_skills"
              :key="hard_skill.name"
              class="text-foreground flex gap-x-2 py-2"
            >
              <NuxtImg
                :src="hard_skill.icon"
                class="w-6 h-6 "
              />
              <span class="text-foreground font-medium">
                {{ hard_skill.name }}
              </span>
            </div>
          </template>
        </div>
      </div>

      <div>
        <LayoutHeadingH2 page-key="hero.content.expertise" />
        <div class="flex flex-row gap-x-2 flex-wrap w-full my-5">
          <template v-if="data && data.skills.expertise">
            <div
              v-for="expertise in data.skills.expertise"
              :key="expertise.name"
              class="text-foreground flex gap-x-2 py-2"
            >
              <NuxtImg
                :src="expertise.icon"
                class="w-6 h-6 "
              />
              <span class="text-foreground font-medium">
                {{ expertise.name }}
              </span>
            </div>
          </template>
        </div>
      </div>
      <div>
        <div class="flex gap-x-2 items-center">
          <LayoutHeadingH2 page-key="hero.content.languages" />
          <UiTooltipProvider>
            <UiTooltip>
              <UiTooltipTrigger>
                <Icon
                  name="ph:question-duotone"
                  class="text-muted-foreground/40 hover:text-muted-foreground transition-all duration-150 ease-linear"
                  size="1.5em"
                />
              </UiTooltipTrigger>
              <UiTooltipContent>
                <ul class="flex flex-col gap-y-2">
                  <li
                    v-for="level in levelColors.filter(i => i.type === 'language')"
                    :key="level.label"
                    class="flex gap-x-2 items-center text-xs"
                  >
                    <span
                      class="w-4 h-4 rounded-sm"
                      :class="level.indicator"
                    />
                    <span class="text-muted-foreground">=</span>
                    <span class="text-muted-foreground">{{ level.label }}</span>
                  </li>
                </ul>
              </UiTooltipContent>
            </UiTooltip>
          </UiTooltipProvider>
        </div>
        <div class="flex flex-row flex-wrap gap-x-3 w-full my-5">
          <template v-if="data && data.skills.languages">
            <div
              v-for="lang in data.skills.languages"
              :key="lang.name"
              class="text-foreground flex gap-x-2 py-2 items-center "
            >
              <NuxtImg
                :src="lang.icon"
                class="w-6 h-6 "
              />
              <span class="text-foreground font-medium">
                {{ lang.name }}
              </span>
              <span
                class="w-3 h-3 rounded-full"
                :class="levelColors.find(i => i.type === 'language' && i.label === lang.level)?.indicator"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SkillLevel } from '../shared/types/hero'

const { t } = useI18n()

useSeoMeta({
  title: t('hero.title') + " | Gleb Kotovsky",
  description: t('hero.description'),
})

const { documents } = await useMarkdown('experience')

const store = useHero()
const {pageData: data} = storeToRefs(store)

await store.fetchHero()

if(!data.value) {
 throw createError({
  statusCode: 500,
  statusMessage: 'Api Init Error',
  data: {
    myCustomField: true
  }
})}

const levelColors: {indicator: string, type: 'language' | 'expertise', label: SkillLevel}[] = [
{
	label: 'Beginner',
	indicator: 'bg-zinc-500',
	type: 'expertise'
  },
  {
	label: 'Intermediate',
	indicator: 'bg-blue-600',
	type: 'expertise'
  },
  {
	label: 'Advance',
	indicator: 'bg-green-600',
	type: 'expertise'
  },
   {
	label: 'Native Or Bilingual',
	indicator: 'bg-green-600',
	type: 'language'
  },
  {
	label: 'Currently Learning',
	indicator: 'bg-blue-600',
	type: 'language'
  },
{
	label: 'Intrested In',
	indicator: 'bg-zinc-500',
	type: 'language'
  },
]
</script>
