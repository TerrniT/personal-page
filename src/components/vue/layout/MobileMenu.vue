<script setup lang="ts">
import { Button } from '@components/vue/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@components/vue/ui/sheet'

import { ref } from 'vue'

const sheetModal = ref(false)
</script>

<template>
  <Sheet :open="sheetModal" @update:open="sheetModal = $event">
    <SheetTrigger as-child as="div">
      <Button size="lg-icon" variant="ghost" aria-describedby="mobile-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="#888888"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
          />
        </svg>
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>
          <span class="hidden"> Navbar menu </span>
        </SheetTitle>
        <slot name="navigation" />
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
