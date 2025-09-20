import { useReducer } from 'react';

type UseToggleValue = boolean | number | string;
type UseToggleReturn = [UseToggleValue, (value?: UseToggleValue) => void];

interface IState {
	values: UseToggleValue[];
	index: number;
}

interface IActionType {
	type: 'NEXT' | 'SET_VALUE';
	payload?: UseToggleValue | undefined;
}

function reducer(state: IState, { type, payload }: IActionType): IState {
	const { values, index } = state;
	switch (type) {
		case 'NEXT':
			return { ...state, index: (index + 1) % values.length };
		case 'SET_VALUE':
			if (!payload) return state;

			const newIndex = values.indexOf(payload);
			return { ...state, index: newIndex === -1 ? index : newIndex };
		default:
			return state;
	}
}

export function useToggle(
	values: UseToggleValue[] = [true, false]
): UseToggleReturn {
	const [state, dispatch] = useReducer(reducer, { values, index: 0 });

	const currentValue = state.values[state.index];

	function toggle(value = currentValue) {
		if (value === currentValue) {
			dispatch({ type: 'NEXT' });
		} else {
			dispatch({ type: 'SET_VALUE', payload: value });
		}
	}

	return [currentValue!, toggle];
}
