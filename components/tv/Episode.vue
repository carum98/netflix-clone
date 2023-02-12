<script setup lang="ts">
import { IEpisode } from '~~/models/episode.d';

defineProps<{
	episode: IEpisode;
}>()
</script>

<template>
	<article class="container">
		<p class="counter">
			{{ episode.number }}
		</p>
		<img :src="'https://image.tmdb.org/t/p/w185/' + episode.backdrop_path" :alt="episode.name" width="130"
			height="73" />
		<div class="body">
			<div class="name">
				<h3>
					{{ episode.name }}
				</h3>
				<p>
					{{ duration(episode.runtime) }}
				</p>
			</div>
			<p class="overview">
				{{ episode.overview }}
			</p>
		</div>
	</article>
</template>

<style scoped>
.container {
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 32px 16px;
}

.counter {
	font-size: 23px;
}

.name {
	display: flex;
	justify-content: space-between;
}

.name h3 {
	font-size: 16px;
	font-weight: 500;
	margin: 0;
}

.name p {
	font-size: 14px;
	margin: 0;
}

.overview {
	color: #fff;
	font-size: 14px;
	text-overflow: ellipsis;

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>