import { useState, type FormEventHandler } from 'react';

interface IFormData {
	[key: string]: string;
}

export function useFormState(initialState: IFormData) {
	const [formData, setFormData] = useState(initialState);

	const onInputChange: FormEventHandler = ({ target }) => {
		if (target instanceof HTMLInputElement) {
			const { name, value } = target;
			setFormData({ ...formData, [name]: value });
		}
	};

	return {
		formData,
		onInputChange,
	};
}
