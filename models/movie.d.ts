export enum TYPE {
	MOVIE = 'movie',
	TV = 'tv'
}

export interface IMovie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	type: TYPE;
}