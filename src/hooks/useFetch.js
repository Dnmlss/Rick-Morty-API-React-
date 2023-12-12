import { useEffect, useState } from 'react';

// pedimos el url
export const useFetch = (url) => {
	//Creamos la lógica como un hook
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {
		//
		setState({
			...state,
			isLoading: true,
		});

		try {
			const resp = await fetch(url);
			const data = await resp.json();
			//console.log(data.episode.length);

			if (data.error) {
				setState({
					data: null,
					isLoading: false,
					hasError: data.error,
				});
			} else {
				// Al tener los datos, enviamos todas las propiedades al setState
				setState({
					data,
					isLoading: false,
					hasError: null,
				});
			}
		} catch (error) {
			console.log('El error es:' + error);
			setState({
				data: null,
				isLoading: false,
				hasError: error,
			});
		}
	};

	// disparamos useEffect
	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
