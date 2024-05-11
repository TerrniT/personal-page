// @ts-nocheck
import { Client } from "@notionhq/client";
import { PageData } from "~/shared/types/playlist"
const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET })

const playlist_db_id = process.env.NOTION_PLAYLIST_DB || ''

const pageData: PageData = {
	favorite_tracks: [],
	albums: []
}

async function getPlaylist() {
	const data = await notion.databases.query({
	  database_id: playlist_db_id,
	  sorts: [
		{
		  property: 'order',
		  direction: 'ascending'
	  	}
	  ]
	})

	return data
}

getPlaylist().then((data) => {
	if(data && data.results.length > 0) {
		const albums = data.results.filter((item) => item.properties.type.select.name === 'album')
		const favorite_tracks = data.results.filter((item) => item.properties.type.select.name === 'favorite_tracks')

		albums.forEach((item) => {
			pageData.albums.push({
				name: item.properties.name.title[0].plain_text,
				cover: item.properties.cover.files[0].external.url,
				artist: item.properties.artist.rich_text[0].plain_text,
				prefix: item.properties.prefix.select ? item.properties.prefix.select.name : null,
				year: item.properties.year.number,
				type: item.properties.type.select.name,
				quote: item.properties.artist.rich_text && item.properties.quote.rich_text.length > 0 ? item.properties.quote.rich_text[0].plain_text : null,
			})
		})
		favorite_tracks.forEach((item) => {
			pageData.favorite_tracks.push({
				name: item.properties.name.title[0].plain_text,
				cover: item.properties.cover.files[0].external.url,
				artist: item.properties.artist.rich_text[0].plain_text,
				prefix: item.properties.prefix.select ? item.properties.prefix.select.name : null,
				year: item.properties.year.number,
				type: item.properties.type.select.name,
				quote: item.properties.artist.rich_text && item.properties.quote.rich_text.length > 0 ? item.properties.quote.rich_text[0].plain_text : null,
			})
		})
	}
})

export default defineEventHandler(() => pageData)
