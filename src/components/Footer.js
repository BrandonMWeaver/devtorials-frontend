import React from 'react';

import NavigationBar from './NavigationBar';

import '../styles/Footer.css';

const Footer = props => {
	const footerLinks = [
		props.currentAdmin ? { to: "/tutorials/new", innerHTML: "<form />" } : { to: "/about", innerHTML: "<about />" },
		props.currentAdmin ? { to: '/', innerHTML: "<exit />" } : { to: "/admin", innerHTML: "<admin />" }
	];

	return (
		<footer>
			<NavigationBar links={footerLinks} signOut={props.signOut} />
			<h1>{"</devtorials>"}</h1>
		</footer>
	);
}

export default Footer;
