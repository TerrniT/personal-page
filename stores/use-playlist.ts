import { type PageData } from '../shared/types/playlist'

export const usePlaylist = defineStore('playlist', () => {
	const pageData = ref<PageData | null>()

	const fetchPlaylist = async () => {
		const { data } = await useFetch<PageData>('/api/playlist')

		if (data.value) {
			pageData.value = data.value
		}
	}

	return {
		pageData,
		fetchPlaylist,
	}
})