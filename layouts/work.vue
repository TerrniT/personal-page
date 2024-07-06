<template>
  <div class="flex flex-col md:flex-row w-full bg-background relative">
    <LayoutSidebar />
    <LayoutMobileNavbar />
    <LayoutWorkContainer>
      <slot />
      <LayoutFooter />
    </LayoutWorkContainer>
  </div>
</template>
