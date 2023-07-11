import React from 'react';
import styled from 'styled-components';
import { bufToImg } from '../../util/utilfunction';
import { Navigate, useNavigate } from 'react-router-dom';

const WishlistUi = ({ name, category, price, imgSrc, id }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		//console.log('clc', id, name);
		navigate('/product/' + id);
	};
	return (
		<Container>
			<ImageContainer>
				<img height="100px" width="100px" src={bufToImg(imgSrc)} alt="Product" />
			</ImageContainer>
			<Content>
				<h3>{name}</h3>
				<p>Category: {category}</p>
				<p>Price: {price}</p>
				<Button onClick={handleClick}>View</Button>
			</Content>
		</Container>
	);
};

export default WishlistUi;

const Container = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 10px;
	width: 300px;
	height: 300px;
`;

const ImageContainer = styled.div`
	width: 100px;
	height: 100px;
	margin-right: 20px;
	${'' /* overflow: hidden; */};
`;

const Content = styled.div`flex: 1;`;

const Button = styled.button`
	background-color: #8bc34a;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;
