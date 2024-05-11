<template>
  <div class="flex flex-col gap-y-4 text-foreground">
    <LayoutHeading page-key="uses" />
    <LayoutDescription page-key="uses" />
    <div class="mt-12 flex flex-col gap-y-16 ">
      <div
        v-for="(section, section_name) in data"
        :key="section_name"
        class=""
      >
        <LayoutHeadingH2 :page-key="`uses.content.${section_name}`" />
        <ul class="mt-6 flex flex-col gap-y-4">
          <li
            v-for="item in section"
            :key="item.name"
            class="flex gap-x-3 items-center flex-wrap"
          >
            <span class="bg-primary block size-1.5 rounded-full" />
            <div class="flex gap-x-1 md:flex-row flex-col">
              <a
                :href="item.link"
                target="_blank"
                class="text-foreground font-medium text-nowrap hover:text-secondary-foreground duration-150 ease-linear hover:underline underline-offset-2"
              >
                {{ item.name }}
              </a>
              <div class="flex gap-x-1">
                <span class="text-muted-foreground">~</span>
                <span class="text-muted-foreground">
                  {{ item.description }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useMyUses()
const {pageData: data} = storeToRefs(store)

await store.fetchUses()

if(!data.value) {
 throw createError({
  statusCode: 500,
  statusMessage: 'Api Uses Error',
  data: {
    myCustomField: true
  }
})}
</script>
