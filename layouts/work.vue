<template>
  <div class="flex flex-col md:flex-row w-full bg-background relative">
    <LayoutSidebar />
    <LayoutMobileNavbar />
    <LayoutWorkContainer>
      <NuxtPage />
      <LayoutFooter />
    </LayoutWorkContainer>
  </div>
</template>
