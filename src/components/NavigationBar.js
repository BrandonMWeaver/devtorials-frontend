import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavigationBar.css';

const NavigationBar = props => {
	return (
		<div className="NavigationBar">
			{props.links.map((link, index) => {
				if (link.innerHTML === "<exit />") {
					return <NavLink onClick={() => props.signOut()} key={index} to={link.to}>{link.innerHTML}</NavLink>
				}
				return <NavLink key={index} to={link.to}>{link.innerHTML}</NavLink>
			})}
		</div>
	);
}

export default NavigationBar;
