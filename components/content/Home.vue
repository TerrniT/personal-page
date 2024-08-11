<template>
  <div class="">
    <div class="flex flex-col items-center">
      <div class="flex flex-col w-full justify-start my-auto gap-y-1">
        <h1 class="text-xl font-bold text-foreground">
          <ContentSlot :use="$slots.title" />
        </h1>
        <span class="text-muted-foreground text-sm italic">
          <ContentSlot :use="$slots.legenda" />
        </span>
        <div class="text-muted-foreground mt-5">
          <ContentSlot :use="$slots.description" />
        </div>
        <div class="flex gap-x-2 mt-4">
          <UiButton
            as="nuxt-link"
            to="/work"
            variant="secondary"
            class="text-foreground cursor-pointer"
          >
            {{ t("home.cta.explore") }}
          </UiButton>
          <UiButton
            as="nuxt-link"
            to="/about"
            variant="ghost"
            class="text-foreground cursor-pointer"
          >
            {{ t("home.cta.about") }}
          </UiButton>
        </div>
      </div>
    </div>
    <div class="my-12">
      <h1 class="text-xl font-bold text-foreground">
        <ContentSlot :use="$slots.recent_notes_title" />
      </h1>
      <div class="flex flex-col mt-3 gap-y-1">
        <article
          v-for="article in recent_articles"
          :key="article.title"
          class="border-b border-border rounded-sm py-3"
        >
          <NuxtLink :to="'/articles/' + article.slug" class="group">
            <div class="gap-x-2 flex flex-row justify-between items-center">
              <div class="flex flex-row gap-x-2 items-center">
                <h3
                  class="md:text-sm group-hover:text-muted-foreground transition-colors duration-150 ease-linear text-sm text-foreground font-medium"
                >
                  {{ article.title }}
                </h3>
              </div>
              <div
                class="md:flex md:flex-row gap-x-3 text-muted-foreground text-sm hidden"
              >
                <span
                  class="text-muted-foreground bg-muted rounded-md p-0.5 hidden md:block md:text-xs"
                >
                  #{{ article.topic }}
                </span>
                <span class=""> ~ </span>
                <span class="">{{ article.createdAt.slice(0, 4) }}</span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const seoImage = "put image there";
useLangMeta("home", seoImage);

const { documents } = await useMarkdown("/articles", { localized: true });

const recent_articles = computed(() =>
  documents.value.filter((item) => item.type === "article").slice(0, 7),
);
</script>
