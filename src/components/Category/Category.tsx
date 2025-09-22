import { useEntitiesLoader } from '../../hooks';
import { CategoryItems } from './CategoryItems/CategoryItems';
import './Category.scss';

export function Category() {
	const { data, isLoading } = useEntitiesLoader();

	const items = data && <CategoryItems data={data} />;

	return (
		<div className='container category-container'>
			{isLoading ? <div>Loading</div> : items}
		</div>
	);
}
