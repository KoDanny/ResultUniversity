import { useLocalStorage } from './hooks';

export function App() {
	const [value, { setItem, removeItem }] = useLocalStorage('user-name');
	return (
		<div>
			<p>Имя пользователя: {value}</p>
			<div>
				<button onClick={() => setItem('Denis')}>Задать значение</button>
				<button onClick={() => removeItem()}>Удалить значение</button>
			</div>
		</div>
	);
}
