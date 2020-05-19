import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Tutorials.css';

const Tutorials = props => {
	return (
		<div className="Tutorials">
			<h3>{`<tutorials type="${props.type}">`}</h3>
			{props.tutorials.map((tutorial, index) => {
				return (
					<div className="TutorialSummary" key={index}>
						<NavLink to={`/tutorials/${index + 1}`}>{tutorial.title}</NavLink>
						<p>{tutorial.language}</p>
						<p>{tutorial.description}</p>
					</div>
				);
			})}
			<h3>{"</tutorials>"}</h3>
		</div>
	);
}

export default Tutorials;
