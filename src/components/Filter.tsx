interface Props {
	onChange?: () => void | undefined;
}

export const Filter = ({ onChange }: Props) => {
	const onChangeInput = () => {
		if (onChange) {
			onChange();
		}
	};

	return (
		<div className='filter-container'>
			<input type='checkbox' id='filter-checkbox' onChange={onChangeInput} />
			<label htmlFor='filter-checkbox'>Не показывать выполненные</label>
		</div>
	);
};
