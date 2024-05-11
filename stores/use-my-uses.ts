import { type PageData } from '../shared/types/uses'

export const useMyUses = defineStore('uses', () => {
	const pageData = ref<PageData | null>()

	const fetchUses = async () => {
		const { data } = await useFetch<PageData>('/api/uses')

		if (data.value) {
			pageData.value = data.value
		}
	}

	return {
		pageData,
		fetchUses,
	}
})