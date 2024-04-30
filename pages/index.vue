<template>
  <div>
    hello
    {{ data?.hero_content }}
  </div>
</template>

<script setup lang="ts">
import { type PageData } from '../shared/types/main'
useHead({
 htmlAttrs: {
	'data-theme': 'f891'
 }
})

const {data} = await useFetch<PageData>('/api/init')
</script>
