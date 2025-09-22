import type { IEpisode } from '@@types/entities';

export function isEpisodeType(data: any): data is IEpisode {
	if (data === null || !data || typeof data !== 'object') return false;
	return (
		'id' in data &&
		'name' in data &&
		'air_date' in data &&
		'episode' in data &&
		'created' in data
	);
}
