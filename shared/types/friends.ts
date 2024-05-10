import type {
	ImageUrl,
	Uuid
} from '~/shared/types/kernel'
export interface Friend {
	name: string
	nickname: string
	avatar: ImageUrl
	tags: {
		id: Uuid
		name: string
		color: string
	}[] | []
	link: string
}

export type Friends = Friend[]


export interface PageData {
	friends: Friends
}
