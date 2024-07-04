<template>
  <div class="flex flex-col gap-y-4 text-foreground">
    <LayoutHeading page-key="playlist" />
    <LayoutDescription page-key="playlist" />
    <div class="mt-6 flex flex-col gap-y-16">
      <div
        v-for="(section, section_name) in data"
        :key="(section_name as unknown as 'albums' | 'favorite_tracks')"
        class="mt-12"
      >
        <LayoutHeadingH2 :page-key="`playlist.content.${section_name}`" />
        <template
          v-if="
            (section_name as unknown as 'albums' | 'favorite_tracks') ===
              'favorite_tracks'
          "
        >
          <div
            class="w-full items-center flex flex-col justify-center bg-sky-900 mt-4 md:h-full md:pt-4 py-3 md:py-0 px-2 gap-y-12 rounded-lg"
          >
            <div
              class="h-full w-full relative flex items-end justify-center min-h-[240px]"
            >
              <div
                class="w-[340px] h-[200px] rounded-[48px] flex flex-col bg-black absolute top-7 mx-auto left-0 right-0 z-30"
              >
                <div class="grid grid-cols-5 items-center">
                  <UiCarousel
                    ref="carouselContainerRef"
                    class="relative col-span-4"
                    :plugins="[
                      Autoplay({
                        delay: 5000,
                      }),
                    ]"
                    :opts="{
                      align: 'start',
                      loop: true,
                    }"
                  >
                    <UiCarouselContent>
                      <UiCarouselItem
                        v-for="(item, index) in section"
                        :key="index"
                        class="h-full"
                      >
                        <div
                          class="px-5 py-6 h-[90px] rounded-[48px] items-start flex flex-col"
                        >
                          <div class="flex gap-x-2 items-center">
                            <NuxtImg
                              class="size-14 rounded-2xl"
                              :src="item.cover"
                            />
                            <div class="flex flex-col">
                              <h3 class="!text-white font-semibold text-base">
                                {{ item.name }}
                              </h3>
                              <span class="!text-white text-sm">{{
                                item.artist
                              }}</span>
                            </div>
                          </div>
                        </div>
                      </UiCarouselItem>
                    </UiCarouselContent>
                  </UiCarousel>
                  <div class="pt-2">
                    <IconsSoundWaves class="fill-primary" />
                  </div>
                </div>

                <div class="px-6 my-2 flex gap-x-4 items-center">
                  <span class="text-xs text-zinc-500">01:13</span>
                  <div class="bg-secondary h-[9px] w-full rounded-full">
                    <div class="bg-primary h-[9px] w-1/5 rounded-full" />
                  </div>
                  <span class="text-xs text-zinc-500">20:03</span>
                </div>
                <div
                  v-if="carouselContainerRef && carouselContainerRef[0]"
                  class="w-full justify-center gap-x-5 flex items-center px-6"
                >
                  <UiButton
                    variant="ghost"
                    size="lg-icon"
                    class="rounded-full size-8 duration-150 transition-colors ease-linear"
                    @click="scrollPrev()"
                  >
                    <IconsArrowLeft
                      class="transition-all duration-200 ease-in-out"
                      :class="
                        carouselContainerRef[0].canScrollPrev
                          ? 'fill-white'
                          : 'fill-zinc-500'
                      "
                    />
                  </UiButton>
                  <UiButton
                    variant="ghost"
                    size="lg-icon"
                    class="rounded-full size-8 duration-150 transition-colors ease-linear fill-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.2em"
                      height="2.2em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"
                      />
                    </svg>
                  </UiButton>
                  <UiButton
                    variant="ghost"
                    size="lg-icon"
                    class="rounded-full size-8 duration-150 transition-colors ease-linear fill-white"
                    @click="scrollNext()"
                  >
                    <IconsArrowRight
                      class="transition-all duration-200 ease-in-out"
                      :class="
                        carouselContainerRef[0].canScrollNext
                          ? 'fill-white'
                          : 'fill-zinc-500'
                      "
                    />
                  </UiButton>
                </div>
              </div>
              <NuxtImg
                class="h-full w-1/2 hidden lg:block select-none shadow-black"
                src="iphone_mockup_15.png"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="grid grid-cols-1 md:gap-5 gap-y-12 md:grid-cols-3 mt-6">
            <div
              v-for="album in section"
              :key="album.name"
            >
              <NuxtImg
                :src="album.cover"
                :alt="album.name + ' ' + album.artist + ' cover'"
                placeholder="/fallback_for_albums.jpg"
                class="rounded-xl w-full border border-muted-foreground/10"
              />
              <div class="mt-2">
                <div class="flex justify-between items-start gap-x-2">
                  <div class="flex gap-x-1 items-center flex-wrap">
                    <h4
                      class="text-foreground font-semibold text-lg w-fit text-wrap"
                    >
                      {{ album.name }}
                    </h4>
                  </div>

                  <div
                    class="text-muted-foreground mt-1 flex items-center w-10 justify-center bg-muted border border-muted-foreground/20 rounded-md text-xs text-center"
                  >
                    <span>
                      {{ album.year }}
                    </span>
                  </div>
                </div>

                <span class="text-muted-foreground text-base">{{ album.artist }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "~/components/ui/carousel";

const { t } = useI18n();

useSeoMeta({
  title: t("playlist.title") + " | Gleb Kotovsky",
  description: t("playlist.description"),
});

const carouselContainerRef = ref<InstanceType<typeof Carousel>[] | null>(null);

const store = usePlaylist();
const { pageData: data } = storeToRefs(store);

await store.fetchPlaylist();

const scrollPrev = () => {
  if (!carouselContainerRef.value) return;
  carouselContainerRef.value[0].scrollPrev();
};
const scrollNext = () => {
  if (!carouselContainerRef.value) return;
  carouselContainerRef.value[0].scrollNext();
};

onUnmounted(() => {
  carouselContainerRef.value = null;
});

if (!data.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Api Uses Error",
    data: {
      myCustomField: true,
    },
  });
}
</script>
