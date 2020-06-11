import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../styles/AdministratorForm.css';

class AdministratorForm extends Component {
	state = {
		username: '',
		password: '',
		submitted: false
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = e => {
		e.preventDefault();
		fetch("http://localhost:3000/sign-in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include",
			body: JSON.stringify(this.state)
		})
		.then(r => r.json())
		.then(o => this.props.signIn(o));
		this.setState({
			submitted: true
		});
	}

	render() {
		if (this.state.submitted) {
			return <Redirect to='/' />
		}
		return (
			<div className="AdminForm">
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type="text" name="username" placeholder="username" value={this.state.username} />
					<input onChange={this.handleChange} type="password" name="password" placeholder="password" value={this.state.password} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default AdministratorForm;
