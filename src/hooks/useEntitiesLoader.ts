import { routes } from '@@constants';
import type { ICharacter, TDataEntity } from '@@types/entities';
import { entitiesLoader } from '@@utils';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function useEntitiesLoader() {
	const { category } = useParams();
	const [data, setData] = useState<TDataEntity[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (category) {
			setIsLoading(true);
			entitiesLoader(category)
				.then((entities) => {
					setData(entities);
				})
				.catch(() => navigate(routes.page404()))
				.finally(() => setIsLoading(false));
		}
	}, [category]);

	switch (category) {
		case 'character':
			return { data, isLoading } as {
				data: ICharacter[];
				isLoading: boolean;
			};
	}

	return { data, isLoading, category };
}
