import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BuyNowButton from './../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from './../../../util/StyledComponent/premadeComponent';
//images

import GButton from './../../../util/buttons/reusableButton/button';
import { Button } from 'bootstrap';

import x from '../../../assets/x.png';
import { Checkbox } from '../../../util/StyledComponent/input';
import { Submit } from '../../../configApi/function';
import { addItem, removeItem, clearCart } from '../../../Store/cartSelectedItemSlice/cartSelectedItemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../../Store/cartSlice/cartslice';

const SingleProduct = ({ product_id }) => {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.product.product);
	var data = products.filter((p) => p.product_id == product_id);
	data = data[0];
	console.log('data', data);
	//const [ data, setData ] = useState('');
	const [ checked, setChecked ] = useState(false);
	const [ quantity, setQuantity ] = useState(1);
	const handleClick = () => {
		//console.log('clicked....', checked);
		setChecked(checked ? false : true);
		if (!checked) {
			dispatch(addItem({ id: product_id, price: data.price }));
		} else {
			dispatch(removeItem({ id: product_id }));
		}
	};

	const handleCrossClick = () => {
		console.log('clicked....cross');
		dispatch(removeCart({ id: product_id }));
		dispatch(removeItem({ id: product_id }));
	};
	useEffect(() => {
		// const fetch = async () => {
		// 	const res = await Submit({}, '/product/' + product_id, 'get');
		// 	//console.log('product', res);
		// 	//console.log(res.data);
		// 	setData(res.data);
		// 	dispatch(clearCart());
		// };
		// fetch();
	}, []);

	return (
		data && (
			<Wrapper>
				<div className="up">
					<Checkbox checked={checked} onClick={handleClick} type="checkbox" />
					<img className="cedimg" src={data.image} height="90" alt="icon" />
				</div>
				<div className="down">
					<H1 size="20" lineHeight="20.11px">
						{data.name}
					</H1>
					<P1 size="13" weight="300">
						{/* {desc} */}
					</P1>
					<P1 size="18" weight="300">
						item quantity: <button className="iqbtn">-</button> <div className="qdiv">1</div>
						<button className="iqbtn">+</button>
					</P1>
					<H1 size="18"> {data.price}</H1>
				</div>
				<div>
					<button className="xbtn" onClick={handleCrossClick}>
						{' '}
						<img src={x} alt="x" />
					</button>
				</div>
			</Wrapper>
		)
	);
};
export default SingleProduct;

const Wrapper = styled.div`
	position: relative;
	background-color: #e8f3db;

	display: flex;
	flex-direction: row;

	align-items: center;
	width: 573.12px;
	padding: 5px;
	margin: 10px;
	@media (max-width: 500px) {
		width: auto;
	}

	.down {
		display: flex;
		justify-content: space-between;
		align-items: left;
		flex-direction: column;
		margin-top: 20px;
	}

	.up {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 40px;
	}
	.cedimg {
		margin-left: 10px;
	}

	.iqbtn {
		display: inline;
		border: none;
		background-color: #e8f3db;
	}

	.qdiv {
		display: inline-block;
		background-color: #8bc34a;
		width: 25px;
		text-align: center;
	}
	.xbtn {
		border: none;
		background: transparent;
		position: absolute;
		right: 0;
		top: 0;
	}
`;
