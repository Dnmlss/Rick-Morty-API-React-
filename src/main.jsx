import React from 'react';
import ReactDOM from 'react-dom/client';
import { RickAndMorty } from './components/RickAndMortyApp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	//<React.StrictMode>
	<RickAndMorty />
	//</React.StrictMode>
);
