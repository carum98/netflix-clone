<script setup lang="ts">
import { createVNode, render } from 'vue';
import { IMovieDetail } from '~~/models/movie-detail.d';
import { IMovie, TYPE } from '~~/models/movie.d';

const props = defineProps<{
	movie: IMovie;
	img: HTMLImageElement;
}>()

const container = ref<HTMLElement>();
const detail = ref<IMovieDetail>();

$fetch(`/api/${props.movie.type === TYPE.MOVIE ? 'movies' : 'tv'}/${props.movie.id}`).then((response) => {
	if (!response) return;

	detail.value = response as unknown as IMovieDetail;
});

const MovieModal = defineAsyncComponent(() => import('~/components/movie/Modal.vue'));

const showModal = () => {
	const modal = document.createElement('div');

	modal.classList.add('movie-modal-container');

	const instance = createVNode(MovieModal, {
		movie: props.movie,
		detail: detail.value,
		key: props.movie.id,
	});

	render(instance, modal);

	document.body.appendChild(modal);
}

const popover = usePopover();
</script>

<template>
	<div ref="container" class="movie-popover">
		<div class="movie-popover__img">
			<img :src="img.src" :height="img.height" />
		</div>
		<div class="movie-popover__information">
			<section class="movie-popover__buttons">
				<button data-active>
					<IconPlay />
				</button>
				<button @mouseenter="popover.show($event.target, 'Add to My List')">
					<IconAdd />
				</button>
				<button @mouseenter="popover.show($event.target, 'I like this')">
					<IconLike />
				</button>
				<button
					@mouseenter="popover.show($event.target, detail?.hasOwnProperty('runtime') ? 'More info' : 'Episodes & Info')"
					@click="showModal">
					<IconArrowDown />
				</button>
			</section>
			<section class="movie-popover__detail">
				<div class="age">
					16+
				</div>
				<div>
					{{ detail?.hasOwnProperty('runtime') ?duration(detail?.runtime || 0) : (detail?.seasons?.length +
					' Seasons') }}
				</div>
				<div class="quality">
					HD
				</div>
			</section>
			<section class="movie-popover__genres">
				<span v-for="genre in detail?.genres">
					{{ genre }}
				</span>
			</section>
		</div>
	</div>
</template>

<style scoped>
.movie-popover {
	width: 100%;
	height: fit-content;
	position: absolute;
	border-radius: 5px;
	transition: transform 0.5s;
}

.movie-popover:hover {
	transform: scale(1.5);
	transition-delay: 0.3s;
}

.movie-popover:hover .movie-popover__information {
	opacity: 1;
	transition-delay: 0.3s;
}

.movie-popover__information {
	color: #fff;
	padding: 1rem;
	background: var(--secondary);
	opacity: 0;
	transition: opacity 0.3s;
}

.movie-popover__buttons {
	display: flex;
	gap: 10px;
}

.movie-popover__buttons button {
	width: 2rem;
	height: 2rem;
	background: #232323;
	border: 2px solid #919191;
	color: #fff;
	border-radius: 50%;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
}

.movie-popover__buttons button svg {
	width: 0.8rem;
	height: 0.8rem;
}

.movie-popover__buttons button:last-of-type {
	margin-left: auto;
}

.movie-popover__buttons button[data-active] {
	background: #fff;
	color: var(--border-color);
	border-color: var(--border-color);
}

.movie-popover__detail {
	display: flex;
	gap: 10px;
	margin-top: 1rem;
	font-size: 13px;
	align-items: center;
}

.age {
	border: 1px solid #747474;
	padding: 0 0.5rem;
}

.quality {
	border: 1px solid #747474;
	border-radius: 4px;
	padding: 0.1rem 0.4rem;
	font-size: 9px;
	height: fit-content;
}

.movie-popover__genres {
	display: flex;
	gap: 5px;
	font-size: 12px;
	margin-top: 1rem;
	align-items: center;
}

.movie-popover__genres span:not(:first-of-type):before {
	content: '•';
	margin-right: 5px;
	font-size: 15px;
	color: #646464;
}
</style>