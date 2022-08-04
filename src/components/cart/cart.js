import React, { useEffect } from 'react';
import Coupon from './coupon/coupan';

import Product from './products/products';
import styled from 'styled-components';
import Header from './../LandingPage/Header/Header.component';
import { H1, P1 } from './../../util/StyledComponent/premadeComponent';
import { getCart } from '../../configApi/utilFunction';

const Cart = () => {
	useEffect(() => {
		//getCart();
	});
	return (
		<React.Fragment>
			<Header />

			<Wrapper2>
				<Wrapper3>
					<P1 color="grey">Home/cart</P1>
					<H1 size="30" weight="700">
						{' '}
						Your Cart
					</H1>
					<Wrapper>
						<Product />
						<Coupon />
					</Wrapper>
				</Wrapper3>
			</Wrapper2>
		</React.Fragment>
	);
};

export default Cart;
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	background-color: #ffff;
	padding: 50px;
	@media (max-width: 900px) {
		flex-direction: column;
		padding: 0px;
	}
`;

const Wrapper2 = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-color: #e8f3db;

	@media (max-width: 500px) {
		padding: 3px;
		width: 100vw;
	}
`;

const Wrapper3 = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffff;
	padding: 20px;
`;
