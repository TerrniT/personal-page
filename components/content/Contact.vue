<template>
  <div class="">
    <div class="flex flex-col gap-x-4 items-center">
      <div class="flex flex-col w-full justify-start my-auto gap-y-4">
        <h1 class="text-4xl font-bold text-foreground">
          <ContentSlot :use="$slots.title" />
        </h1>
        <span class="text-muted-foreground">
          <ContentSlot :use="$slots.description" />
        </span>
      </div>
    </div>
    <div class="my-12 grid grid-rows-1 grid-cols-8 gap-x-4">
      <div class="col-span-5 flex flex-col gap-y-4 bg-muted p-5 rounded-lg">
        <div class="grid w-full items-center gap-1.5">
          <UiLabel
            for="name"
            class="text-foreground"
          >
            Name
          </UiLabel>
          <UiInput
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Name"
            class="text-foreground"
          />
        </div>
        <div class="grid w-full items-center gap-1.5">
          <UiLabel
            for="email"
            class="text-foreground"
          >
            Email
          </UiLabel>
          <UiInput
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="text-foreground"
          />
        </div>
        <div class="grid w-full items-center gap-1.5">
          <UiLabel
            for="message"
            class="text-foreground"
          >
            Message
          </UiLabel>
          <UiTextarea
            id="message"
            v-model="formData.message"
            placeholder="Message"
            class="text-foreground"
          />
        </div>
        <UiButton>Submit it</UiButton>
      </div>
      <div class=" flex flex-col col-span-3">
        <ContentSlot :use="$slots.links" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
    title: t('contact.title') + " | Gleb Kotovsky",
    description: t('contact.description')
})

const formData = ref({
    name: null,
    email: null,
    message: null
})

</script>
