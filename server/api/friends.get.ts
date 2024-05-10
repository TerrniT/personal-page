// @ts-nocheck
import { Client } from "@notionhq/client";
import { PageData } from "~/shared/types/friends"
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })

const friends_db_id = process.env.NOTION_FRIENDS_DB || ''

const pageData: PageData = {
	friends: [],
}

async function getFriends() {
	const data = await notion.databases.query({
	  database_id: friends_db_id,
	  sorts: [
		{
		  property: 'order',
		  direction: 'ascending'
	  	}
	  ]
	})

	return data
}

getFriends().then((data) => {
	if(data && data.results.length > 0) {
		data.results.forEach((item) => {
			const name = item.properties.name ? item.properties.name.rich_text[0].plain_text : ''
			const nickname = item.properties.nickname ? item.properties.nickname.title[0].plain_text : ''

			const link = item.properties.link ? item.properties.link.url : ''
			const avatar = item.properties.cover ? item.properties.cover.files[0].file.url : ''
			const tags = item.properties.tags ? item.properties.tags.multi_select : []

			pageData.friends.push({
				name: name,
				nickname: nickname,
				link: link,
				avatar: avatar,
				tags: tags
			})
		})
	}
})

export default defineEventHandler(() => pageData)
