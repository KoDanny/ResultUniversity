import type { TDataEntity } from '@@types/entities';
import { NavLink } from 'react-router-dom';

export function CategoryItems({ data }: { data: TDataEntity[] }) {
	return data.map(({ id, name }, index) => {
		return (
			<NavLink key={id} to={String(id)} state={data[index]} className='link'>
				{name.toUpperCase()}
			</NavLink>
		);
	});
}
