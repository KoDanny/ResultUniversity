import { NavLink, Outlet } from 'react-router-dom';
import './NavigationPanel.scss';

export function NavigationPanel() {
	return (
		<>
			<ul className='nav-list'>
				<li className='nav-item'>
					<NavLink to='/categories/characters'>Characters</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/categories/locations'>Locations</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/categories/episodes'>Episodes</NavLink>
				</li>
			</ul>
			<Outlet />
		</>
	);
}
