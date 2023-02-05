import { IMovie } from './movie.d';

export class Movie implements IMovie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;

	constructor(data: any) {
		this.id = data['id'];
		this.title = data['original_title'];
		this.overview = data['overview'];
		this.poster_path = data['poster_path'];
		this.backdrop_path = data['backdrop_path'];
		this.release_date = data['release_date'];
	}
}