import { Signin, Signup } from './components';

type OnFormSubmit = (data: { [key: string]: string }) => void;

export function App() {
	const onSubmit: OnFormSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className='app-container'>
			{/* <Signin onSubmit={onSubmit} /> */}
			<Signup onSubmit={onSubmit} />
		</div>
	);
}
