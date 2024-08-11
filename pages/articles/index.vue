<template>
  <Html
    :lang="$i18n.locale"
    class="text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <NuxtLayout>
        <div class="flex flex-col gap-y-4 text-foreground">
          <LayoutHeading page-key="articles" />
          <LayoutDescription page-key="articles" />
          <main class="min-h-screen md:mr-12">
            <ul
              class="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-8"
            >
              <li v-for="(article, id) in articles" :key="id">
                <ArticlesCard :article="article" />
              </li>
            </ul>
          </main>
        </div>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "articles",
});

const seoImage = "put there image url";
useLangMeta("articles", seoImage);

const { documents } = await useMarkdown("articles");

const articles = computed(() =>
  documents.value.filter((item) => item.type === "article"),
);
</script>
