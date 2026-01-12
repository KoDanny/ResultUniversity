import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../../src/store/taskSlice';
import { Provider } from 'react-redux';

const createTestStore = (tasks: Task[] = [], notification = '') => {
	return configureStore({
		reducer: {
			taskList: taskListReducer,
		},
		preloadedState: {
			taskList: {
				list: tasks,
				notification,
			},
		},
	});
};

export const createTestProvider = (tasks: Task[] = [], notification = '') => {
	const store = createTestStore(tasks, notification);
	return ({ children }: { children: React.ReactNode }) => (
		<Provider store={store}>{children}</Provider>
	);
};
