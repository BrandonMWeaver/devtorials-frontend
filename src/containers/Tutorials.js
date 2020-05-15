import React, { Component } from 'react';

import '../styles/Tutorials.css';

class Tutorials extends Component {
	render() {
		return (
			<div className="Tutorials">
				<h3>{`<tutorials type="${this.props.type}">`}</h3>
				<h3>{"</tutorials>"}</h3>
			</div>
		);
	}
}

export default Tutorials;
