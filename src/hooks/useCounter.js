import { useState } from 'react';

export const useCounter = (initialValue = 1) => {
	const [counter, setCounter] = useState(initialValue);
	const url = `https://rickandmortyapi.com/api/character/${counter}`;

	const increment = (value = 1) => {
		setCounter(counter + value);
	};

	const decrement = (value = 1) => {
		// evitamos que sea menor a 0
		if (counter <= 0) return;
		setCounter(counter - value);
	};

	const reset = () => {
		setCounter(initialValue);
	};

	return {
		setCounter,
		increment,
		decrement,
		counter,
		reset,
		url,
	};
};
