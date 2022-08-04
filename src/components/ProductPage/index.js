import React, { useEffect } from 'react';
import DescriptionAndBuy from './DescriptionAndBuy/DescriptionAndBuy.component';
import {
	ProductContainer,
	Container,
	BuyContainer,
	ImagePreview,
	ImageShow,
	ImageContainer,
	CardsContainer,
	DiscountContainer,
	DiscountContent
} from './product.styles';
import { H1, P1 } from '../../util/StyledComponent/premadeComponent';
import Header from '../LandingPage/Header/Header.component';
import Footer from '../LandingPage/FooterWhite';
import { useParams } from 'react-router-dom';
import { Submit } from '../../configApi/function';
import CardSlider from '../LandingPage/SlickSlider';
// import CardSlider from './../../util/cardSlider/cardSlider';
const ProductPage = () => {
	let { id } = useParams();
	//console.log('useparams', id);
	const [ product, setProducts ] = React.useState(null);
	const getProduct = async () => {
		const res = await Submit({}, '/product/' + id, 'get');

		setProducts(res.data);
		console.log('product data', res.data);
	};
	useEffect(
		() => {
			getProduct();
		},
		[ id ]
	);

	return (
		<React.Fragment>
			<Header />
			{product && (
				<Container>
					<ProductContainer>
						<P1
							color="#616161"
							size={21}
							weight={400}
							lineHeight={24}
							style={{ paddingBottom: 18, paddingTop: 20 }}
						>
							Home/Products
						</P1>
						<H1 color="#000000" size={32} lineHeight={40} style={{ paddingBottom: 50 }}>
							{/* 120 Tablets – Ryder Spirulina */}
							{product.name}
						</H1>
						<BuyContainer>
							<ImageContainer>
								<ImagePreview>
									<img
										src={product.image}
										alt="Preview"
										style={{ background: 'rgba(139, 195, 74, 0.2)', marginBottom: 12 }}
										height="100px"
									/>
									<img
										src={product.image}
										alt="Preview"
										style={{ background: 'rgba(139, 195, 74, 0.2)', marginBottom: 12 }}
										height="100px"
									/>
									<img
										src={product.image}
										alt="Preview"
										style={{ background: 'rgba(139, 195, 74, 0.2)', marginBottom: 12 }}
										height="100px"
									/>
									<img
										src={product.image}
										alt="Preview"
										style={{ background: 'rgba(139, 195, 74, 0.2)', marginBottom: 12 }}
										height="100px"
									/>
								</ImagePreview>
								<ImageShow>
									<DiscountContainer>
										<DiscountContent>{product.discount}% off</DiscountContent>
									</DiscountContainer>
									<img src={product.image} alt="BigPreview" />
								</ImageShow>
							</ImageContainer>
							<DescriptionAndBuy
								id={id}
								heading="Product Tags"
								disease="Diabetes"
								type={product.categories[0]}
								price={product.price}
								count={1}
								description1={product.description}
								description2="Taste profile: A little savoury, a little sweet. A little crunchy a little chewy. A hint of pepper a tinge of chilly. Good health & great taste in every bite."
							/>
						</BuyContainer>
						<H1 size={34} lineHeight={42}>
							Similar Products
						</H1>
						<CardsContainer>
							<CardSlider category={product.categories[0]} />
						</CardsContainer>
					</ProductContainer>
				</Container>
			)}
			<Footer />
		</React.Fragment>
	);
};

export default ProductPage;
