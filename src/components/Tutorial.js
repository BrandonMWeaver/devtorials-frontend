import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Tutorial.css';

const keywords = [ "namespace", "static", "string", "using", "void" ];

export const getColor = language => {
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
			j = i;
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

const setTitle = props => {
	return `<h3>${props.tutorial.title}</h3><h5 style="color: ${getColor(props.tutorial.language)}" }}>${props.tutorial.language}</h5>`;
}

const Tutorial = props => {
	return (
		<div className="Tutorial">
			<div className="lesson" dangerouslySetInnerHTML={{ __html: `${setTitle(props)}${parseContent(props.lesson.content)}` }} />
			<div className="lesson-bar">
				<h3>Lessons</h3>
				{props.tutorial.lessons.map((lesson, index) => {
					return (
						<NavLink key={index} to={`/tutorials/${props.tutorial.id}/lessons/${lesson.id}`}>{`Lesson ${lesson.id}`}</NavLink>
					);
				})}
			</div>
		</div>
	);
}

export default Tutorial;
