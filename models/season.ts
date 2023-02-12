import { ISeason } from './season.d';

export class Season implements ISeason {
	id: number;
	name: string;
	number: number;
	count: number;

	constructor(data: any) {
		this.id = data['id'];
		this.name = data['name'];
		this.number = data['season_number'];
		this.count = data['episode_count'];
	}
}