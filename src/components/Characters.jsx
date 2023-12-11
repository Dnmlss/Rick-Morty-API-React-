import PropTypes from 'prop-types';

export const Characters = ({
	image,
	name,
	species,
	status,
	location,
	origin,
	episode,
	hasError,
}) => {
	if (hasError) {
		return (
			<p
				className='alert alert-warning text-center'
				role='alert'
			>
				{hasError}
			</p>
		);
	}

	return (
		<div
			className='card mx-auto rounded-3 border-3 border-warning-subtle'
			style={{ maxWidth: '400px', backgroundColor: '#F8F9FA' }}
		>
			<img
				className='card-img-top'
				src={image}
				alt={name}
			/>
			<div className='card-body text-center bg-primary-subtle text-emphasis-primary'>
				<h3 className='card-title mb-1'>Name: {name}</h3>
				<h4 className='card-text'>Species: {species}</h4>
				<h5 className='card-text'>Status: {status}</h5>
				<h5 className='card-text'>Location: {location}</h5>
				<h6 className='card-text'>Origin: {origin}</h6>
				<footer className='card-footer text-muted text-end small footer'>
					Episodes: {episode}
				</footer>
			</div>
		</div>
	);
};

Characters.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	species: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	location: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}),
	origin: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}),
};
