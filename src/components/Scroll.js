import React from 'react';

const Scroll = (props) => { //sepse robots esht child i Scroll ne qe e gjejm App.js
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black', height:'800px' }}>
			{props.children} 
        </div>
	)
}

export default Scroll;