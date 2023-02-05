enum Method {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

const runtimeConfig = useRuntimeConfig()

const fetcher = async (url: string, method: Method, body?: any) => {
	const response = await fetch('https://api.themoviedb.org/3' + url, {
		method,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${runtimeConfig.apiToken}`
		}
	})

	return response.json()
}

export const httpClient = function () {
	return {
		get: (url: string) => fetcher(url, Method.GET),
		post: (url: string, body: any) => fetcher(url, Method.POST, body),
		put: (url: string, body: any) => fetcher(url, Method.PUT, body),
		delete: (url: string) => fetcher(url, Method.DELETE)
	}
}