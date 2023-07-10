import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { H1 } from './../../../util/StyledComponent/premadeComponent';
import GButton from '../../../util/buttons/reusableButton/button';
import { Input } from './../../../util/StyledComponent/input';
import { useSelector } from 'react-redux';
import { getCart, getProduct } from '../../../configApi/utilFunction';
import { ToastContainer } from 'react-toastify';
import { NotifyDanger, NotifySuccess } from '../../../util/notify';
import { Submit } from '../../../configApi/function';

const Coupon = (props) => {
	const items = useSelector((state) => state.cart.cart);
	const user = useSelector((state) => state.user.user);
	const products = useSelector((state) => state.product.product);
	console.log('items', items);
	const [ mrp, setmrp ] = useState(0);

	const handleplaceOrder = async () => {
		//console.log('clicked');
		if (!user.address) {
			NotifyDanger('please update your address in account section');
			return;
		}

		for (var i = 0; i < items.length; i++) {
			let p = products.filter((p) => p._id == items[i].productId);
			p = p[0];

			var order_data = {
				sellerEmail: p.email,
				buyerEmail: user.email,
				item: p._id,
				totalPrice: items[i].quantity * p.price
			};
			//console.log(p, order_data);

			const res = await Submit(order_data, '/order', 'post');
			if (res.status === 201) {
				var cri = {
					email: user.email,
					productId: p._id
				};
				const resCart = await Submit(cri, '/remove-from-cart', 'post');
				if (resCart.status === 200 || resCart.status === 201) {
					NotifySuccess('one product successfully orderd !');
				}
			}
		}
	};

	useEffect(
		() => {
			getProduct();
			getCart(user.email);
		},
		[ user.email ]
	); // Fetch product and cart data whenever user.email changes

	useEffect(
		() => {
			let tmrp = 0;
			for (let i of items) {
				const rp = products.filter((p) => p._id == i.productId);
				tmrp += parseInt(rp[0].price * i.quantity);
			}
			setmrp(tmrp);
		},
		[ items, products ]
	);

	return (
		<React.Fragment>
			<Wrapper>
				<H1 size="19" weight="400">
					COUPONS
				</H1>
				<div className="cpnin">
					<Input className="cpninp" type="text" height="20" width="90" background="#ffff" />
					<GButton
						onClick={() => {
							console.log('click');
							alert('coupan not valid');
						}}
						title="Apply"
						bg="#8BC34A"
					/>
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
						Discount Applied : {'0'}
					</H1>
					<H1 size="18" weight="300">
						{' '}
						Coupan Discount : {'0'}
					</H1>
					<H1 size="18" weight="300">
						{' '}
						Conveinence Fee : {'100'}
					</H1>
					<hr />
					<H1 size="18" weight="500">
						Total Amount : {mrp + 100}
					</H1>
				</div>
				<div>
					<GButton onClick={handleplaceOrder} title="Place Order" bg="#8BC34A" width="90%" />
				</div>
			</Wrapper>
			<ToastContainer />
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
