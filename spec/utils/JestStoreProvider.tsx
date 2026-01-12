import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import taskListReducer from '../../src/store/taskSlice';

type Props = {
	children: React.ReactNode;
	preloadedState?: {
		taskList: {
			list: Task[];
			notification: string;
		};
	};
};

export const JestStoreProvider = ({ children, preloadedState }: Props) => {
	const store = configureStore({
		reducer: {
			taskList: taskListReducer,
		},
		preloadedState: preloadedState,
	});

	return <Provider store={store}>{children}</Provider>;
};
