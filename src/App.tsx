import { useToggle } from './hooks';

export function App() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

	return <button onClick={() => toggle()}>{String(value)}</button>;
}
