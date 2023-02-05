<script setup lang="ts">
import { IMovie } from '~~/models/movie.d';

defineProps<{
	movie: IMovie;
}>()
</script>

<template>
	<article class="movie-card">
		<img :src="'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path" :alt="movie.title" loading="lazy" />
	</article>
</template>

<style scoped>
img {
	border-radius: 5px;
}
</style>