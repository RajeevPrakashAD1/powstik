import React from 'react';
import styled from 'styled-components';
import BuyNowButton from '../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import Div from './eachDiv';
//images
import lemon from '../../../assets/lemon.png';
import lettuce from '../../../assets/lettuce.png';
import peas from '../../../assets/peas.png';

const array = [
	{
		title: 'Flat 10% off',
		desc: 'no min txn',
		code: 'MoneyTap'
	},
	{
		title: 'Flat 10% off',
		desc: 'no min txn',
		code: 'MoneyTap'
	},
	{
		title: 'Flat 10% off',
		desc: 'no min txn',
		code: 'MoneyTap'
	},
	{
		title: 'Flat 10% off',
		desc: 'no min txn',
		code: 'MoneyTap'
	},
	{
		title: 'Flat 10% off',
		desc: 'no min txn',
		code: 'MoneyTap'
	}
];
const BankOffer = () => {
	return (
		<React.Fragment>
			<MW>
				<H1 size="25" className="header">
					Bank & Wallet Offers
				</H1>
				<Wrapper>
					{array.map((item, index) => {
						return <Div item={item} key={index} />;
					})}
				</Wrapper>
			</MW>
		</React.Fragment>
	);
};
export default BankOffer;
const MW = styled.div`
	padding: 70px;
	@media (max-width: 768px) {
		text-align: center;
	}
`;

const Wrapper = styled.div`
	background-color: ;

	min-height: 200px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
