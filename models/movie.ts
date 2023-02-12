import { IMovie, TYPE } from './movie.d';

export class Movie implements IMovie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	type: TYPE;

	constructor(data: any) {
		this.id = data['id'];
		this.title = data['original_title'];
		this.overview = data['overview'];
		this.poster_path = data['poster_path'];
		this.backdrop_path = data['backdrop_path'];
		this.release_date = data['release_date'] || data['first_air_date'];
		this.type = data['first_air_date'] ? TYPE.TV : TYPE.MOVIE;
	}
}