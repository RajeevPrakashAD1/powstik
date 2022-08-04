import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Checkbox } from '../../../util/StyledComponent/input';
import { H1 } from './../../../util/StyledComponent/premadeComponent';
import GButton from '../../../util/buttons/reusableButton/button';
import { Input } from './../../../util/StyledComponent/input';
import { useSelector } from 'react-redux';

const Coupon = (props) => {
	const items = useSelector((state) => state.cartSelectedItem.cartSelectedItem);
	console.log(items);
	const [ mrp, setmrp ] = useState(0);

	useEffect(
		() => {
			let tmrp = 0;
			for (let i of items) {
				tmrp += i.price;
			}
			setmrp(tmrp);
		},
		[ items ]
	);

	return (
		<React.Fragment>
			<Wrapper>
				<H1 size="20" weight="400">
					COUPONS
				</H1>
				<div className="cpnin">
					<Input className="cpninp" type="text" height="20" width="90" background="#ffff" />
					<GButton title="Apply" bg="#8BC34A" />
				</div>

				<div>
					<H1 size="18" weight="500">
						Price Details({items.length} items)
					</H1>
					<H1 size="18" weight="300">
						{' '}
						Total MRP : {mrp}
					</H1>
					<H1 size="18" weight="300">
						{' '}
						Discount Applied : {'n'}
					</H1>
					<H1 size="18" weight="300">
						{' '}
						Coupan Discount : {'n'}
					</H1>
					<H1 size="18" weight="300">
						{' '}
						Conveinence Fee : {'n'}
					</H1>
					<hr />
					<H1 size="18" weight="500">
						Total Amount : {'n'}{' '}
					</H1>
				</div>
				<div>
					<GButton title="Place Order" bg="#8BC34A" width="90%" />
				</div>
			</Wrapper>
		</React.Fragment>
	);
};
export default Coupon;

const Wrapper = styled.div`
	height: 700px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.cpnin {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #e8f3db;
		width: 390px;
		padding: 20px;
	}

	@media (max-width: 790px) {
		height: 600px;
		justify-content: center;
		.cpnin {
			width: auto;
		}
		.cpninp {
			width: 150px;
			margin-right: 20px;
		}
	}
`;
