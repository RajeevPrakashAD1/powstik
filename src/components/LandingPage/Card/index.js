import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const cutter = (str) => {
	if (str.length > 80) {
		return str.substring(0, 80) + '...';
	} else {
		return str;
	}
};

const ProductResults = (props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		//console.log('clicked', props);
		navigate('/product/' + props.id);
	};
	return (
		<Container>
			<Card>
				<DiscountTag> {props.discount}% OFF</DiscountTag>
				<StyledImage src={props.image} />
				<ProductType> {props.subtitle} </ProductType>

				<ProductDesc> {cutter(props.description)} </ProductDesc>
				<ProductPrice> ₹{props.price} </ProductPrice>
				<StyledBtn onClick={handleClick}> View Product</StyledBtn>
			</Card>
		</Container>
	);
};

export default ProductResults;

const Container = styled.div`
	width: auto;
	height: auto;
`;

const Card = styled.div`
	width: fit-content;
	height: auto;
	background-color: #e8f3db;
	overflow: auto;
	padding-bottom: 1rem;
`;

const DiscountTag = styled.div`
	width: fit-content;
	height: 46.11px;
	background: #8bc34a;

	font-style: normal;
	font-weight: 600;
	font-size: 23.954px;
	line-height: 29px;
	color: #ffffff;
	clip-path: polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0);

	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1.5rem;
	padding-right: 2rem;

	margin-top: 1rem;
`;

const StyledImage = styled.img`
	width: 200px;
	height: 200px !important;
	height: auto;
	margin: 0 auto !important;

	padding: 2rem;
`;

const ProductType = styled.div`
	width: fit-content;
	height: auto;

	font-style: normal;
	font-weight: 350;
	font-size: 14.4967px;
	line-height: 20px;

	color: #333333;

	margin-left: 2rem;
`;

const ProductDesc = styled.div`
	font-family: 'Merriweather';
	font-style: normal;
	font-weight: 700;
	font-size: 17.0549px;
	line-height: 21px;

	color: #111111;

	margin-left: 2rem;
	margin-top: 0.5rem;

	${'' /* padding-right: 5rem; */};
`;

const ProductPrice = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 14.923px;
	line-height: 17px;

	color: #333333;

	margin-left: 2rem;
	margin-top: 0.5rem;
`;

const StyledBtn = styled.button`
	background: #ffffff;
	border-radius: 1px;
	border: 0px;

	font-style: normal;
	font-weight: 600;
	font-size: 17.0549px;
	line-height: 21px;

	color: #000000;

	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	margin-right: 1rem;
	margin-top: 1rem;

	float: right;
`;
