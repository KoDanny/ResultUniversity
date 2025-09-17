import {
	useEffect,
	useRef,
	type InputHTMLAttributes,
	type ReactNode,
} from 'react';
import './InputText.scss';

interface ITextInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	name?: string;
	label?: string;
	icon?: ReactNode;
	error?: string | null;
	description?: string | null;
	asterisk?: boolean;
}

export function TextInput({
	name,
	label,
	id,
	size = 'md',
	icon = null,
	error = null,
	description = null,
	asterisk = false,
	radius = 'xs',
	...otherProps
}: ITextInputProps): ReactNode {
	const refContainer = useRef<HTMLDivElement>(null);
	const refInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (refContainer.current) {
			refContainer.current.classList.add(size);
		}

		if (refInput.current) {
			refInput.current.classList.add(`radius-${radius}`);
		}
	});

	return (
		<div className='field-container' ref={refContainer}>
			<label className='label' htmlFor={id || name}>
				{label}
				{asterisk && <span className='asterisk'>*</span>}
			</label>
			{description && <p className='description'>{description}</p>}

			<div className='field'>
				{icon && <div className='icon'>{icon}</div>}
				<input name={name} id={id || name} {...otherProps} ref={refInput} />
			</div>

			{error && <p className='error'>{error}</p>}
		</div>
	);
}
