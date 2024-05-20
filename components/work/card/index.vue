<template>
  <NuxtLink
    :to="localePath(work._path)"
    class="group"
  >
    <article
      class="min-h-[350px] flex flex-col"
    >
      <div class="bg-secondary p-6 rounded-t-2xl pb-12">
        <div class="flex justify-between items-start md:items-center">
          <div class="flex gap-x-0 md:gap-x-6 md:items-center items-start flex-col md:flex-row">
            <h2
              class="text-lg font-semibold font-display tracking-tight text-foreground group-hover:text-primary-600"
            >
              {{ work.title }}
            </h2>
            <div class="flex flex-row gap-x-1 md:gap-x-3 my-2 md:my-4">
              <span
                v-for="(stack_item, s) in work.stack"
                :key="s + stack_item"
                class="text-xs rounded-sm w-fit py-0.5 px-1 "
              >
                <LayoutWorkStackIcon :name="stack_item" />
              </span>
            </div>
          </div>

          <time
            class="relative z-10 mt-2 mb-1 flex items-center text-xs text-muted-foreground"
            datetime="2022-09-05"
          >
            {{ getReadableDate(work.createdAt) }}
          </time>
        </div>


        <div class="flex flex-row gap-x-2 my-2">
          <span
            v-for="(tag, k) in work.tags"
            :key="k"
            class="text-muted-foreground bg-muted-foreground/10 text-xs rounded-sm w-fit py-0.5 px-1 "
          >
            {{ tag }}
          </span>
        </div>

        <p class="relative z-10 mt-2 text-sm text-muted-foreground">
          {{ work.description }}
        </p>
      </div>

      <div
        v-if="work.cover_type === 'image'"
        class="w-full"
      >
        <NuxtImg
          class="rounded-b-2xl w-full max-h-[550px] object-cover"
          :src="'work/' + work.slug + '.png'"
          :alt="work.title"
        />
      </div>

      <div
        v-else-if="work.cover_type === 'youtube_video'"
        class="mt-5"
      >
        <iframe
          width="100%"
          height="auto"
          style="min-height:300px"
          :src="work.video_slug"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div
        v-else-if="work.cover_type === 'video'"
        class="mt-5"
      >
        <video
          width="100%"
          height="auto"
          playsinline
          muted
          autoplay
          loop
        >
          <source
            :src="'work/' + work.video_slug"
            type="video/mp4"
          >
        </video>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  work: any
}

defineProps<Props>()


const { locale } = useI18n()
const localePath = useLocalePath()

const getReadableDate = (dateString: string) => {
	const date = new Date(dateString)

	return date.toLocaleDateString(locale.value, {
		year: "numeric"
	})
}

</script>
