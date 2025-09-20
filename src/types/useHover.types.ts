import type { RefObject } from 'react';

export interface UseHover<T extends HTMLElement> {
	hovered: boolean;
	ref: RefObject<T | null>;
}
