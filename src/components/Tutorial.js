import React from 'react';

import '../styles/Tutorial.css';

const getColor = language => {
	switch (language) {
		case 'C':
			return "#00F";
		case "C++":
			return "#FF6969";
		case "C#":
			return "#006900";
		case "JavaScript":
			return "#FF6900";
		case "Ruby":
			return "#F00";
		default:
			return "#000";
	}
}

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
			<h5 style={{ color: getColor(props.tutorial.language) }}>{props.tutorial.language}</h5>
			<div dangerouslySetInnerHTML={{ __html: parseContent(props.tutorial.content) }} />
		</div>
	);
}

export { getColor };
export default Tutorial;
