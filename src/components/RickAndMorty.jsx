import { useCounter, useFetch } from '../hooks';
import { Characters, LoadingCharacter } from './';

export const RickAndMorty = () => {
	const { url } = useCounter();

	const { data, isLoading, hasError } = useFetch(url);

	const { image, name, species, status, location, origin, episode } = !!data & data;

	return (
		<>
			<h1>Rick & Morty App</h1>
			<hr />

			{/* condicional ternaria */}

			{isLoading ? (
				<LoadingCharacter />
			) : (
				<Characters
					image={image}
					name={name}
					species={species}
					status={status}
					location={location}
					origin={origin}
					episode={episode}
					hasError={hasError}
				/>
			)}
		</>
	);
};
