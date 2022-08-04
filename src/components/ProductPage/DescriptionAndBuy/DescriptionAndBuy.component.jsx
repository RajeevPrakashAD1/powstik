import React, { useState } from 'react';
import {
	ButtonContainer,
	DescriptionContainer,
	Itemcounter,
	PageInfo,
	PageInfoButton
} from './DescriptionAndBuy.styles';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Wrapper } from '../../../util/buttons/DownloadButton/DownloadButton.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../Store/cartSlice/cartslice';

const DescriptionAndBuy = ({ heading, disease, type, price, description1, description2, id }) => {
	const [ count, setcount ] = useState(1);
	const [ descriptionstatus, setdescriptionstatus ] = useState('description');
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.cart);
	const AddCart = () => {
		console.log('cart', cart);
		if (cart.includes(id)) {
			alert('item already added');
			return;
		}
		dispatch(addCart(id));
		//console.log('clicked');
		alert('successfully added to cart');
	};
	return (
		<DescriptionContainer>
			<H1 size={24} color="#000000" lineHeight={32} style={{ paddingBottom: 10 }}>
				{' '}
				{heading} {' '}
			</H1>{' '}
			{' '}
			<PageInfo>
				<PageInfoButton> {disease} </PageInfoButton> <PageInfoButton> {type} </PageInfoButton> {' '}
			</PageInfo>{' '}
			{' '}
			{descriptionstatus === 'description' ? (
				<PageInfo>
					<H1
						style={{
							marginRight: 30,
							cursor: 'pointer',
							borderBottom: '2px solid rgba(139, 195, 74, 0.65)',
							marginBottom: 10,
							paddingLeft: 10,
							paddingRight: 10
						}}
						active
						onClick={() => setdescriptionstatus('description')}
					>
						{' '}
						Description {' '}
					</H1>{' '}
					{' '}
					<P1
						color="#616161"
						style={{ cursor: 'pointer', paddingLeft: 10, paddingRight: 10 }}
						onClick={() => setdescriptionstatus('vender')}
					>
						{' '}
						Vender info {' '}
					</P1>{' '}
					{' '}
				</PageInfo>
			) : (
				<PageInfo>
					<P1
						color="#616161"
						style={{ marginRight: 10, cursor: 'pointer', paddingLeft: 10, paddingRight: 10 }}
						active
						onClick={() => setdescriptionstatus('description')}
					>
						{' '}
						Description {' '}
					</P1>{' '}
					{' '}
					<H1
						style={{
							cursor: 'pointer',
							borderBottom: '2px solid rgba(139, 195, 74, 0.65)',
							marginBottom: 10,
							paddingLeft: 10,
							paddingRight: 10
						}}
						onClick={() => setdescriptionstatus('vender')}
					>
						{' '}
						Vender info {' '}
					</H1>{' '}
					{' '}
				</PageInfo>
			)}{' '}
			<hr style={{ color: 'rgba(139, 195, 74, 0.65)', height: 2, marginTop: -20, marginBottom: 20 }} /> {' '}
			<P1 color="#616161" style={{ paddingBottom: 20 }}>
				{' '}
				{' '}
				{descriptionstatus === 'description' ? (
					description1
				) : (
					"Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				)}{' '}
				{' '}
			</P1>{' '}
			{' '}
			<P1 color="#616161" style={{ paddingBottom: 20 }}>
				{' '}
				{' '}
				{descriptionstatus === 'description' ? (
					description2
				) : (
					"Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				)}{' '}
				{' '}
			</P1>{' '}
			<br />
			<PageInfo>
				<P1 color="#616161"> Item Quantity: </P1> {' '}
				<P1
					color="#000000"
					weight={500}
					style={{ cursor: 'pointer' }}
					onClick={() => setcount(count > 1 ? count - 1 : 1)}
				>
					{' '}
					- {' '}
				</P1>{' '}
				<Itemcounter> {count} </Itemcounter> {' '}
				<P1 color="#000000" weight={500} style={{ cursor: 'pointer' }} onClick={() => setcount(count + 1)}>
					{' '}
					+ {' '}
				</P1>{' '}
				{' '}
			</PageInfo>{' '}
			<H1> Rs. {count * price} </H1> {' '}
			<ButtonContainer>
				<Wrapper onClick={AddCart} color="#8bc34a" background="white" border="#8bc34a" to="#">
					{' '}
					Add to Cart {' '}
				</Wrapper>{' '}
				{' '}
				<Wrapper onClick={AddCart} to="#">
					{' '}
					Buy Now {' '}
				</Wrapper>{' '}
				{' '}
			</ButtonContainer>{' '}
			{' '}
		</DescriptionContainer>
	);
};

export default DescriptionAndBuy;
