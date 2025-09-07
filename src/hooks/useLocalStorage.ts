import { useState } from 'react';
import type {
	LocalStorageReturnValue,
	LocalStorageSetValue,
	UseLocalStorage,
} from '../types';

export const useLocalStorage: UseLocalStorage = (key: LocalStorageSetValue) => {
	const [value, setValue] = useState<LocalStorageReturnValue>(null);

	function setItem(newValue: LocalStorageSetValue) {
		localStorage.setItem(key, newValue);
		setValue(newValue);
	}

	function removeItem() {
		localStorage.removeItem(key);
		setValue(null);
	}
	return [value, { setItem, removeItem }];
};
