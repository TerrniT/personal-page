<template>
  <div class="flex w-full h-screen bg-background relative items-center justify-center">
    <LayoutContainer>
      <div class="flex flex-col-reverse md:flex-row items-center justify-around">
        <div class="prose">
          <template v-if="error.statusCode === 404">
            <h1 class="text-uppercase bg-secondary text-muted-foreground hover:text-secondary-foreground w-fit px-1 rounded-md">
              404 page
            </h1>
            <p class="text-3xl font-medium my-4 text-foreground">
              Page not found
            </p>
            <p class="text-xl mt-2 font-light mb-6 text-secondary-foreground">
              Sorry, that page doesn't exist.
            </p>
          </template>

          <template v-else>
            <h1 class="text-uppercase bg-secondary text-muted-foreground hover:text-secondary-foreground w-fit px-1 rounded-md">
              Dang
            </h1>
            <p class="text-3xl my-4 font-semibold text-foreground">
              {{ error.message }}
            </p>
            <p class="text-xl my-2 font-light text-secondary-foreground">
              It looks like something broke.
            </p>
            <p class="text-xl mt-2 mb-6 font-light text-secondary-foreground">
              Sorry about that.
            </p>
          </template>

          <UiButton
            class="w-full mt-5 md:w-fit md:mt-1"
            @click="handleError"
          >
            Go back
          </UiButton>
        </div>
        <div class="relative size-72 flex items-center justify-center">
          <NuxtImg
            src="/404_mockup.png"
            alt="404 mockup"
          />
        </div>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>