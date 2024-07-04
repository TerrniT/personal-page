<template>
  <div class="flex flex-col gap-y-4 text-foreground">
    <LayoutHeading page-key="articles" />
    <LayoutDescription page-key="articles" />
    <main class="min-h-screen md:mr-12">
      <ul class="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-8">
        <li
          v-for="(article, id) in documents"
          :key="id"
        >
          <ArticlesCard :article="article" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
	layout: 'articles'
})

useSeoMeta({
  title: t('articles.title') + " | Gleb Kotovsky",
  description: t('articles.description'),
})


const { documents } = await useMarkdown('articles')
</script>
