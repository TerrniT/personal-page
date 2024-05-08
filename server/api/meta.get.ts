import { Client } from "@notionhq/client";
import  { type Links } from '../../shared/types/main'

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })
const links_database_id = process.env.NOTION_LINKS_DB_ID || ''

const links: Links = []
async function getLinks() {
	const data = await notion.databases.query({
	  database_id: links_database_id,
	})

	return data
}

getLinks().then((data) => {
	data.results.forEach((item) => {
		links.push({
			icon: item.icon ? item.icon.external.url : '',
			name: item.properties.name.title[0].plain_text,
			link: item.properties.link.url || '',
			type: item.properties.type.select ? item.properties.type.select.name : ''
		})
	})
})

export default defineEventHandler(() => links)
