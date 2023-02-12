<script setup>
const [trending, originals, topRated, action, family, comedy, horror, documentaries, romance, mystery, scifi, western, animation, tv, popular] = await Promise.all([
	useFetch('/api/movies?q=trending'),
	useFetch('/api/movies?q=originals'),
	useFetch('/api/movies?q=top_rated'),
	useFetch('/api/movies?q=action'),
	useFetch('/api/movies?q=family'),
	useFetch('/api/movies?q=comedy'),
	useFetch('/api/movies?q=horror'),
	useFetch('/api/movies?q=documentaries'),
	useFetch('/api/movies?q=romance'),
	useFetch('/api/movies?q=mystery'),
	useFetch('/api/movies?q=scifi'),
	useFetch('/api/movies?q=western'),
	useFetch('/api/movies?q=animation'),
	useFetch('/api/movies?q=tv'),
	useFetch('/api/popular'),
])

const data = {
	trending: {
		title: 'Trending Now',
		movies: trending.data,
	},
	originals: {
		title: 'Netflix Originals',
		movies: originals.data,
	},
	topRated: {
		title: 'Top Rated',
		movies: topRated.data,
	},
	action: {
		title: 'Action',
		movies: action.data,
	},
	family: {
		title: 'Family',
		movies: family.data,
	},
	comedy: {
		title: 'Comedy',
		movies: comedy.data,
	},
	horror: {
		title: 'Horror',
		movies: horror.data,
	},
	documentaries: {
		title: 'Documentaries',
		movies: documentaries.data,
	},
	romance: {
		title: 'Romance',
		movies: romance.data,
	},
	mystery: {
		title: 'Mystery',
		movies: mystery.data,
	},
	scifi: {
		title: 'Sci-Fi',
		movies: scifi.data,
	},
	western: {
		title: 'Western',
		movies: western.data,
	},
	animation: {
		title: 'Animation',
		movies: animation.data,
	},
	tv: {
		title: 'TV',
		movies: tv.data,
	}
}
</script>

<template>
	<TheHeader />

	<TheBanner :popular="popular.data.value.data" />

	<template v-for="item in data">
		<h2 class="subtitle">{{ item.title }}</h2>
		<MovieCarousel :movies="item.movies.value.data" />
	</template>
</template>
