import React from 'react';
import styled from 'styled-components';

import SingleProduct from './singleProduct';
import sampleProduct from '../../../assets/sampleproduct.png';
import Discount from '../discount/discount';
import { Checkbox } from '../../../util/StyledComponent/input';
import { H1 } from './../../../util/StyledComponent/premadeComponent';
import GButton from '../../../util/buttons/reusableButton/button';
import { useSelector } from 'react-redux';
const data = [
	{ name: 'Befach Rice for Diabetics', desc: 'Diabetes', pic: sampleProduct },
	{ name: 'Befach Rice for Diabetics', desc: 'Diabetes', pic: sampleProduct },
	{ name: 'Befach Rice for Diabetics', desc: 'Diabetes', pic: sampleProduct },
	{ name: 'Befach Rice for Diabetics', desc: 'Diabetes', pic: sampleProduct }
];
const Product = (props) => {
	// console.log(props);
	const productids = useSelector((state) => state.cart.cart);
	console.log(productids);

	return (
		<React.Fragment>
			<Wrapper>
				<Discount />
				{/* <div className="sel">
					<div className="isel">
						<Checkbox type="checkbox" />
						<H1 className="selh1">n/n ITEM SELECTED</H1>
					</div>
					<GButton title="Remove All" bg="#8BC34A" />
				</div> */}
				{productids.map((item, index) => <SingleProduct product_id={item} key={index} />)}
			</Wrapper>
		</React.Fragment>
	);
};
export default Product;

const Wrapper = styled.div`
	.sel {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 90px;

		width: 573px;
	}
	.isel {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 200px;
	}
	@media (max-width: 500px) {
		flex-direction: column;
		.sel {
			width: 270px;
		}
		.selh1 {
			margin-left: 15px !important;
		}import { useSelector } from 'react-redux';

	}
`;
