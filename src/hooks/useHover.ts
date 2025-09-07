import { useEffect, useRef, useState } from 'react';
import type { UseHover } from '../types';

export function useHover<T extends HTMLElement = HTMLElement>(): UseHover<T> {
	const [hovered, setHovered] = useState(false);
	const ref = useRef<T | null>(null);

	function handleChangeHoverState() {
		setHovered((prev) => !prev);
	}

	useEffect(() => {
		if (!ref.current) return;

		const elem = ref.current;

		['mouseenter', 'mouseleave'].forEach((eventName) =>
			elem.addEventListener(eventName, handleChangeHoverState)
		);

		return () =>
			['mouseenter', 'mouseleave'].forEach((eventName) =>
				elem.removeEventListener(eventName, handleChangeHoverState)
			);
	}, [ref]);

	return { hovered, ref };
}
