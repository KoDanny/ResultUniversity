import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = document.querySelector('#root')! as HTMLElement;

createRoot(root).render(<App />);
