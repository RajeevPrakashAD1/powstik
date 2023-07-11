import React, { useEffect, useState } from 'react';
import { Submit } from '../../configApi/function';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProduct, getUserDetails } from '../../configApi/utilFunction';
import WishlistUi from './wishlistBox';

const Whislist = () => {
	const [ wishlists, setwishlists ] = useState([]);
	const products = useSelector((state) => state.product.product);

	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		getUserDetails();
	}, []);

	useEffect(
		() => {
			fetchwishlists();
			getProduct();
		},
		[ user ]
	);

	const fetchwishlists = async () => {
		try {
			// Make an API request to fetch wishlists for the customer
			console.log('fetching wishlist', user);
			const response = await Submit({ userEmail: user.email }, '/getwishlist', 'post');
			console.log('whislist', response);

			setwishlists(response.data);
		} catch (error) {
			console.error('Failed to fetch wishlists', error);
		}
	};

	return (
		<Pdiv>
			<h2>Product Wishlists</h2>
			{wishlists.length === 0 ? (
				<p>No wishlists found.</p>
			) : (
				<div className="idiv">
					{wishlists.map((wl) =>
						products
							.filter((p) => p._id === wl.productId)
							.map((pd) => (
								<WishlistUi
									name={pd.name}
									category={pd.category}
									price={pd.price}
									imgSrc={pd.uploaded_images[0].data}
									id={pd._id}
								/>
							))
					)}
				</div>
			)}
		</Pdiv>
	);
};

export default Whislist;

const Pdiv = styled.div`
	padding: 20px;
	width: 100%;
	height: 100%;
	border: 50px solid #e8f3db;

	.idiv {
		${'' /* background-color: green; */} display: flex;

		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
`;
