import React, { Component } from 'react';

import '../styles/TutorialForm.css';

class TutorialForm extends Component {
	state = {
		title: '',
		language: '',
		description: '',
		file: null
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleFileChange = e => {
		if (e.target.files[0]) {
			this.setState({
				file: e.target.files[0]
			});
		}
	}

	render() {
		return (
			<div className="TutorialForm">
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type="text" name="title" placeholder="title" value={this.state.title} />
					<input onChange={this.handleChange} type="text" name="language" placeholder="language" value={this.state.language} />
					<textarea onChange={this.handleChange} type="text" name="description" placeholder="description" value={this.state.description} />
					<input onChange={this.handleFileChange} type="file" name="file" accept="text/html" />
					<input onChange={this.handleChange} type="submit" />
				</form>
			</div>
		);
	}
}

export default TutorialForm;
