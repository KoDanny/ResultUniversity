import type { IEpisode } from '@@types/entities';
import './Episode.scss';

export function Episode({ name, air_date, episode }: IEpisode) {
	return (
		<div className='container episode-container'>
			<h2 className='episode-header'>{episode}</h2>
			<p className='episode-property-container'>
				<span className='episode-property'>Name:</span> {name}
			</p>
			<p className='episode-property-container'>
				<span className='episode-property'>Air date:</span> {air_date}
			</p>
		</div>
	);
}
