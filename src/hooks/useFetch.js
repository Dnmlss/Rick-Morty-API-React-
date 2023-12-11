import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setstate] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {
		setstate({
			...state,
			isLoading: true,
		});

		try {
			const resp = await fetch(url);
			const data = await resp.json();
			console.log(data);

			if (data.error) {
				setstate({
					data: null,
					isLoading: false,
					hasError: data.error,
				});
			} else {
				// Al tener los datos, enviamos todas las propiedades al state
				setstate({
					data,
					isLoading: false,
					hasError: null,
				});
			}
		} catch (error) {
			console.log('Error obtenido: ' + error);

			setstate({
				data: null,
				isLoading: false,
				hasError: error,
			});
		}
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
