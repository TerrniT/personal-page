<template>
  <Html
    :lang="$i18n.locale"
    class="text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <NuxtLayout>
        <main class="min-h-screen">
          <div
            v-if="document"
            class="prose prose-blockquote:not-italic prose-img:ring-1 prose-img:ring-primary prose-img:rounded-lg prose-img:shadow-sm prose-li:text-foreground"
          >
            <article>
              <div
                class="flex justify-between items-center text-center text-xs mb-4"
              >
                <span
                  class="text-muted-foreground bg-accent rounded-sm w-fit py-0.5 px-1"
                >
                  {{ document.topic }}
                </span>
                <UiButton
                  variant="ghost"
                  size="sm"
                  class="flex gap-x-2 h-8 text-muted-foreground"
                  @click="$router.back()"
                >
                  <Icon name="mdi:arrow-left" size="1.3em" />
                  <span> Back </span>
                </UiButton>
              </div>
              <h1 class="text-3xl text-foreground">
                {{ document.title }}
              </h1>
              <ContentRenderer :value="document" />
            </article>
          </div>
        </main>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const { params, path } = useRoute();

const { document } = await useMarkdown(`articles/${(params as any).slug}`);

const runtimeConfig = useRuntimeConfig();

const config = runtimeConfig.public;

useSeoMeta({
  title: document?.title + " | " + config.name,
  description: document?.description,
  articleAuthor: [config.name as string],
  ogImage: `https://www-terrnit.vercel.app/articles/${params.slug}.png`,
  ogTitle: document?.title,
  ogDescription: document?.description,
  twitterCard: "summary_large_image",
  twitterImage: `https://www-terrnit.vercel.app/articles/${params.slug}.png`,
  twitterTitle: document?.title + " | " + config.name,
  twitterDescription: document?.description,
});
</script>

<style>
.prose h1,
.prose h2,
.prose h3,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5,
.prose h6 {
  @apply no-underline text-foreground;
}
.prose code {
  @apply text-primary rounded-md p-0.5;
}
.prose code::before,
.prose code::after {
  content: "";
}

.prose p {
  @apply text-foreground;
}
.prose p a {
  @apply text-primary hover:text-primary/50;
}

.prose blockquote {
  @apply text-foreground italic bg-yellow-500/20;
}
</style>
