import { useWindowScroll } from './hooks';

export function App() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<div style={{ width: '300vw', height: '300vh' }}>
			<div style={{ position: 'fixed' }}>
				<p>
					Scroll position x: {scroll.x}, y: {scroll.y}
				</p>
				<button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
			</div>
		</div>
	);
}
