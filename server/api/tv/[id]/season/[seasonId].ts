import { Episode } from "~~/models/episode"
import { httpClient } from "~~/server/lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	const response = await client.get(`/tv/${event.context.params.id}/season/${event.context.params.seasonId}`)

	return {
		episodes: response.episodes.filter((episode: any) => episode.still_path).map((episode: Object) => new Episode(episode))
	}
})