<template>
  <NuxtLink
    :to="localePath(article._path)"
    class="group"
  >
    <article class="bg-secondary p-4 rounded-xl min-h-[350px] flex flex-col">
      <h2
        class="text-base font-semibold font-display tracking-tight text-foreground group-hover:text-primary-600"
      >
        {{ article.title }}
      </h2>

      <div class="flex flex-row gap-x-2 my-2">
        <span
          v-for="(tag, k) in article.tags"
          :key="k"
          class="text-muted-foreground bg-muted-foreground/10 text-xs rounded-sm w-fit py-0.5 px-1 "
        >
          {{ tag }}
        </span>
      </div>
      <p class="relative z-10 mt-2 text-sm text-muted-foreground">
        {{ article.description }}
      </p>
      <div
        v-if="article.cover_type === 'image'"
        class="mt-2 w-full"
      >
        <NuxtImg
          class="rounded-lg"
          :src="'articles/' + article.slug + '.png'"
          :alt="article.title"
        />
      </div>
      <div
        v-else-if="article.cover_type === 'youtube_video'"
        class="mt-5"
      >
        <iframe
          width="100%"
          height="auto"
          style="min-height:300px"
          :src="article.video_slug"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        />
      </div>
      <div
        v-else-if="article.cover_type === 'video'"
        class="mt-5"
      >
        <video
          width="100%"
          height="auto"
          playsinline=""
          muted=""
          autoplay=""
          loop=""
        >
          <source
            :src="'articles/' + article.video_slug"
            type="video/mp4"
          >
        </video>
      </div>
      <time
        class="relative z-10 order-first mt-2 mb-1 flex items-center text-xs text-primary"
        datetime="2022-09-05"
      >
        {{ getReadableDate(article.published) }}
      </time>
    </article>
  </NuxtLink>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

defineProps({
article: {
	type: Object,
	required: true
}
})

const getReadableDate = (dateString) => {
	const date = new Date(dateString)

	return date.toLocaleDateString(locale.value, {
		year: "numeric",
		month: "short",
		day: "numeric"
	})
}
</script>