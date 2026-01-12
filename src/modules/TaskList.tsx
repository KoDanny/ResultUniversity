import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from 'src/components/Empty';
import { Filter } from 'src/components/Filter';
import { List } from 'src/components/List';
import { deleteTask, tasksSelector, toggleTask } from 'src/store/taskSlice';

export const TaskList = () => {
	const items = useSelector(tasksSelector);
	const dispatch = useDispatch();
	const [showAll, setShowAll] = useState(true);

	const handleDelete = (id: Task['id']) => {
		dispatch(deleteTask(id));
	};

	const handleToggle = (id: Task['id']) => {
		dispatch(toggleTask(id));
	};

	const handleChangeFilter = () => {
		setShowAll((prev) => !prev);
	};

	const listItems = showAll ? items : items.filter(({ done }) => !done);

	return items.length > 0 ? (
		<>
			<Filter onChange={handleChangeFilter} />
			<List items={listItems} onDelete={handleDelete} onToggle={handleToggle} />
		</>
	) : (
		<Empty />
	);
};
