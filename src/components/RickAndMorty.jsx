import { useCounter, useFetch } from '../hooks';

export const RickAndMorty = () => {
	const { url } = useCounter();

	const { data, isLoading, hasError } = useFetch(url);

	return (
		<>
			<h1>Rick & Morty App</h1>
			<hr />
		</>
	);
};
