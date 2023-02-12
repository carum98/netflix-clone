<script setup lang="ts">
import { IMovieDetail } from '~~/models/movie-detail.d';
import { IMovie } from '~~/models/movie.d';

defineProps<{
	movie: IMovie;
	detail: IMovieDetail;
}>()

function closeModal() {
	const modal = document.querySelector('.movie-modal-container');

	if (!modal) return;

	document.body.removeChild(modal);
}
</script>

<template>
	<div class="movie-modal">
		<div class="movie-modal__overlay" @click="closeModal"></div>
		<div class="movie-modal__dialog">
			<section class="movie-modal__dialog-header">
				<img :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path" :alt="movie.title"
					style="width: 100%;" height="450" />

				<div class="movie-modal__dialog-actions">
					<button class="button-play">
						<IconPlay />
						Play
					</button>
					<button class="button-circle">
						<IconCheck />
					</button>
					<button class="button-circle">
						<IconLike />
					</button>
				</div>

				<button @click="closeModal" class="button-circle button-close">
					<IconClose />
				</button>
			</section>
			<section class="movie-modal__dialog-body">
				<div>
					<div class="movie-modal__dialog-summary">
						<div v-if="movie.release_date" class="year">
							{{ movie.release_date.split('-')[0] }}
						</div>
						<div class="age">
							16+
						</div>
						<div class="duration">
							{{ detail?.hasOwnProperty('runtime') ?duration(detail?.runtime || 0) :
						(detail?.seasons?.length +
							' Seasons') }}
						</div>
						<div class="quality">
							HD
						</div>
					</div>
					<p class="movie-modal__dialog-overview">
						{{ movie.overview }}
					</p>
				</div>
				<div>
					<p>
						<span class="movie-modal__dialog-label">Cast:</span>
						<span class="movie-modal__dialog-value">
							{{ detail.cast.slice(0, 3).map((cast) => cast).join(', ') }}, more
						</span>
					</p>
					<p>
						<span class="movie-modal__dialog-label">Genres:</span>
						<span class="movie-modal__dialog-value">
							{{ detail.genres.slice(0, 3).map((genre) => genre).join(', ') }}
						</span>
					</p>
				</div>
			</section>
			<section class="movie-modal__dialog-related">
				<h2>More Like This</h2>
				<div class="movie-modal__dialog-related-grid">
					<MovieRelated v-for="movie in detail.recommendations.slice(0, 6)" :key="movie.id" :movie="movie" />
				</div>
			</section>
			<section class="movie-modal__dialog-about">
				<h2><span style="font-weight: 300;">About</span> {{ movie.title }}</h2>
				<p>
					<span class="movie-modal__dialog-label">Director: </span>
					<span class="movie-modal__dialog-value">
						{{ detail.direction.slice(0, 5).map((director) => director).join(', ') }}
					</span>
				</p>
				<p>
					<span class="movie-modal__dialog-label">Writer: </span>
					<span class="movie-modal__dialog-value">
						{{ detail.writers.slice(0, 5).map((writer) => writer).join(', ') }}
					</span>
				</p>
				<p>
					<span class="movie-modal__dialog-label">Cast: </span>
					<span class="movie-modal__dialog-value">
						{{ detail.cast.slice(0, 10).map((cast) => cast).join(', ') }}, more
					</span>
				</p>
				<p>
					<span class="movie-modal__dialog-label">Genres:</span>
					<span class="movie-modal__dialog-value">
						{{ detail.genres.slice(0, 10).map((genre) => genre).join(', ') }}
					</span>
				</p>
			</section>
		</div>
	</div>
</template>

<style>
.movie-modal {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: scroll;
	padding: 4rem 0;
}

.movie-modal__overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;

	background-color: rgba(0, 0, 0, 0.8);
}

.movie-modal__dialog {
	position: relative;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 9999;

	width: 80%;
	max-width: 800px;

	background-color: var(--secondary);
	color: #fff;

	border-radius: 8px;
	padding-bottom: 3rem;
}

.movie-modal__dialog>section:not(:first-child) {
	padding: 0 3rem;
}

.movie-modal__dialog-header {
	position: relative;
	width: 100%;
	height: fit-content;
}

.movie-modal__dialog-header::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	background-image: linear-gradient(to top, #141414, transparent);
}

.movie-modal__dialog-actions {
	position: absolute;
	left: 50px;
	bottom: 70px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;

	z-index: 2;
}

.button-play {
	background-color: #fff;
	color: #000;
	border: 5px double #000;
	border-radius: 10px;
	padding: 8px 20px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;
}

.button-circle {
	background-color: transparent;
	color: #fff;
	border: 1px solid #c7c7c7;
	border-radius: 50%;
	padding: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
}

.button-circle svg {
	width: 1.2rem;
	height: 1.2rem;
}

.button-close {
	position: absolute;
	top: 15px;
	right: 15px;

	background-color: #000;

	z-index: 2;
}

.movie-modal__dialog-body {
	display: grid;
	grid-template-columns: 65% 35%;
	grid-gap: 20px;
}

.movie-modal__dialog-summary {
	display: flex;
	gap: 10px;
	font-size: 18px;
	align-items: center;
}

.movie-modal__dialog-summary .age {
	border: 1px solid #747474;
	padding: 0 0.5rem;
}

.movie-modal__dialog-summary .quality {
	border: 1px solid #747474;
	border-radius: 4px;
	padding: 0.1rem 0.4rem;
	font-size: 12px;
	height: fit-content;
}

.movie-modal__dialog-related-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
}

.movie-modal__dialog-label {
	color: #777777;
}
</style>