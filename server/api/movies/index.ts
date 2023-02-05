import { httpClient } from "../../lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	const response = await client.get('/trending/all/week')

	return {
		response
	}
})