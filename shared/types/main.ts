import {type ImageUrl, type Uuid} from './kernel'

export interface Link {
	icon: ImageUrl
	name: string
	link: string
	type: 'contact' | 'social'
}

export type Links = Link[]
export interface WorkItem <T> {
	label: string
	topics: {
		id: Uuid
		name: string
		color: string
	}[]
	languages: string
	tags: {
		id: Uuid
		name: string
		color: string
	}[] | []
	cover: ImageUrl
	created_at: string
	type: T
}

export type SkillType = 'hard_skills' | 'expertise' | 'languages'

export type SkillLevel = 'Intrested In' | 'Beginner' | 'Currently Learning' | 'Intermediate' | 'Native Or Bilingual' | 'Advance'

export type SkillItem = {
	icon: ImageUrl
	name: string
	level: SkillLevel
	type: SkillType
}

export type Skills = Record<SkillType, SkillItem[]>

export interface PageData {
	hero_content: {
		heading: string
		description: string
		image: string
		number_blocks: {label: string, description: string}[]
	}
	skills: Skills
	works: {
		projects: WorkItem<'project'>[]
		recent_projects: WorkItem<'project'>[]
		recent_articles: WorkItem<'article'>[]
		articles: WorkItem<'article'>[]
	}
	// links: Links
}


// type DatabaseLinksItem = PostResult & {
//     properties: {
//         name: PropertyValueTitle
//         link: PropertyValueUrl
// 		type: PropertyValueSelect
//     }
// }

// type DatabaseWorksItem = PostResult & {
//     properties: {
//         label: PropertyValueTitle
//         tags: PropertyValueMultiSelect
//         languages: PropertyValueMultiSelect
//         topics: PropertyValueMultiSelect
//         cover: PropertyValueMultiSelect
//         created_at: PropertyValueDate
// 		type: PropertyValueSelect
//     }
// }

// type DatabaseSkillsItem = PostResult & {
//     properties: {
//         label: PropertyValueTitle,
// 		level: PropertyValueStatus,
// 		type: PropertyValueSelect,
// 		description: PropertyValueRichText
//     }
// }
