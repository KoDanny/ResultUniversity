export const routes = {
	main: () => '/',
	categories: () => '/categories/*',
	category: () => ':category',
	entity: () => ':category/:id',
	page404: () => '/404',
};
