<template>
  <h1 class="text-4xl font-bold text-foreground">
    {{ $t(`${pageKey}.title`) }}
  </h1>
</template>

<script setup lang="ts">
interface Props {
	pageKey: string
}

defineProps<Props>()
</script>
