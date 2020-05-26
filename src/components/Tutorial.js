import React from 'react';

import '../styles/Tutorial.css';

const parseContent = content => {
	const lines = content.split('\n');
	let parsedLines = [];

	for (let line of lines) {
		if (line.startsWith("//")) {
			line = `<span style="color: #CDCDCD;">${line}</span>`;
		}
		parsedLines.push(line);
	}

	return parsedLines.join('\n');
}

const Tutorial = props => {
	return (
		<div className="Tutorial">
			<h3>{props.tutorial.title}</h3>
			<h5>{props.tutorial.language}</h5>
			<div dangerouslySetInnerHTML={{ __html: parseContent(props.tutorial.content) }} />
		</div>
	);
}

export default Tutorial;
