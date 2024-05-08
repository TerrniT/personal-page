import { type PageData } from '../shared/types/main'

export const useHero = defineStore('hero', () => {
	const pageData = ref<PageData | null>()

	const fetchHero = async () => {
		const { data } = await useFetch<PageData>('/api/init')

		if (data.value) {
			pageData.value = data.value
		}
	}

	return {
		pageData,
		fetchHero,
	}
  })