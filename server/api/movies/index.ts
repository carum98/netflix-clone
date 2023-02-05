import { Movie } from "~~/models/movie"
import { httpClient } from "../../lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	const response = await client.get('/trending/all/week')

	return {
		data: response.results.map((movie: Object) => new Movie(movie))
	}
})