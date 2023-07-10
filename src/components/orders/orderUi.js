import React, { useEffect, useState } from 'react';
import { Submit } from '../../configApi/function';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProduct } from '../../configApi/utilFunction';
import { bufToImg } from '../../util/utilfunction';

export const OrderUi = ({ orderId, imgSrc, quantity, totalPrice, name }) => {
	return (
		<React.Fragment>
			<Mdiv>
				<div className="order-container">
					<div className="order-image">
						<img src={bufToImg(imgSrc)} alt="Product" />
					</div>
					<div className="order-details">
						<p>Product Name: {name}</p>
						<p>Quantity: {quantity}</p>
						<p>Total Price: {totalPrice}</p>
						<p>
							Status: <h6>Order Successful </h6>
						</p>
					</div>
				</div>
			</Mdiv>
		</React.Fragment>
	);
};
const Mdiv = styled.div`
	.order-container {
		display: flex;
		align-items: center;
		padding: 20px;
		border: 1px solid green;
		border-radius: 5px;
		margin-bottom: 10px;
	}

	.order-image {
		width: 100px;
		height: 100px;
		margin-right: 20px;
	}

	.order-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}

	.order-details {
		flex: 1;
	}

	.order-details h3 {
		font-size: 18px;
		margin-bottom: 5px;
	}

	.order-details p {
		font-size: 14px;
		margin-bottom: 5px;
	}
`;
