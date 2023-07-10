import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FilterComponent from './FilterComponent';
import { useEffect } from 'react';
import { getCategory, getProduct } from '../../configApi/utilFunction';
import styled from 'styled-components';
import { bufferToBase64 } from '../../util/utilfunction';
import { Navigate, useNavigate } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const Heading = styled.h1`margin-bottom: 20px;`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const FilterWrapper = styled.div`
	position: sticky;
	top: 0;
	flex: 1;
	margin: 20px;
	display: inline;
`;

const ProductColumn = styled.div`margin-right: 20px;`;

const CategoryHeading = styled.h3`margin-bottom: 10px;`;

const ProductItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductImage = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	margin-right: 10px;
`;

const ProductName = styled.h2`margin: 0;`;

const ViewProductButton = styled.button`
	background-color: #4caf50;
	color: white;
	border: none;
	padding: 8px 16px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 14px;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #45a049;
	}
`;

const ToggleButton = styled.button`
	background-color: ${(props) => (props.isExpanded ? '#4caf50' : '#f44336')};
	color: white;
	border: none;
	padding: 8px 16px;
	text-align: center;
	text-decoration: none;
	${'' /* display: inline-block; */} font-size: 14px;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => (props.isExpanded ? '#45a049' : '#e53935')};
	}
`;

const ProductPage = () => {
	const products = useSelector((state) => state.product.product);
	const categories = useSelector((state) => state.category.categories);
	const navigate = useNavigate();

	const [ filteredCategories, setFilteredCategories ] = useState([]);
	const [ isFilterExpanded, setIsFilterExpanded ] = useState(true);

	const handleFilterChange = (selectedCategories) => {
		setFilteredCategories(selectedCategories);
	};

	const handleToggleFilter = () => {
		setIsFilterExpanded(!isFilterExpanded);
	};

	const filteredProducts = (category) => {
		const pro = products.filter((p) => p.category == category);
		console.log('pro', pro);
		return pro;
	};
	const bufToImg = (data) => {
		var imageSource = `data:image/jpeg;base64,${bufferToBase64(data)}`;
		return imageSource;
	};

	const handleClick = (id, name) => {
		//console.log('clc', id, name);
		navigate('/product/' + id);
	};
	useEffect(() => {
		getCategory();
		getProduct();
	}, []);

	return (
		<Container>
			<Heading>Product Catalog</Heading>
			<FilterWrapper>
				<ToggleButton onClick={handleToggleFilter} isExpanded={isFilterExpanded}>
					{isFilterExpanded ? 'Collapse Filter' : 'Expand Filter'}
				</ToggleButton>
				{isFilterExpanded && <FilterComponent onFilterChange={handleFilterChange} />}
			</FilterWrapper>
			<ContentWrapper>
				<ProductWrapper>
					{filteredCategories.map((category) => (
						<div className="mdiv" key={category}>
							<h2>{category}</h2>
							<div className="cwp">
								{filteredProducts(category).map((product) => (
									<div className="pp">
										<img
											className="pimg"
											src={bufToImg(product.uploaded_images[0].data)}
											alt="img"
										/>
										<p>{product.name}</p>
										<button
											onClick={() => handleClick(product._id, product.name)}
											className="mybutton"
										>
											view product
										</button>
									</div>
								))}
							</div>
						</div>
					))}
				</ProductWrapper>
			</ContentWrapper>
		</Container>
	);
};

export default ProductPage;

const ProductWrapper = styled.div`
	background-color: ;
	.mdiv {
		display: flex;
		flex-direction: column;
		padding: 20px;
	}
	.pimg {
		height: 150px;
		width: 150px;
	}
	.cwp {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		${'' /* background-color: red; */} flex-wrap: wrap;

		margin: 20px;
	}
	.pp {
		margin: 20px;
		${'' /* background-color: blue; */} ${'' /* width: 300px; */};
	}
	.mybutton {
		background-color: #8bc34a;
		border-radius: 5px;
		width: 174.33px;
		height: 47.33px;
		border: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 170px;
		font-size: 20px;
		color: white;
		cursor: pointer;
	}
`;
