<template>
  <div class="h-screen py-8 px-4 sticky top-0 md:flex flex-col justify-between w-[220px] hidden">
    <div>
      <LayoutLogo />

      <div class="flex flex-col gap-y-2 px-2 mt-4">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.href"
          class="hover:text-foreground text-muted-foreground transition-colors duration-150 ease-linear"
        >
          <template v-if="link.locale_key">
            {{ $t(link.locale_key) }}
          </template>
          <template v-else>
            {{ link.label }}
          </template>
        </NuxtLink>
      </div>

      <div class="flex flex-col gap-y-2 px-2 mt-12">
        <span class="text-muted-foreground font-medium uppercase text-sm"> {{ $t('elsewhere') }}</span>
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
      <LayoutLanguageChange />
      <LayoutThemeChange />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsGithubIcon from '@/components/icons/GithubIcon.vue';

interface Link {
	label: string
	href: string,
	locale_key?: string
}

type SocialLink = Link & {icon: unknown}

const links: Link[] = [
	{
		label: 'Home',
		href: '/',
		locale_key: 'link_home'
	},
	{
		label: 'Work',
		href: '/work',
		locale_key: 'link_work'
	},
	{
		label: 'Articles',
		href: '/articles',
		locale_key: 'link_articles'
	},
	// {
	// 	label: 'Designs',
	// 	href: '/designs',
	// 	locale_key: 'link_designs'
	// },
	{
		label: 'Uses',
		href: '/uses',
		locale_key: 'link_uses'
	},
	{
		label: 'Contact',
		href: '/contact',
		locale_key: 'link_contact'
	},
	{
		label: 'Photos',
		href: '/photos',
		locale_key: 'link_photos'
	},
	{
		label: 'Friends',
		href: '/friends',
		locale_key: 'link_friends'
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
