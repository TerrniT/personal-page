<template>
  <h2 class="text-foreground font-semibold text-2xl">
    {{ $t(`${pageKey}`) }}
  </h2>
</template>

<script setup lang="ts">
interface Props {
	pageKey: string
}

defineProps<Props>()
</script>
