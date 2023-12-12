import { useEffect, useState } from 'react';

export const SearchCharacter = ({ setCounter }) => {
	const [searchId, setSearchId] = useState('');

	const onSearchChange = ({ target }) => {
		setSearchId(target.value);
	};

	const onSearchSubmit = (event) => {
		event.preventDefault();

		if (!searchId.trim() || !/^\d+$/.test(searchId)) return;

		setCounter(searchId);
		setSearchId('');
	};

	useEffect(() => {
		//console.log('useEffect is called');
	}, []);

	useEffect(() => {}, [searchId]);

	return (
		<>
			<h6 className='text-center mt-5'>Num from 1 to 826</h6>
			<form
				onSubmit={onSearchSubmit}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<input
					type='text'
					value={searchId}
					onChange={onSearchChange}
					className='rounded form-control form-control-color'
					placeholder='num'
				/>
			</form>
		</>
	);
};
