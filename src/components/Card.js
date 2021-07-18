import React from 'react';

const Card = ({name , email, id}) => { // eshe edhe kjo menyra (props) => const {name, email, id} = props; dhe esht dhe menyra pa i bo kto fare vec props
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} /> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>		
	);
}

export default Card;