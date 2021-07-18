import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	if (true) {
		throw new Error ('Noooo');
	}
	//const CardComponent = robots.map((user, i) => { //sepse cdo map ka dhe nje vlere parametri mrapa
	// 	return (
	// 		<Card
	// 			key={i} // kjo bohet gjithmon kur bojm nje loop . duhet nje key i vecante. i esht index
	// 		    id={robots[i].id}
	// 		    name={robots[i].name}
	// 		    email={robots[i].email}
	// 	    /> //kjo bohet qe te futen te gjitha te dhenat pa i shkrujt me rradh
	//     );
	// }//)
	return ( 
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							key={i} // kjo bohet gjithmon kur bojm nje loop . duhet nje key i vecante. i esht index
						    id={robots[i].id}
						    name={robots[i].name}
						    email={robots[i].email}
					    /> //kjo bohet qe te futen te gjitha te dhenat pa i shkrujt me rradh
				    );
	            })
	        }    
        </div>
	);
}

export default CardList;