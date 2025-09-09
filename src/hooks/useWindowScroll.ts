import { useEffect, useState } from 'react';
import type { ICoords, PartCoords, UseWindowScrollReturn } from '../types';

export function useWindowScroll(): UseWindowScrollReturn {
	const [coords, setCoords] = useState<ICoords>({ x: 0, y: 0 });

	useEffect(() => {
		function handleScroll() {
			setCoords({
				x: scrollX || pageXOffset,
				y: scrollY || pageYOffset,
			});
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	function scrollTo({ x = 0, y = 0 }: PartCoords) {
		window.scrollTo({ top: y, left: x, behavior: 'smooth' });
	}

	return [coords, scrollTo];
}
