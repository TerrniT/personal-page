import type {
	ImageUrl
} from '~/shared/types/kernel'
export interface UsesItem {
	name: string
	description: string
	type: 'devtools' | 'workstation' | 'other_software' | 'misc'
	link: ImageUrl
}

export interface PageData {
	workstation: UsesItem[]
	devtools: UsesItem[]
	other_software: UsesItem[]
	misc: UsesItem[]
}
