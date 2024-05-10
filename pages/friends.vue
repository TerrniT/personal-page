<template>
  <div class="flex flex-col gap-y-4 text-foreground">
    <LayoutHeading page-key="friends" />
    <LayoutDescription page-key="friends" />
    <div class="flex flex-row gap-x-2">
      <span>{{ $t('friends.cta') }}</span>
      <NuxtLink
        :to="localePath('/contact')"
        class="hover:text-primary text-primary/90 underline-offset-1 underline decoration-dashed text-start  transition-colors duration-150 ease-linear"
      >
        {{ $t('friends.cta_link') }}
      </NuxtLink>
    </div>
    <Suspense>
      <FriendsList
        v-if="data?.friends"
        :data="data.friends"
      />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const store = useFriends()
const {pageData: data} = storeToRefs(store)

await store.fetchFriends()

if(!data.value) {
 throw createError({
  statusCode: 500,
  statusMessage: 'Api Init Error',
  data: {
    myCustomField: true
  }
})}
</script>
