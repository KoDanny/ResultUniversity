import { Navigate, Route, Routes } from 'react-router-dom';
import { CategoriesPage, MainPage } from '@@pages';
import { NavigationPanel, NotFound } from '@@components';
import { routes } from '@@constants';

export function App() {
	return (
		<div className='app-container'>
			<Routes>
				<Route element={<NavigationPanel />}>
					<Route path={routes.main()} element={<MainPage />} />
					<Route path={routes.categories()} element={<CategoriesPage />} />
					<Route path={routes.page404()} element={<NotFound />} />
					<Route path='*' element={<Navigate to={routes.page404()} />} />
				</Route>
			</Routes>
		</div>
	);
}
