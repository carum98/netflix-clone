import { IEpisode } from './episode.d';

export class Episode implements IEpisode {
	id: number;
	name: string;
	overview: string;
	number: number;
	backdrop_path: string;
	runtime: number;

	constructor(data: any) {
		this.id = data['id'];
		this.name = data['name'];
		this.overview = data['overview'];
		this.number = data['episode_number'];
		this.backdrop_path = data['still_path'];
		this.runtime = data['runtime'];
	}
}