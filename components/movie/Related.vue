<script setup lang="ts">
import { IMovie } from '~~/models/movie.d';

defineProps<{
	movie: IMovie;
}>();
</script>

<template>
	<article class="container">
		<img :src="'https://image.tmdb.org/t/p/w300' + movie.backdrop_path" :alt="movie.title" style="width: 100%;"
			height="128" />

		<div class="body">
			<sectin class="summary">
				<div>
					<p class="match">
						89% Match
					</p>
					<div>
						<span class="age">
							16+
						</span>
						<span class="year">
							{{ movie.release_date.split('-')[0] }}
						</span>
					</div>
				</div>

				<button class="button-circle">
					<IconAdd />
				</button>
			</sectin>
			<p class="overview">{{ movie.overview }}</p>
		</div>
	</article>
</template>

<style scoped>
.container {
	background-color: #2f2f2f;
}

.container>img {
	border-radius: 4px 4px 0 0;
}

.body {
	padding: 0.5rem 1rem 0 1rem;
}

.summary {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.summary .age {
	border: 1px solid #747474;
	padding: 0 0.5rem;
}

.summary .match {
	font-size: 17px;
	font-weight: 500;
	color: #46d369;
	margin-bottom: 5px;
	margin-top: 0;
}

.overview {
	margin-top: 1rem;
	margin-bottom: 0;
	font-size: 13px;
	color: #d2d2d2;
}
</style>