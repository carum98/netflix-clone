import { httpClient } from "../../lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	const response = await client.get(`/movie/${event.context.params.id}`)

	return {
		response
	}
})