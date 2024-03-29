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
import { Submit } from '../../../configApi/function';
import { NotifySuccess, Toastcontainer } from '../../../util/notify';
import { ToastContainer } from 'react-toastify';

const DescriptionAndBuy = ({ heading, disease, type, price, description1, description2, id }) => {
	const [ count, setcount ] = useState(1);
	const [ descriptionstatus, setdescriptionstatus ] = useState('description');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	//const cart = useSelector((state) => state.cart.cart);

	const AddCart = async () => {
		const res = await Submit({ email: user.email, productId: id }, '/add-to-cart', 'post');
		if (res.data) {
			NotifySuccess('Successfully Added to Cart');
		}
	};

	const AddWishlist = async () => {
		const res = await Submit({ userEmail: user.email, productId: id }, '/addwishlist', 'post');
		if (res.data) {
			NotifySuccess('Successfully Added to whislist');
		}
	};
	return (
		<DescriptionContainer>
			<H1 size={24} color="#000000" lineHeight={32} style={{ paddingBottom: 10 }}>
				{' '}
				{heading} {' '}
			</H1>{' '}
			{' '}
			<PageInfo>
				<PageInfoButton> {type} </PageInfoButton> {' '}
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
				{descriptionstatus === 'description' ? description1 : description2} {' '}
			</P1>{' '}
			{' '}
			{/* <P1 color="#616161" style={{ paddingBottom: 20 }}>
				{' '}
				{descriptionstatus === 'description' ? description1 : 'L'} {' '}
			</P1>{' '} */}
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
				<Wrapper onClick={AddWishlist} to="#">
					{' '}
					Whishlist {' '}
				</Wrapper>{' '}
				{' '}
			</ButtonContainer>{' '}
			<ToastContainer />
		</DescriptionContainer>
	);
};

export default DescriptionAndBuy;
