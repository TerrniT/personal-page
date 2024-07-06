<template>
  <Html
    :lang="$i18n.locale"
    class="text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <NuxtLayout>
        <div class="flex flex-col gap-y-4 text-foreground">
          <LayoutHeading page-key="work" />
          <LayoutDescription page-key="work" />
          <main class="min-h-screen">
            <ul class="flex flex-wrap flex-row gap-x-4 gap-y-12 mt-8">
              <li
                v-for="(work, id) in workItems"
                :key="id"
                class="block"
                :class="work.size === 'cover' ? 'w-full' : 'md:w-[calc(50%-0.5rem)] w-full'"
              >
                <WorkCard
                  :work="work"
                />
              </li>
            </ul>
          </main>
        </div>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
	layout: 'work'
})


useSeoMeta({
  title: t('work.title') + " | Gleb Kotovsky",
  description: t('work.description'),
})


const { documents } = await useMarkdown('work')
const workItems = computed(() => documents.value.filter(item => item.type !== 'page'))
</script>
