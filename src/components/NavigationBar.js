import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavigationBar.css';

const NavigationBar = props => {
	return (
		<div className="NavigationBar">
			{props.links.map((link, index) => {
				return <NavLink key={index} to={link.to}>{link.innerHTML}</NavLink>
			})}
		</div>
	);
}

export default NavigationBar;
