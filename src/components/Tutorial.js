import React from 'react';

import '../styles/Tutorial.css';

const keywords = [ "namespace", "static", "string", "using", "void" ];

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

	for (let i = 0; i < lines.length; i++) {
		let j;
		if (lines[i].includes("<pre class=\"code\">")) {
			j = i + 1;
			while (!lines[j].includes("</pre>")) {
				lines[j] = parseCode(lines[j]);
				j++;
			}
		}

		parsedLines.push(lines[i]);
	}

	return parsedLines.join('\n');
}

const parseCode = code => {
	if (code.startsWith("//")) {
		code = code.replace(code, `<span style="color: #CDCDCD;">${code}</span>`);
	}
	else {
		for (const keyword of keywords) {
			code = code.replace(keyword, `<span class="keyword">${keyword}</span>`);
		}
	}
	return code;
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
