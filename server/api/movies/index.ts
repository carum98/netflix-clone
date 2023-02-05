import { Movie } from "~~/models/movie"
import { httpClient } from "../../lib/httpClient"

export default defineEventHandler(async (event) => {
	const client = httpClient()

	const { q } = getQuery(event)

	let path = ''

	switch (q) {
		case 'originals':
			path = '/discover/tv?with_networks=213'
			break;
		case 'top_rated':
			path = '/movie/top_rated'
			break;
		case 'action':
			path = '/discover/movie?with_genres=28'
			break;
		case 'comedy':
			path = '/discover/movie?with_genres=35'
			break;
		case 'horror':
			path = '/discover/movie?with_genres=27'
			break;
		case 'romance':
			path = '/discover/movie?with_genres=10749'
			break;
		case 'mystery':
			path = '/discover/movie?with_genres=9648'
			break;
		case 'sci_fi':
			path = '/discover/movie?with_genres=878'
			break;
		case 'western':
			path = '/discover/movie?with_genres=37'
			break;
		case 'animation':
			path = '/discover/movie?with_genres=16'
			break;
		case 'tv':
			path = '/discover/movie?with_genres=10770'
			break;
		default:
			path = '/trending/all/week'
			break;
	}

	const response = await client.get(path)

	return {
		data: response.results.map((movie: Object) => new Movie(movie))
	}
})