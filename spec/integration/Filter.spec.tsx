import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskList } from 'src/modules/TaskList';
import { createTestProvider } from '../utils/createTestProvider';

describe('Список задач', () => {
	const user = userEvent.setup({
		advanceTimers: jest.advanceTimersByTime,
	});

	beforeEach(() => {
		cleanup();
	});

	// не содержит выполненные задачи
	// после нажатия на кнопку фильтрации
	it('с включенным фильтром', async () => {
		const mockTasks = [
			{ id: '1', header: 'Выполненная задача', done: true },
			{ id: '2', header: 'Невыполненная задача', done: false },
			{ id: '3', header: 'Выполненная задача', done: true },
		];

		render(<TaskList />, {
			wrapper: createTestProvider(mockTasks),
		});

		const filterEl = screen.getByRole('checkbox', {
			name: /Не показывать выполненные/i,
		});

		await user.click(filterEl);
		expect(filterEl).toBeChecked();

		const allTasks = screen.getAllByText(/задача/i);

		allTasks.forEach(({ textContent }) => {
			expect(textContent).toBe('Невыполненная задача');
		});
	});

	// показывает как выполненные, так и не выполненные задачи
	// после повторного нажатия на кнопку фильтрации
	it('с выключенным фильтром', () => {
		const mockTasks = [
			{ id: '1', header: 'Выполненная задача', done: true },
			{ id: '2', header: 'Невыполненная задача', done: false },
			{ id: '3', header: 'Выполненная задача', done: true },
		];

		render(<TaskList />, {
			wrapper: createTestProvider(mockTasks),
		});

		const filterEl = screen.getByRole('checkbox', {
			name: /Не показывать выполненные/i,
		});

		expect(filterEl).not.toBeChecked();

		const allTasks = screen.getAllByText(/задача/i);

		allTasks.forEach((task) => {
			expect(task).toBeInTheDocument();
		});
	});

	it('Пустой список задач', () => {
		render(<TaskList />, {
			wrapper: createTestProvider([]),
		});

		const filterEl = screen.queryByRole('checkbox', {
			name: /Не показывать выполненные/i,
		});

		const emptyEl = screen.getByText(/вы пока не создали/i);

		expect(filterEl).toBeNull();
		expect(emptyEl).toBeInTheDocument();
	});
});
