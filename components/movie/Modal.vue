<script setup lang="ts">
import { IMovieDetail } from '~~/models/movie-detail.d';
import { IMovie } from '~~/models/movie.d';

const props = defineProps<{
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
					style="width: 100%;" />

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
							{{ duration(detail?.runtime || 0) }}
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

				</div>
			</section>
		</div>
	</div>
</template>

<style>
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
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;

	width: 80%;
	max-width: 800px;
	height: 80%;
	max-height: 800px;

	background-color: var(--secondary);

	border-radius: 8px;
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
	padding: 0 3rem;
	color: #fff;
	width: 70%;
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
</style>