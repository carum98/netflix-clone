import { IMovie } from "./movie.d";
import { Movie } from "./movie";
import { IMovieDetail } from "./movie-detail.d";

export class MovieDetail implements IMovieDetail {
	id: number;
	genres: Array<String>;
	cast: Array<String>;
	direction: Array<String>;
	writers: Array<String>;
	runtime: number;
	recommendations: Array<IMovie>;

	constructor(data: any) {
		this.id = data['id'];
		this.genres = data['genres'].map((genre: any) => genre.name);
		this.runtime = data['runtime'];
		this.cast = data['credits']['cast'].map((cast: any) => cast.name);
		this.direction = data['credits']['crew'].filter((crew: any) => crew.department === 'Directing').map((crew: any) => crew.name);
		this.writers = data['credits']['crew'].filter((crew: any) => crew.department === 'Writing').map((crew: any) => crew.name);
		this.recommendations = data['recommendations']['results'].map((movie: any) => new Movie(movie));
	}
}