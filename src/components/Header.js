import React from 'react';

import NavigationBar from './NavigationBar';

import '../styles/Header.css';

const Header = () => {
	const headerLinks = [
		{ to: '/', innerHTML: "<home />" }
	];

	return (
		<header>
			<h1>{"<devtorials>"}</h1>
			<NavigationBar links={headerLinks} />
		</header>
	);
}

export default Header;
