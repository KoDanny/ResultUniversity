import type { ICharacter } from '@@types/entities';
import './Character.scss';

export function Character({
	name,
	status,
	species,
	type,
	gender,
	image,
}: ICharacter) {
	return (
		<>
			<div className='container character-container'>
				<h2 className='character-header'>{name}</h2>
				<div className='info-wrapper'>
					<div className='image-wrapper'>
						<img src={image}></img>
					</div>
					<div className='character-info'>
						<p className='character-property-container'>
							<span className='character-property'>Status:</span>
							{status}
						</p>
						<p className='character-property-container'>
							<span className='character-property'>Species:</span>
							{species}
						</p>
						{type && (
							<p className='character-property-container'>
								<span className='character-property'>Type:</span>
								{type}
							</p>
						)}
						<p className='character-property-container'>
							<span className='character-property'>Gender:</span>
							{gender}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
