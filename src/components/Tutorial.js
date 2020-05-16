import React from 'react';

import '../styles/Tutorial.css';

const Tutorial = props => {
	return (
		<div className="Tutorial">
			<h3>{props.tutorial.title}</h3>
		</div>
	);
}

export default Tutorial;
