<template>
  <h1 class="text-5xl font-bold">
    {{ $t(`${pageKey}.title`) }}
  </h1>
</template>

<script setup lang="ts">
interface Props {
	pageKey: string
}

defineProps<Props>()
</script>
