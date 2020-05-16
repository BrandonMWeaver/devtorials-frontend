import React, { Component } from 'react';

import '../styles/Tutorials.css';

import tutorials from '../Data';

class Tutorials extends Component {
	state = tutorials;

	render() {
		return (
			<div className="Tutorials">
				<h3>{`<tutorials type="${this.props.type}">`}</h3>
				{this.state.tutorials.map((tutorial, index) => {
					return (
						<div className="TutorialSummary" key={index}>
							<a href="/">{tutorial.title}</a>
							<p>{tutorial.language}</p>
							<p>{tutorial.content}</p>
						</div>
					);
				})}
				<h3>{"</tutorials>"}</h3>
			</div>
		);
	}
}

export default Tutorials;
