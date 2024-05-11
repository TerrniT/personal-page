// @ts-nocheck
import { Client } from "@notionhq/client";
import { PageData } from "~/shared/types/uses"
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })

const uses_dd_id = process.env.NOTION_USES_DB || ''

const pageData: PageData = {
	workstation: [],
	devtools: [],
	other_software: [],
	misc: [],
}

async function getUses() {
	const data = await notion.databases.query({
	  database_id: uses_dd_id,
	  sorts: [
		{
		  property: 'order',
		  direction: 'ascending'
	  	}
	  ]
	})

	return data
}

getUses().then((data) => {
	if(data && data.results.length > 0) {
		const workstation = data.results.filter((item) => item.properties.type.select.name === 'workstation')
		const devtools = data.results.filter((item) => item.properties.type.select.name === 'devtools')
		const other_software = data.results.filter((item) => item.properties.type.select.name === 'other_software')
		const misc = data.results.filter((item) => item.properties.type.select.name === 'misc')


		workstation.forEach((item) => {
			pageData.workstation.push({
				name: item.properties.name.title[0].plain_text,
				description: item.properties.description.rich_text[0].plain_text,
				type: item.properties.type.select.name,
				link: item.properties.link.url
			})
		})
		devtools.forEach((item) => {
			pageData.devtools.push({
				name: item.properties.name.title[0].plain_text,
				description: item.properties.description.rich_text[0].plain_text,
				type: item.properties.type.select.name,
				link: item.properties.link.url
			})
		})
		other_software.forEach((item) => {
			pageData.other_software.push({
				name: item.properties.name.title[0].plain_text,
				description: item.properties.description.rich_text[0].plain_text,
				type: item.properties.type.select.name,
				link: item.properties.link.url
			})
		})
		misc.forEach((item) => {
			pageData.misc.push({
				name: item.properties.name.title[0].plain_text,
				description: item.properties.description.rich_text[0].plain_text,
				type: item.properties.type.select.name,
				link: item.properties.link.url
			})
		})
	}
})

export default defineEventHandler(() => pageData)
