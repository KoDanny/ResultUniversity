import { useEffect, useState } from 'react';
import { fetchData } from '../utils';

function getFullURL(base: string, params: string) {
	return base + '?' + params;
}

export function useFetch<T>(url: string) {
	const [error, setError] = useState<null | string>(null);
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchParams, setFetchParams] = useState<string>('');

	const fullUrl = getFullURL(url, fetchParams);

	useEffect(() => {
		setIsLoading(true);

		fetchData<T>(fullUrl)
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(() => (e instanceof Error ? e.message : 'Неизвестная ошибка'));
			})
			.finally(() => setIsLoading(false));
	}, [fullUrl]);

	function refetch<R extends Object>({ params }: { params: R }) {
		const newParams = Object.entries(params).reduce(
			(acc, [key, value]) => (acc += `${key}=${value}&`),
			''
		);
		setFetchParams(newParams);
	}

	return { data, isLoading, error, refetch };
}
