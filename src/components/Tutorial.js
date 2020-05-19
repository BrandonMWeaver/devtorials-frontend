import React from 'react';

import '../styles/Tutorial.css';

const Tutorial = props => {
	return (
		<div className="Tutorial">
			<h3>{props.tutorial.title}</h3>
			<h5>{props.tutorial.language}</h5>
			<div dangerouslySetInnerHTML={{ __html: props.tutorial.content }} />
		</div>
	);
}

export default Tutorial;
