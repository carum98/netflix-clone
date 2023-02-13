import { createVNode, render } from 'vue';
import { IMovie } from '~~/models/movie.d';
import { IMovieDetail } from '~~/models/movie-detail.d';

export const useModal = () => {
	function show(movie: IMovie, detail: IMovieDetail) {
		const MovieModal = defineAsyncComponent(() => import('~/components/movie/Modal.vue'));

		const modal = document.createElement('div');

		modal.classList.add('movie-modal-container');

		const instance = createVNode(MovieModal, {
			movie,
			detail,
			key: movie.id,
		});

		render(instance, modal);

		document.body.appendChild(modal);
	}

	return {
		show,
	};
}