import React from 'react';

import NavigationBar from './NavigationBar';

import '../styles/Footer.css';

const Footer = () => {
	const footerLinks = [
		{ to: "/about", innerHTML: "<About />" }
	];

	return (
		<footer>
			<NavigationBar links={footerLinks} />
			<h1>{"</devtorials>"}</h1>
		</footer>
	);
}

export default Footer;
