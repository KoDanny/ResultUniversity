import { useFetch } from './hooks';
import type { IPostsFetchParams } from './types';
import type { IPostData } from './types/Post';

export function App() {
	const { data, isLoading, error, refetch } = useFetch<IPostData[]>(
		'https://jsonplaceholder.typicode.com/posts'
	);

	function onRefetchClick() {
		refetch<IPostsFetchParams>({
			params: {
				_limit: 5,
				userId: 3,
			},
		});
	}

	return (
		<>
			<button onClick={onRefetchClick}>Повторный запрос</button>
			<div>
				{isLoading && 'Загрузка...'}
				{error}
				{data &&
					!isLoading &&
					data.map((item) => (
						<p key={item.id}>
							{item.id}: {item.title}
						</p>
					))}
			</div>
		</>
	);
}
