import { useReducer } from 'react';
import { useWindowEvent } from './useWindowEvent';
import type { IWindowSize } from '../types';

function reducer(
	state: IWindowSize,
	{ type, payload }: { type: string; payload: number }
) {
	switch (type) {
		case 'CHANGE_HEIGHT':
			return { ...state, height: payload };
		case 'CHANGE_WIDTH':
			return { ...state, width: payload };
		default:
			return state;
	}
}

function setWidth(newValue: number) {
	return { type: 'CHANGE_WIDTH', payload: newValue };
}
function setHeight(newValue: number) {
	return { type: 'CHANGE_HEIGHT', payload: newValue };
}

export function useViewportSize(): IWindowSize {
	const [state, dispatch] = useReducer(reducer, {
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useWindowEvent('resize', () => {
		if (state.width !== window.innerWidth) {
			dispatch(setWidth(window.innerWidth));
		}
		if (state.height !== window.innerHeight) {
			dispatch(setHeight(window.innerHeight));
		}
	});

	return state;
}
