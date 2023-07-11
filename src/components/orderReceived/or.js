import React, { useEffect, useState } from 'react';
import { Submit } from '../../configApi/function';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProduct, getUserDetails } from '../../configApi/utilFunction';
import { OrderUi } from './orderUi';

const Merchantorder = ({}) => {
	const [ orders, setOrders ] = useState([]);
	const products = useSelector((state) => state.product.product);

	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		getUserDetails();
	}, []);

	useEffect(
		() => {
			// Fetch orders for the customer using the customerEmail

			fetchOrders();
			getProduct();
		},
		[ user ]
	);

	const fetchOrders = async () => {
		try {
			// Make an API request to fetch orders for the customer
			const response = await Submit({ sellerEmail: user.email }, '/merchantorder', 'post');
			//console.log('customerOrder', response);

			setOrders(response.data);
		} catch (error) {
			console.error('Failed to fetch orders', error);
		}
	};

	return (
		<Pdiv>
			<h2>Your Orders Received</h2>
			{orders.length === 0 ? (
				<p>No orders found.</p>
			) : (
				<ol>
					{orders.map((order) =>
						products.filter((p) => p._id === order.item).map((pd) => (
							<li key={order.item}>
								<OrderUi
									name={pd.name}
									quantity={order.totalPrice / pd.price}
									totalPrice={order.totalPrice}
									imgSrc={pd.uploaded_images[0].data}
									buyerEmail={order.buyerEmail}
								/>
							</li>
						))
					)}
				</ol>
			)}
		</Pdiv>
	);
};

export default Merchantorder;

const Pdiv = styled.div`border: 50px solid #e8f3db;`;
