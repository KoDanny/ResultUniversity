import { Item } from './Item';

type Props = {
	items: Task[];
	onDelete: (id: Task['id']) => void;
	onToggle: (id: Task['id']) => void;
};

export const List = ({ items, onDelete, onToggle }: Props) => {
	let uncompletedCount = 0;

	return (
		<ul className='task-list tasks'>
			{items.map((item) => {
				if (!item.done) {
					uncompletedCount++;
				}

				if (uncompletedCount > 10) return null;

				return (
					<Item
						{...item}
						key={item.id}
						onDelete={onDelete}
						onToggle={onToggle}
					/>
				);
			})}
		</ul>
	);
};
