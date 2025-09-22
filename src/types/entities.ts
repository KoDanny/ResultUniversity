export interface ICharacter {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	created: string;
}

export interface ILocation {
	id: 3;
	name: 'Citadel of Ricks';
	type: 'Space station';
	dimension: 'unknown';
	created: '2017-11-10T13:08:13.191Z';
}

export interface IEpisode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	created: string;
}

export type TDataEntity = ICharacter | IEpisode | ILocation;
