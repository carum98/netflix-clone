<script setup lang="ts">
import { IMovie } from '~~/models/movie.d';

const props = defineProps<{
	movie: IMovie;
	img: HTMLImageElement;
}>()

const container = ref<HTMLElement>();

onMounted(() => {
	const img = container.value!.querySelector('.movie-popover__img')!;

	img.appendChild(props.img);
})

</script>

<template>
	<div ref="container" class="movie-popover">
		<div class="movie-popover__img"></div>
		<div class="movie-popover__information">
			<section class="movie-popover__buttons">
				<button data-active>
					<IconPlay />
				</button>
				<button>
					<IconCheck />
				</button>
				<button>
					<IconLike />
				</button>
				<button>
					<IconArrowDown />
				</button>
			</section>
			<section class="movie-popover__detail">
				<div class="age">
					16+
				</div>
				<div class="duration">
					1h 30m
				</div>
				<div class="quality">
					HD
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.movie-popover {
	width: 100%;
	height: fit-content;
	position: absolute;
	background: var(--secondary);
	border-radius: 5px;
	opacity: 0;
}

.movie-popover:hover {
	transform: scale(1.5);
	opacity: 1;
	transition: transform 1s, opacity 0.1s;
	transition-delay: 0.5s;
}

.movie-popover__information {
	color: #fff;
	padding: 1rem;
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
</style>