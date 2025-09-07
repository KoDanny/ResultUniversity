import { useHover } from './hooks';

export function App() {
	const { hovered: divHovered, ref: divRef } = useHover<HTMLDivElement>();
	const { hovered, ref } = useHover<HTMLAnchorElement>();
	const spanRef = useHover();

	return (
		<>
			<a href='#' ref={ref}>
				{hovered ? 'Перейти по ссылке' : 'Ссылка'}
			</a>
			<div ref={divRef}>
				{divHovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
			</div>
			<span ref={spanRef.ref}>
				{spanRef.hovered ? 'Наведение на SPAN' : 'SPAN'}
			</span>
		</>
	);
}
