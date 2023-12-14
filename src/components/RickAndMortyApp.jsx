import { useCounter, useFetch } from '../hooks';
import { Characters, LoadingCharacter, SearchCharacter } from '.';

export const RickAndMorty = () => {
	const { url, setCounter, increment, decrement, reset } = useCounter();
	const { data, isLoading, hasError } = useFetch(url);
	const { image, name, species, status, location, origin, episode } = !!data && data;

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

			<div
				className='d-flex justify-content-center align-items-center mt-2'
				role='group'
				disabled={isLoading}
			>
				<button
					onClick={() => decrement()}
					className='btn btn-primary'
					disabled={isLoading}
				>
					Back
				</button>

				<button
					onClick={() => reset()}
					className='btn btn-primary'
					disabled={isLoading}
				>
					Reset
				</button>

				<button
					onClick={() => increment()}
					className='btn btn-primary'
					disabled={isLoading}
				>
					Next
				</button>
			</div>

			<SearchCharacter setCounter={setCounter} />
			<hr />

			<footer className='card-footer text-muted text-end small footer'>By: Dnmlss</footer>
		</>
	);
};
