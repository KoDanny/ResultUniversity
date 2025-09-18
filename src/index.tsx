import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.querySelector('#root')! as HTMLElement;

createRoot(root).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
