<template>
  <div class="flex flex-col md:flex-row w-full bg-background relative">
    <LayoutSidebar />
    <LayoutMobileNavbar />
    <LayoutContainer>
      <!-- <NuxtPage /> -->
      <slot />
      <LayoutFooter />
    </LayoutContainer>
  </div>
</template>
