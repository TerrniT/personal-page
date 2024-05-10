<template>
  <div class="flex flex-col gap-y-2 md:flex-row md:gap-x-4 items-center text-center md:text-start  p-4 border border-zinc-600 rounded-md ">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#888888"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <rect
            width="20"
            height="8"
            x="2"
            y="6"
            rx="1"
          />
          <path d="M17 14v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8" />
        </g>
      </svg>
    </div>

    <div>
      <h3 class="text-foreground font-medium md:text-base text-lg">
        {{ $t("construct_banner.title") }}
      </h3>
      <span class="text-muted-foreground font-mono">
        {{ $t("construct_banner.description") }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
