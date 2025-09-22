import type { ICharacter } from '@@types/entities';

export function isCharacterType(data: any): data is ICharacter {
	if (data === null || !data || typeof data !== 'object') return false;
	return (
		'id' in data &&
		'name' in data &&
		'status' in data &&
		'species' in data &&
		'type' in data &&
		'gender' in data &&
		'image' in data &&
		'created' in data
	);
}
