<template>
  <div class="h-screen py-8 px-4 sticky top-0 flex flex-col justify-between">
    <div>
      <NuxtLink to="/">
        <NuxtImg
          src="/cat_logo.png"
          class="w-16 h-16 sepia-0 hover:sepia transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
          alt="cat logo"
        />
      </NuxtLink>

      <div class="flex flex-col gap-y-2 px-2 mt-4">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.href"
          class="hover:text-foreground text-muted-foreground transition-colors duration-150 ease-linear"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex flex-col gap-y-2 px-2 mt-12">
        <span class="text-muted-foreground font-medium">ELSEWHERE</span>
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.label"
          :to="link.href"
          target="_blank"
          class="hover:text-foreground text-muted-foreground transition-all duration-150 ease-linear hover:underline underline-offset-2 flex items-center gap-x-2"
        >
          {{ link.label }}
          <component
            :is="link.icon"
            class="size-4"
          />
        </NuxtLink>
      </div>
    </div>

    <div class="px-2 flex flex-col gap-y-3">
      <UiHoverCard>
        <UiHoverCardTrigger as-child>
          <UiButton
            aria-label="change language"
            variant="ghost"
            class="p-1 size-8 hover:bg-secondary"
          >
            <IconsLanguageIcon class="size-6" />
          </UiButton>
        </UiHoverCardTrigger>
        <UiHoverCardContent class="mx-2 w-60">
          <div class="flex justify-between space-x-4">
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">
                @vuejs
              </h4>
              <p class="text-sm">
                Progressive JavaScript framework for building modern web interfaces.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined January 2014
                </span>
              </div>
            </div>
          </div>
        </UiHoverCardContent>
      </UiHoverCard>

      <UiHoverCard>
        <UiHoverCardTrigger as-child>
          <UiButton
            aria-label="change theme"
            variant="ghost"
            class="p-1 size-8 hover:bg-secondary"
          >
            <IconsThemeIcon class="size-5" />
          </UiButton>
        </UiHoverCardTrigger>
        <UiHoverCardContent class="mx-2 w-60">
          <div class="flex justify-between space-x-4">
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">
                @vuejs
              </h4>
              <p class="text-sm">
                Progressive JavaScript framework for building modern web interfaces.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined January 2014
                </span>
              </div>
            </div>
          </div>
        </UiHoverCardContent>
      </UiHoverCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsGithubIcon from '@/components/icons/GithubIcon.vue';

interface Link {
	label: string
	href: string
}

type SocialLink = Link & {icon: unknown}

const links: Link[] = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Work',
		href: '/work'
	},
	{
		label: 'Articles',
		href: '/articles'
	},
	{
		label: 'Uses',
		href: '/uses'
	},
	{
		label: 'Contact',
		href: '/contact'
	},
	{
		label: 'Photos',
		href: '/photos'
	},
]

// from api init
const socialLinks: SocialLink[] = [
	{
		label: 'Twitter',
		href: 'https://twitter.com/nyannyan_dev',
		icon: IconsGithubIcon
	},
	{
		label: 'GitHub',
		href: 'https://github.com/nyannyan-dev',
		icon: IconsGithubIcon

	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/nyannyan-dev/',
		icon: IconsGithubIcon
	},
	{
		label: 'Youtube',
		href: 'https://www.youtube.com/@nyannyan_dev',
		icon: IconsGithubIcon

	}
]
</script>
