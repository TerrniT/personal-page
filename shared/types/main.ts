import { type ImageUrl } from './kernel'

export interface Link {
	icon: ImageUrl
	name: string
	link: string
	type: 'contact' | 'social'
}

export type Links = Link[]

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
