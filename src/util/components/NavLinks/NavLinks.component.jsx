import React from 'react';
import { NavContainer } from './NavLinks.styles';
import Navdata from '../../../JSON/data.json';
import NavTitle from '../../NavTitle/NavTitle.component';

const NavLinks = ({ onMouseEnter, onMouseLeave }) => {
	//console.log('navdata', Navdata);

	return (
		<NavContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{' '}
			  {Navdata.map((items) => <NavTitle key={items.Category.categoryId} items={items.Category} />)} {' '}
		</NavContainer>
	);
};

export default NavLinks;
