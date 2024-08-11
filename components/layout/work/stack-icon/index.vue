<script setup lang="ts">
import { type StackNames } from "./types";
import { iconsResolver } from "./utils";

const props = defineProps<{ name: StackNames }>();
</script>

<template>
  <UiTooltipProvider>
    <UiTooltip>
      <UiTooltipTrigger>
        <Icon
          v-if="iconsResolver[props.name]"
          :name="iconsResolver[props.name].icon"
          size="1.5em"
        />
        <template v-else> Error: Icon doesnt exist </template>
      </UiTooltipTrigger>
      <UiTooltipContent>
        <template v-if="iconsResolver[props.name]">
          <div class="flex gap-x-2 items-center">
            <p class="text-foreground font-bold">
              {{ props.name }}
            </p>
            <div class="flex text-sm items-center">
              <p>[</p>
              <Icon :name="iconsResolver[props.name].icon" />
              <p>]</p>
            </div>
          </div>
          <div class="flex flex-col gap-y-2">
            <p class="text-muted-foreground">
              {{ iconsResolver[props.name].description }}
            </p>
            <a
              class="text-primary hover:underline-offset-2 hover:underline"
              :href="iconsResolver[props.name].link"
              target="_blank"
            >
              {{ iconsResolver[props.name].link }}
            </a>
          </div>
        </template>
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>

