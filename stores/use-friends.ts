import { type PageData } from '../shared/types/friends'

export const useFriends = defineStore('friends', () => {
	const pageData = ref<PageData | null>()

	const fetchFriends = async () => {
		const { data } = await useFetch<PageData>('/api/friends')

		if (data.value) {
			pageData.value = data.value
		}
	}

	return {
		pageData,
		fetchFriends,
	}
})