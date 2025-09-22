import type { TDataEntity } from '@@types/entities';

const data = {
	characters: import('@@data/characters.json'),
	locations: import('@@data/locations.json'),
	episodes: import('@@data/episodes.json'),
};

type TDataKey = keyof typeof data;

export async function entitiesLoader(key: string): Promise<TDataEntity[]> {
	if (!(key in data)) {
		throw new Error('Нет данных');
	}
	return (await data[key as TDataKey]).default as TDataEntity[];
}
