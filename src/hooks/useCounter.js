import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
	const [counter, setCounter] = useState(initialValue);
	const url = 'https://rickandmortyapi.com/api/character/2';

	const increment = (value = 1) => {
		setCounter(counter + value);
	};

	const decrement = (value = 1) => {
		setCounter(counter - value);
	};

	const reset = () => {
		setCounter(initialValue);
	};

	return {
		setCounter,
		increment,
		decrement,
		reset,
		url,
	};
};
