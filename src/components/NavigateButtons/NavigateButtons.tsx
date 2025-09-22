import { Outlet, useNavigate } from 'react-router-dom';
import './NavigateButtons.scss';

export function NavigateButtons() {
	const navigate = useNavigate();

	return (
		<>
			<Outlet />
			<div className='container nav-buttons-container'>
				<button className='nav-btn' onClick={() => navigate('/')}>
					На главную
				</button>
				<button className='nav-btn' onClick={() => navigate(-1)}>
					Назад
				</button>
			</div>
		</>
	);
}
