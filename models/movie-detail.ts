import { IMovieDetail } from "./movie-detail.d";

export class MovieDetail implements IMovieDetail {
	id: number;
	genres: Array<String>;
	runtime: number;

	constructor(data: any) {
		this.id = data['id'];
		this.genres = data['genres'].map((genre: any) => genre.name);
		this.runtime = data['runtime'];
	}
}