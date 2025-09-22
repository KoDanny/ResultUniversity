import type { ILocation } from '@@types/entities';
import './Location.scss';

export function Location({ name, type, dimension }: ILocation) {
	return (
		<div className='container location-container'>
			<h2 className='location-header'>{name}</h2>

			<p className='location-property-container'>
				<span className='location-property'>Type:</span>
				{type}
			</p>
			<p className='location-property-container'>
				<span className='location-property'>Dimension:</span>
				{dimension}
			</p>
		</div>
	);
}
