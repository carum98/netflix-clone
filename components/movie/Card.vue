<script setup lang="ts">
import { createVNode, render } from 'vue';
import { IMovie } from '~~/models/movie.d';

const props = defineProps<{
	movie: IMovie;
}>()

const card = ref<HTMLElement>();

const MoviePopover = defineAsyncComponent(() => import('~/components/movie/Popover.vue'));

let timer: number;

onMounted(() => {
	card.value!.addEventListener('mouseenter', async () => {
		clearTimeout(timer);

		const { promise, id } = delay(1000);

		timer = id;

		await promise;

		const rect = card.value!.getBoundingClientRect();
		const img = card.value!.querySelector('img')!.cloneNode() as HTMLImageElement;

		const { top, left, height, width } = rect;

		const popover = document.createElement('div');

		popover.classList.add('movie-popover-container');

		popover.style.width = `${width}px`;
		// popover.style.height = `${height}px`;

		popover.style.top = `${top}px`;
		popover.style.left = `${left}px`;
		popover.style.right = `${left - width}px`;
		popover.style.bottom = `${top}px`;

		card.value!.appendChild(popover);

		const instance = createVNode(MoviePopover, {
			movie: props.movie,
			img,
			key: props.movie.id,
		});

		render(instance, popover);
	});

	card.value!.addEventListener('mouseleave', () => {
		clearTimeout(timer);

		const popover = card.value!.querySelector('.movie-popover-container');

		popover?.remove();
	});
});
</script>

<template>
	<article ref="card" class="movie-card">
		<img :src="'https://image.tmdb.org/t/p/w300' + movie.backdrop_path" :alt="movie.title" width="300" height="169"
			loading="lazy" />
	</article>
</template>

<style scoped>
img {
	border-radius: 5px;
}

.movie-card {
	cursor: pointer;
}
</style>