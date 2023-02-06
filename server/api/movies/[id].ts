import { MovieDetail } from "~~/models/movie-detail"
import { httpClient } from "../../lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	const response = await client.get(`/movie/${event.context.params.id}?append_to_response=credits,videos,recommendations`)

	return new MovieDetail(response)
})