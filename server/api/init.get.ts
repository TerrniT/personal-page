// @ts-nocheck
import { Client } from "@notionhq/client";
import  { PageData } from '../../shared/types/hero'
import { ImageUrl } from '../../shared/types/kernel'

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })

const hero_page_id = process.env.NOTION_HERO_CONTENT_ID || ''
const skills_database_id = process.env.NOTION_SKILLS_DB_ID || ''
const works_database_id = process.env.NOTION_WORKS_DB_ID || ''


const DEFAULT_PAGE_DATA: PageData = {
	hero_content: {
		// heading: "",
		// description: "",
		image: "",
		number_blocks: [],
	},
	skills: {
		hard_skills: [],
		expertise: [],
		languages: [],
	},
	works: {
		projects: [],
		articles: [],
		recent_articles: [],
		recent_projects: []
	}
}

const pageData: PageData = DEFAULT_PAGE_DATA as PageData;

async function getSkills() {
  const data = await notion.databases.query({
    database_id: skills_database_id,
	sorts: [
		{
		  property: 'level',
		  direction: 'descending'
	  	}
	  ]
  })

  return data
}


async function getWorks() {
	const data = await notion.databases.query({
	  database_id: works_database_id,
	  sorts: [
		{
		  property: 'created_at',
		  direction: 'ascending'
	  	}
	  ]
	})

	return data
}


async function getHeroContent() {
	const data = await notion.blocks.children.list({
		block_id: hero_page_id
	})
	return data
}

getHeroContent().then((data) => {
	if(data && data.results.length > 0) {
		data.results.forEach((item) => {
			if(item.type === 'bulleted_list_item') {
				const formattedItem = (item.bulleted_list_item.rich_text[0].plain_text as string).split('|')
				pageData.hero_content.number_blocks.push({label: formattedItem[0], description: formattedItem[1]})
			} else if(item.type === 'image') {
				pageData.hero_content.image = item.image.file.url
			}
		})
	}
})

getSkills().then((data) => {
	data.results.forEach((item) => {
		const name = item.properties.name ? item.properties.name.title[0].plain_text : ''
		const icon = item.icon ? item.icon.external.url : ''
		const type = item.properties.type.select.name as SkillType
		const level = item.properties.level.status.name as SkillLevel

		pageData.skills[type].push({
			icon: icon,
			name: name,
			level: level,
			type: type
		})
	})
})

getWorks().then((data) => {
	const COUNT = 10

	const articles = data.results.filter((item) => item.properties.type.select.name === 'article')

	if(!articles || articles.length === 0) {
		pageData.works.articles = []
	} else {
		const latestArticles = articles.filter((val, index, arr) => index > arr.length - COUNT - 1)
		articles.forEach((item) => {
			pageData.works.articles.push({
				label: item.properties.label.title[0].plain_text,
				topics: item.properties.topics.multi_select,
				tags: item.properties.tags.multi_select,
				languages: item.properties.languages.multi_select,
				type: item.properties.type.select.name as 'article',
				created_at: item.created_time,
				cover: item.properties.cover.file ? item.properties.cover.file.url as ImageUrl : null
			})
		})
		latestArticles.forEach((item) => {
			pageData.works.recent_articles.push({
				label: item.properties.label.title[0].plain_text,
				topics: item.properties.topics.multi_select,
				tags: item.properties.tags.multi_select,
				languages: item.properties.languages.multi_select,
				type: item.properties.type.select.name as 'article',
				created_at: item.created_time,
				cover: item.properties.cover.file ? item.properties.cover.file.url as ImageUrl : null
			})
		})
	}

	const projects = data.results.filter((item) => item.properties.type.select.name === 'project')

	if(!projects || projects.length === 0) {
		pageData.works.projects = []
	} else {
		const latetsProjects = projects.filter((val, index, arr) => index > arr.length - COUNT - 1)

		projects.forEach((item) => {
			pageData.works.projects.push({
				label: item.properties.label.title[0].plain_text,
				topics: item.properties.topics.multi_select,
				tags: item.properties.tags.multi_select,
				languages: item.properties.languages.multi_select,
				type: item.properties.type.select.name as 'project',
				created_at: item.created_time,
				cover: item.properties.cover.file ? item.properties.cover.file.url as ImageUrl : null
			})
		})

		latetsProjects.forEach((item) => {
			pageData.works.recent_projects.push({
				label: item.properties.label.title[0].plain_text,
				topics: item.properties.topics.multi_select,
				tags: item.properties.tags.multi_select,
				languages: item.properties.languages.multi_select,
				type: item.properties.type.select.name as 'project',
				created_at: item.created_time,
				cover: item.properties.cover.file ? item.properties.cover.file.url as ImageUrl : null
			})
		})
	}
})


export default defineEventHandler(() => pageData)