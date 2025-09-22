import { Category, Entity, NavigateButtons } from '@@components';
import { routes } from '@@constants';
import { Route, Routes } from 'react-router-dom';

export function CategoriesPage() {
	return (
		<>
			<Routes>
				<Route element={<NavigateButtons />}>
					<Route path={routes.category()} element={<Category />} />
					<Route path={routes.entity()} element={<Entity />} />
				</Route>
			</Routes>
		</>
	);
}
