<template>
  <div class="">
    <div class="flex flex-col gap-x-4 items-center">
      <div class="flex flex-col w-full justify-start my-auto gap-y-4">
        <LayoutHeading page-key="hero" />
        <LayoutDescription page-key="hero" />
      </div>
      <NuxtImg
        :src="data?.hero_content.image"
        alt="hero image"
        class="size-72"
      />
    </div>
    <div class="md:mt-10 mt-20">
      <h4 class="text-foreground font-medium text-2xl">
        Numbers
      </h4>
      <div class="grid grid-cols-3 gap-3 p-3 ">
        <div
          v-for="item in data?.hero_content.number_blocks"
          :key="item.label"
          class="border border-transparent hover:border-border rounded-sm p-2"
        >
          <h3 class="text-3xl text-foreground font-medium">
            {{ item.label }}
          </h3>
          <span class="text-foreground">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div class="my-24">
      <h4 class="text-foreground font-medium text-2xl">
        Recent articles
      </h4>
      <div class="flex flex-col mt-3">
        <div
          v-for="article in data?.works.recent_articles"
          :key="article.created_at"
          class="border-b border-border rounded-sm py-2 flex flex-row justify-between items-center"
        >
          <div class="flex flex-row gap-x-2 items-center">
            <span class="text-muted-foreground bg-muted rounded-md p-0.5 hidden md:block md:text-xs">#{{ article.languages[0].name.slice(0,2) }}</span>
            <h3 class="md:text-base text-sm text-foreground font-medium ">
              {{ article.label }}
            </h3>
          </div>
          <div class="md:flex md:flex-row gap-x-3 text-muted-foreground text-sm hidden">
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
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 gap-y-6 md:gap-x-2">
      <div>
        <h4 class="text-foreground font-medium text-2xl underline underline-offset-4 mt-3">
          Hard skills
        </h4>
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
        <h4 class="text-foreground font-medium text-2xl underline underline-offset-4 mt-3">
          Expertise
        </h4>
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
        <h4 class="text-foreground font-medium text-2xl underline underline-offset-4 mt-3">
          Languages
        </h4>
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
        <div class="border border-zinc-600 rounded-lg border-dashed p-3">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type SkillLevel } from '../shared/types/hero'

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
