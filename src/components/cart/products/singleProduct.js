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
import { bufToImg, getCart } from '../../../configApi/utilFunction';

const SingleProduct = ({ product_id, quantity }) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const products = useSelector((state) => state.product.product);
	var data1 = products.filter((p) => p._id == product_id);

	var data = data1[0];
	//console.log('data-->', data, data1, products);
	//const [ data, setData ] = useState('');
	const [ checked, setChecked ] = useState(false);

	const handleCrossClick = async () => {
		await Submit({ email: user.email, productId: product_id }, '/remove-from-cart', 'post');
		getCart(user.email);
	};
	const handleminus = async () => {
		await Submit({ email: user.email, productId: product_id }, '/cart/decrement', 'post');
		getCart(user.email);
	};
	const handleplus = async () => {
		await Submit({ email: user.email, productId: product_id }, '/cart/increment', 'post');
		getCart(user.email);
	};

	return (
		data && (
			<Wrapper>
				<div className="up">
					<img className="cedimg" src={bufToImg(data.uploaded_images[0].data)} height="90" alt="icon" />
				</div>
				<div className="down">
					<H1 size="20" lineHeight="20.11px">
						{data.name}
					</H1>
					<P1 size="13" weight="300">
						{/* {desc} */}
					</P1>
					<P1 size="18" weight="300">
						item quantity:
						<button className="iqbtn" onClick={handleminus}>
							-
						</button>
						<div className="qdiv">{quantity}</div>
						<button className="iqbtn" onClick={handleplus}>
							+
						</button>
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
