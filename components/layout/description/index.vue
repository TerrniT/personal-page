<template>
  <span class="text-muted-foreground">
    {{ $t(`${pageKey}.description`) }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  pageKey: string
}

defineProps<Props>()
</script>
