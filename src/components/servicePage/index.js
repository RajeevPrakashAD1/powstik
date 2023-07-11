import React from 'react';
import DescriptionAndBuy from '../ProductPage/DescriptionAndBuy/DescriptionAndBuy.component';
import {
	ProductContainer,
	Container,
	BuyContainer,
	ImageShow,
	Cards,
	CardsContainer,
	DiscountContainer,
	DiscountContent
} from '../ProductPage/product.styles.jsx';
import { ImageContainer } from './servicePage.styles';
import image2 from '../../assets/Rectangle 61.svg';
import { H1, P1 } from '../../util/StyledComponent/premadeComponent';
import ProductCard from '../../util/cardSlider/card';
import prod1 from '../../assets/Rectangle 63.svg';
import prod2 from '../../assets/Rectangle 62.svg';
import prod3 from '../../assets/Rectangle 61 (1).svg';
import prod4 from '../../assets/Rectangle 64.svg';
import Header from '../LandingPage/Header/Header.component';
import Footer from '../LandingPage/FooterWhite';
import { useEffect } from 'react';

const ServicePage = () => {
	useEffect(() => {
		alert('service page is not available now it will start soon');
	}, []);
	return (
		<React.Fragment>
			<Header />
			<Container>
				<ProductContainer>
					<P1
						color="#616161"
						size={21}
						weight={400}
						lineHeight={24}
						style={{ paddingBottom: 18, paddingTop: 20 }}
					>
						Home/Services
					</P1>
					<H1 color="#000000" size={32} lineHeight={40} style={{ paddingBottom: 50 }}>
						Anusha Santhanakrishnan
					</H1>
					<BuyContainer>
						<ImageContainer>
							<ImageShow>
								<DiscountContainer>
									<DiscountContent>35% off</DiscountContent>
								</DiscountContainer>
								<img
									src={image2}
									alt="BigPreview"
									style={{ marginRight: 20, marginLeft: 20, paddingTop: 80, paddingBottom: 20 }}
								/>
							</ImageShow>
						</ImageContainer>
						<DescriptionAndBuy
							heading="Service Tags"
							disease="Diabetes"
							type="Mother and child"
							price={3000}
							count={1}
							description1="Therapeutic Nutrition Counseling by Anusha Santhanakrishnan "
							description2=""
						/>
					</BuyContainer>
					<H1 size={34} lineHeight={42}>
						Similar Products
					</H1>
					<CardsContainer>
						<Cards>
							<ProductCard
								discount="20"
								image={prod1}
								subtitle="Therapeutic Nutrition Counseling"
								description="Anusha Santhanakrishnan"
								price="3000"
							/>
						</Cards>
						<Cards>
							<ProductCard
								discount="20"
								image={prod2}
								subtitle="Therapeutic Nutrition Counseling"
								description="Anusha Santhanakrishnan"
								price="3000"
							/>
						</Cards>
						<Cards>
							<ProductCard
								discount="20"
								image={prod3}
								subtitle="Therapeutic Nutrition Counseling"
								description="Anusha Santhanakrishnan"
								price="3000"
							/>
						</Cards>
						<Cards>
							<ProductCard
								discount="20"
								image={prod4}
								subtitle="Therapeutic Nutrition Counseling"
								description="Anusha Santhanakrishnan"
								price="3000"
							/>
						</Cards>
					</CardsContainer>
				</ProductContainer>
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default ServicePage;
