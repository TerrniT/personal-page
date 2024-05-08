import type { Links } from "~/shared/types/main"

interface RouteLink {
	label: string
	href: string,
	locale_key?: string
}

export const useLayout = defineStore('layout', () => {
	const socialLinks = ref<Links>([])
	const contactLinks = ref<Links>([])
	const routeLinks = ref<RouteLink[]>([
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
	])


	const fetchLinks = async () => {
		const { data } = await useFetch<Links>('/api/meta')

		if (data.value) {
			socialLinks.value = data.value.filter(item => item.type === 'social')
			contactLinks.value = data.value.filter(item => item.type === 'contact')
		}
	}
	// const setSocialLinks = (data: Links) => {
	// 	socialLinks.value = data
	// 	console.log(socialLinks.value)
	// }

	return { socialLinks, contactLinks, routeLinks, fetchLinks }
})