import { render } from '@testing-library/react';
import { Item } from 'src/components/Item';

describe('Элемент списка задач', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it.each([
		{
			header: '',
			description: 'Невалидный: Пустой заголовок',
		},
		{
			header: 'A'.repeat(33),
			description: 'Невалидный: Длина заголовка равна 33 символам',
		},
		{
			header: 'A'.repeat(50),
			description: 'Невалидный: Длина заголовка больше 32 символов',
		},
		{
			header: '1',
			description: 'Валидный: Длина заголовка равна 1 символу',
		},
		{
			header: 'Нормальный заголовок',
			description: 'Валидный: Длина заголовка меньше 32 символов',
		},
		{
			header: 'A'.repeat(32),
			description: 'Валидный: Длина заголовка равна 32 символам',
		},
	])('$description', ({ header }) => {
		const itemProps = {
			id: 'test',
			header,
			done: false,
			onDelete: jest.fn(),
			onToggle: jest.fn(),
		};

		const { queryByRole } = render(<Item {...itemProps} />);

		const taskItemEl = queryByRole('listitem');

		if (header.length <= 32 && header.length > 0) {
			expect(taskItemEl).toBeInTheDocument();
		} else {
			expect(taskItemEl).toBeNull();
		}
	});

	it.each([false, true])('Задача выполнена(done): %s', (done) => {
		const itemProps = {
			id: 'test',
			header: 'заголовок',
			done,
			onDelete: jest.fn(),
			onToggle: jest.fn(),
		};

		const { asFragment } = render(<Item {...itemProps} />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('Удалить можно только выполненную задачу', () => {
		const itemProps = {
			id: 'test',
			header: 'заголовок',
			onDelete: jest.fn(),
			onToggle: jest.fn(),
		};

		const { rerender, getByRole } = render(
			<Item {...itemProps} done={false} />
		);

		expect(getByRole('button')).toBeDisabled();

		rerender(<Item {...itemProps} done={true} />);

		expect(getByRole('button')).not.toBeDisabled();
	});
});
