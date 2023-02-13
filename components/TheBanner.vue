<script setup lang="ts">
import { IMovieDetail } from '~~/models/movie-detail.d';
import { IMovie, TYPE } from '~~/models/movie.d';

const props = defineProps<{
	popular: IMovie;
}>();

const modal = useModal();

function moreInfo() {
	$fetch(`/api/${props.popular.type === TYPE.MOVIE ? 'movies' : 'tv'}/${props.popular.id}`).then((response) => {
		if (!response) return;

		let detail = response as unknown as IMovieDetail;

		modal.show(props.popular, detail);
	});
}

</script>

<template>
	<section class="banner">
		<div class="img">
			<img :src="'https://image.tmdb.org/t/p/w1280' + popular.backdrop_path" :alt="popular.title" loading="lazy"
				width="100" />
		</div>

		<p class="overview">
			{{ popular.overview }}
		</p>

		<div class="actions">
			<button class="button-play">
				<IconPlay />
				Play
			</button>

			<button class="button-info" @click="moreInfo">
				<IconInfo />
				More Info
			</button>
		</div>
	</section>
</template>

<style scoped>
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.banner {
	position: relative;
	width: 100%;
	height: 75vh;
}

.actions {
	position: absolute;
	bottom: 50px;
	left: 3rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	z-index: 1;
}

.overview {
	position: absolute;
	bottom: 100px;
	left: 3rem;
	color: #fff;
	width: 40%;
	font-size: 19px;
	z-index: 1;
}

.img {
	position: relative;
}

.img::before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	height: 100%;

	background-image: linear-gradient(to top, #141414, transparent);
}

.button-play {
	background-color: #fff;
	color: #000;
	border-radius: 5px;
	border: none;
	padding: 10px 25px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;
}

.button-info {
	background-color: rgba(109, 109, 110, 0.7);
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 10px 25px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;
}
</style>