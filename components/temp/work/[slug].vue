<template>
  <main class="">
    <div
      v-if="document"
      class="prose prose-blockquote:not-italic prose-img:ring-1 prose-img:ring-primary prose-img:rounded-lg prose-img:shadow-sm prose-li:text-foreground"
    >
      <article>
        <div class="flex items-center text-center text-xs mb-4">
          <div
            v-if="document.tags && document.tags.length > 0"
            class="flex gap-2 flex-wrap"
          >
            <span
              v-for="tag in document.tags"
              :key="tag"
              class="text-muted-foreground bg-accent rounded-sm w-fit py-0.5 px-1"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
        <div class="flex justify-between ">
          <div class="flex flex-col h-fit">
            <h1 class="text-3xl text-foreground">
              {{ document.title }}
            </h1>
            <span class="text-xl text-muted-foreground">
              {{ document.description }}
            </span>
          </div>

          <div
            class="flex flex-row gap-x-3 h-fit "
          >
            <UiButton
              variant="ghost"
              size="sm"
              class="flex gap-x-2 h-8 text-muted-foreground"
              @click="$router.back()"
            >
              <Icon
                name="mdi:arrow-left"
                size="1.3em"
              />
              <span>
                Back
              </span>
            </UiButton>
            <UiButton
              v-if="document.github_url"
              variant="default"
              size="lg-icon"
              class="rounded-full size-8 text-black hover:bg-transparent backdrop-blur-md hover:text-primary border border-transparent hover:border-primary duration-150 transition-colors ease-linear"
              @click="$router.push(document.github_url)"
            >
              <Icon
                name="entypo:code"
                size="1.5em"
              />
            </UiButton>
            <UiButton
              v-if="document.live_url"
              variant="default"
              size="lg-icon"
              class="rounded-full size-8 bg-white hover:bg-zinc-300 text-zinc-600 hover:text-black duration-150 transition-colors ease-linear"
              @click="$router.push(document.live_url)"
            >
              <Icon
                name="humbleicons:arrow-right-up"
                size="1.5em"
              />
            </UiButton>
          </div>
        </div>
        <div class="flex flex-row gap-x-1 md:gap-x-3 my-2 md:my-4">
          <span
            v-for="(stack_item, s) in document.stack"
            :key="s + stack_item"
            class="text-xs rounded-sm w-fit py-0.5 px-1 "
          >
            <LayoutWorkStackIcon :name="stack_item" />
          </span>
        </div>

        <ContentRenderer :value="document" />
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const { params } = useRoute()

const { document } = await useMarkdown(`work/${(params as any).slug}`)

useSeoMeta({
	ogImage: `https://www-terrnit.vercel.app/work/${params.slug}.png`,
	twitterCard: "summary_large_image",
	articleAuthor: "Gleb Kotovsky",
	title: document?.title + " | Gleb Kotovsky",
  description: document?.description
})
</script>

<style>
.prose h1,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5,
.prose h6 {
	@apply no-underline text-foreground
}
.prose code {
    @apply text-primary bg-primary/10 rounded-md p-0.5
}
.prose code::before,
.prose code::after {
    content: '';
}

.prose p {
    @apply text-foreground
}
.prose p a {
    @apply text-primary hover:text-primary/50
}

.prose blockquote {
    @apply text-foreground italic bg-yellow-500/20
}
</style>
