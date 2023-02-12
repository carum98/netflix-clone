import { Movie } from "~~/models/movie"
import { httpClient } from "../../lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	// Randim true or false
	const random = Math.random() >= 0.5

	const path = random ? '/movie/popular' : '/tv/popular'

	const response = await client.get(path)

	return {
		data: new Movie(response.results.at(0))
	}
})