<template>
  <Html
    :lang="$i18n.locale"
    class="text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <NuxtLayout>
        <ContentQuery
          v-slot="{ data }"
          :path="$route.path"
          :locale="locale"
          find="one"
        >
          <ContentRenderer :value="data" />
        </ContentQuery>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

