<script setup lang="ts">
import { Button } from '@components/vue/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@components/vue/ui/sheet'

interface FilterOption {
  active: boolean
  href: string
  label: string
}

interface FilterGroup {
  label: string
  options: FilterOption[]
}

interface Props {
  clearHref: string
  clearLabel: string
  groups: FilterGroup[]
  summary: string
  triggerLabel: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="hidden border-y border-border/60 py-4 md:flex md:flex-col md:gap-4">
      <div class="flex items-center justify-between gap-4">
        <p class="text-xs uppercase tracking-[0.22em] text-muted-foreground/80">
          {{ summary }}
        </p>
        <Button variant="ghost" size="sm" classes="h-auto px-0 text-xs uppercase tracking-[0.18em]" :to="clearHref">
          {{ clearLabel }}
        </Button>
      </div>

      <div class="flex flex-col gap-3">
        <section
          v-for="group in groups"
          :key="group.label"
          class="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <h2 class="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground/80">
            {{ group.label }}
          </h2>
          <div class="flex flex-wrap items-center gap-2">
            <Button
              v-for="option in group.options"
              :key="option.label"
              :to="option.href"
              size="sm"
              classes="min-h-8 rounded-full px-3 text-xs"
              :variant="option.active ? 'default' : 'outline'"
            >
              {{ option.label }}
            </Button>
          </div>
        </section>
      </div>
    </div>

    <div class="md:hidden">
      <Sheet>
        <SheetTrigger as-child as="div">
          <Button variant="outline" size="sm" classes="rounded-full">
            {{ triggerLabel }}
          </Button>
        </SheetTrigger>

        <SheetContent side="bottom" class="rounded-t-[2rem]">
          <SheetHeader class="flex flex-col gap-2">
            <SheetTitle class="sr-only">
              {{ triggerLabel }}
            </SheetTitle>
            <p class="pr-8 text-xs uppercase tracking-[0.22em] text-muted-foreground/80">
              {{ summary }}
            </p>
          </SheetHeader>

          <div class="mt-6 flex flex-col gap-5">
            <section
              v-for="group in groups"
              :key="group.label"
              class="flex flex-col gap-3 border-b border-border/60 pb-5 last:border-b-0 last:pb-0"
            >
              <h2 class="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground/80">
                {{ group.label }}
              </h2>
              <div class="flex flex-wrap gap-2">
                <Button
                  v-for="option in group.options"
                  :key="option.label"
                  :to="option.href"
                  size="sm"
                  classes="min-h-8 rounded-full px-3 text-xs"
                  :variant="option.active ? 'default' : 'outline'"
                >
                  {{ option.label }}
                </Button>
              </div>
            </section>

            <Button variant="ghost" size="sm" classes="justify-start px-0 text-xs uppercase tracking-[0.18em]" :to="clearHref">
              {{ clearLabel }}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
