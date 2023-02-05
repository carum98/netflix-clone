<script setup>
const { data } = await useFetch('/api/movies')
</script>

<template>
	<TheHeader />
	<h2 class="subtitle">Trending Now</h2>
	<MovieCarousel :movies="data.data" />
	<h2 class="subtitle">Family Movies</h2>
	<MovieCarousel :movies="data.data" />
	<h2 class="subtitle">Comedy Movies</h2>
	<MovieCarousel :movies="data.data" />
	<h2 class="subtitle">Horror Movies</h2>
	<MovieCarousel :movies="data.data" />
	<h2 class="subtitle">Documentaries</h2>
	<MovieCarousel :movies="data.data" />
</template>
