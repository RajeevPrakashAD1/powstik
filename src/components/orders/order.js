import React, { useEffect, useState } from 'react';
import { Submit } from '../../configApi/function';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProduct } from '../../configApi/utilFunction';
import { OrderUi } from './orderUi';

const CustomerOrders = ({ customerEmail }) => {
	const [ orders, setOrders ] = useState([]);
	const products = useSelector((state) => state.product.product);

	const user = useSelector((state) => state.user.user);

	useEffect(
		() => {
			// Fetch orders for the customer using the customerEmail
			fetchOrders();
			getProduct();
		},
		[ customerEmail ]
	);

	const fetchOrders = async () => {
		try {
			// Make an API request to fetch orders for the customer
			const response = await Submit({ buyerEmail: user.email }, '/customerorder', 'post');
			console.log('customerOrder', response);

			setOrders(response.data);
		} catch (error) {
			console.error('Failed to fetch orders', error);
		}
	};

	return (
		<div>
			<h2>Customer Orders</h2>
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
								/>
							</li>
						))
					)}
				</ol>
			)}
		</div>
	);
};

export default CustomerOrders;

const Pdiv = styled.div`background-color: green;`;
