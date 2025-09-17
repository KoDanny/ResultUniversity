import { type FormEventHandler } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { useFormState } from '../hooks/useFormState';

interface Props {
	onSubmit: (data: { [key: string]: string }) => void;
}

export function Signin({ onSubmit }: Props) {
	const { formData, onInputChange } = useFormState({ password: '', email: '' });

	const onFormSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<div>
			<h2>Sign In</h2>
			<form onSubmit={onFormSubmit} onChange={onInputChange}>
				<TextInput
					size='lg'
					name='email'
					type='email'
					label='Email'
					placeholder='Введите Email'
					required
				/>
				<TextInput
					size='xs'
					name='password'
					type='password'
					label='Пароль'
					placeholder='Введите пароль'
				/>
				<button type='submit'>Войти</button>
			</form>
		</div>
	);
}
