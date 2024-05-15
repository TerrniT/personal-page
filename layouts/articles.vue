<template>
  <div class="flex flex-col md:flex-row w-full bg-background relative">
    <LayoutSidebar />
    <LayoutMobileNavbar />
    <LayoutArticlesContainer>
      <NuxtPage />
      <LayoutFooter />
    </LayoutArticlesContainer>
  </div>
</template>
