import { type FormEventHandler } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { useFormState } from '../hooks/useFormState';

interface Props {
	onSubmit: (data: { [key: string]: string }) => void;
}

export function Signup({ onSubmit }: Props) {
	const { formData, onInputChange } = useFormState({
		name: '',
		nickname: '',
		email: '',
		sex: '',
		password: '',
		confirmPassword: '',
	});

	const onFormSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={onFormSubmit} onChange={onInputChange}>
				<TextInput
					type='text'
					name='name'
					label='Name'
					error='Какой-то Error'
					size='lg'
					radius='md'
				/>
				<TextInput
					type='text'
					name='nickname'
					label='Nickname'
					icon={'@'}
					size='xs'
					description='Какое-то описание'
				/>
				<TextInput
					type='email'
					name='email'
					label='Email'
					asterisk={true}
					radius='lg'
				/>
				<fieldset className='fieldset' style={{ margin: '1rem 0' }}>
					<legend style={{ textAlign: 'center' }}>Sex</legend>
					<TextInput
						type='radio'
						name='sex'
						label='Male'
						size='md'
						id='1'
						value='male'
					/>
					<TextInput
						type='radio'
						name='sex'
						label='Female'
						size='md'
						id='2'
						value='female'
					/>
				</fieldset>
				<TextInput type='password' name='password' label='Password' />
				<TextInput
					type='password'
					name='confirmPassword'
					label='Confirm Password'
				/>
				<button type='submit'>Зарегистрироваться</button>
			</form>
		</div>
	);
}
