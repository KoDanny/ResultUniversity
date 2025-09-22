import type { ILocation } from '@@types/entities';

export function isLocationType(data: any): data is ILocation {
	if (data === null || !data || typeof data !== 'object') return false;
	return (
		'id' in data &&
		'name' in data &&
		'type' in data &&
		'dimension' in data &&
		'created' in data
	);
}
