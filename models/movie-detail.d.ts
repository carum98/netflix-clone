export interface IMovieDetail {
	id: number;
	genres: Array<String>;
	cast: Array<String>;
	direction: Array<String>;
	writers: Array<String>;
	runtime: number;
	recommendations: Array<IMovie>;
}