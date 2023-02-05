<script setup lang="ts">
import { IMovie } from '~~/models/movie.d';

defineProps<{
	movies: IMovie[];
}>();

const carousel = ref<HTMLElement>();

onMounted(() => {
	const element = carousel.value!;

	const buttons = element.querySelectorAll('button');
	const cards = element.querySelectorAll('.movie-card');
	const list = element.querySelector('.carousel-list')!;

	buttons[0].addEventListener('click', () => {

		list.scrollBy({
			left: -cards[0].clientWidth * 4,
			behavior: 'smooth'
		});
	});

	buttons[1].addEventListener('click', () => {
		console.log(list);
		list.scrollBy({
			left: cards[0].clientWidth * 4,
			behavior: 'smooth'
		});
	});
});
</script>

<template>
	<section class="carousel-wrapper" ref="carousel">
		<button class="arrow-left">
			<svg width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z" />
			</svg>
		</button>
		<div class="carousel-list">
			<MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
		</div>
		<button class="arrow-right">
			<svg width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor"
					d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
			</svg>
		</button>
	</section>
</template>

<style scoped>
.carousel-wrapper {
	position: relative;
	display: flex;
}

.carousel-wrapper>[class^="arrow"] {
	position: absolute;
	height: 100%;
	background-color: #00000026;
	border: 0;
	color: #fff;
	padding: 0;
	opacity: 0;
	transition: opacity 0.3s;
	cursor: pointer;
}

.carousel-wrapper:hover>[class^="arrow"] {
	opacity: 1;
}

.arrow-left {
	left: 0;
}

.arrow-right {
	right: 0;
}

.carousel-list {
	display: flex;
	gap: 10px;
	overflow-x: scroll;
	padding: 0 3rem;
}

.carousel-list::-webkit-scrollbar {
	display: none;
}
</style>

