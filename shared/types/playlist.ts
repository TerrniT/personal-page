import type {
	ImageUrl
} from '~/shared/types/kernel'

export type Prefixes = 'explicit' | 'deluxe' | 'remastered'

export interface PlaylistItem {
	name: string
	quote: string
	prefix: Prefixes | null
	year: number
	artist: string
	type: 'album' | 'favorite_tracks'
	cover: ImageUrl
}

export interface PageData {
	albums: PlaylistItem[]
	favorite_tracks: PlaylistItem[]
}
