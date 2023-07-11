import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { getProduct } from '../../configApi/utilFunction';
import { bufferToBase64 } from '../../util/utilfunction';

// import CardSlider from './../../util/cardSlider/cardSlider';
const ProductPage = () => {
	let { id } = useParams();

	const products = useSelector((state) => state.product.product);
	var product = products.filter((product) => product._id == id)[0];

	const bufToImg = (data) => {
		var imageSource = `data:image/jpeg;base64,${bufferToBase64(data)}`;
		return imageSource;
	};

	useEffect(() => {
		getProduct();
		//getEvent();
	}, []);

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
									{product.uploaded_images.map((i) => (
										<img
											src={bufToImg(i.data)}
											alt="Preview"
											style={{ background: 'rgba(139, 195, 74, 0.2)', marginBottom: 12 }}
											height="100px"
											width="100px"
										/>
									))}
								</ImagePreview>
								<ImageShow>
									<DiscountContainer>
										<DiscountContent>{product.discount}% off</DiscountContent>
									</DiscountContainer>
									<img
										width="350px"
										height="420px"
										src={bufToImg(product.uploaded_images[0].data)}
										alt="BigPreview"
									/>
								</ImageShow>
							</ImageContainer>
							<DescriptionAndBuy
								id={id}
								heading="Product Tags"
								disease="Diabetes"
								type={product.category}
								price={product.price}
								count={1}
								description1={product.description}
								description2={product.vendorInformation}
							/>
						</BuyContainer>
						<H1 size={34} lineHeight={42}>
							Similar Products
						</H1>
						<CardsContainer>
							<CardSlider category={product.category} />
						</CardsContainer>
					</ProductContainer>
				</Container>
			)}
			<Footer />
		</React.Fragment>
	);
};

export default ProductPage;
