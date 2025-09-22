import { routes } from '@@constants';
import { isCharacterType, isEpisodeType, isLocationType } from '@@utils';
import { Navigate, useLocation } from 'react-router-dom';
import { Episode } from './Episode/Episode';
import { Character } from './Character/Character';
import { Location } from './Location/Location';
import type { TDataEntity } from '@@types/entities';

export function Entity() {
	const { state }: { state: TDataEntity } = useLocation();

	if (isEpisodeType(state)) {
		return <Episode {...state} />;
	} else if (isCharacterType(state)) {
		return <Character {...state} />;
	} else if (isLocationType(state)) {
		return <Location {...state} />;
	} else {
		return <Navigate to={routes.page404()} />;
	}
}
