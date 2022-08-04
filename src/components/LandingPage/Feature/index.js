import React from 'react';
import styled from 'styled-components';
import BuyNowButton from '../../../util/buttons/ShopNowButton/index';
import { H1, H2 } from '../../../util/StyledComponent/premadeComponent';
import Div from './eachDiv';
//images
import fi1 from '../../../assets/fi1.svg';
import fi2 from '../../../assets/fi2.svg';
import fi3 from '../../../assets/fi3.svg';
import fi4 from '../../../assets/fi4.svg';
import { useSelector } from 'react-redux';

const array = [
	{ icon: fi1, txt1: 'Free Shipping', txt2: 'Above ₹500' },
	{ icon: fi2, txt1: 'Food Tech Grade', txt2: '100% Guarantee' },
	{ icon: fi3, txt1: 'Huge Savings', txt2: 'At Lowest Price' },
	{ icon: fi4, txt1: 'Easy Returns', txt2: 'No Questions Asked' }
];
const Features = () => {
	return (
		<React.Fragment>
			<Wrapper>
				{array.map((item, index) => {
					return <Div item={item} key={index} />;
				})}
			</Wrapper>
		</React.Fragment>
	);
};
export default Features;

const Wrapper = styled.div`
	background-color: #8bc34a;

	min-height: 200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}

	.title {
		font-family: 'Merriweather';
		font-style: normal;
		font-weight: 700;
		font-size: 34px;
		line-height: 43px;
		margin-right: 40px;
	}
	.left {
		text-align: center;
		margin: 10px 30px;
	}
`;
