import React, { useEffect, useCallback, useState } from 'react';

import styled from 'styled-components';
import { client } from '../../../util/api';

import BuyNowButton from '../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import Div from './eachDiv';
//images
import lemon from '../../../assets/lemon.png';
import lettuce from '../../../assets/lettuce.png';
import peas from '../../../assets/peas.png';
import { useSelector } from 'react-redux';

const array = [
	{
		pic: lemon,
		desc: 'Nutrition solutions for common health conditions in ageing men and women.',
		title: 'Geriatrics'
	},
	{
		pic: lettuce,
		desc: 'Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. ',
		title: 'Metabolics'
	},
	{
		pic: peas,
		desc: 'Choicest Groceries, Pulses, Millets, and cereals from around your country.',
		title: 'Mother & Child'
	},
	{
		pic: lemon,
		desc: 'Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. ',
		title: 'Metabolics'
	},
	{
		pic: lettuce,
		desc: 'Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. ',
		title: 'Metabolics'
	},
	{
		pic: peas,
		desc: 'Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. ',
		title: 'Metabolics'
	}
];
const Characteristics = () => {
	const categories = useSelector((state) => state.category.categories);
	//console.log('categories =', categories, typeof categories);
	return (
		<React.Fragment>
			<Wrapper>
				{categories.length > 0 ? (
					categories.map((item, index) => {
						return <Div item={item} key={index} />;
					})
				) : (
					'no categories'
				)}
			</Wrapper>
		</React.Fragment>
	);
};
export default Characteristics;

const Wrapper = styled.div`
	background-color: ;

	min-height: 200px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	padding: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
