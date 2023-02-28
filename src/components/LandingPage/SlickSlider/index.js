import React from 'react';

import Slider from 'react-slick';
import styled from 'styled-components';

import ProductCard from '../Card';

import prod1 from '../../../assets/product1.png';
import prod2 from '../../../assets/product2.png';
import prod3 from '../../../assets/product3.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import arrowLeft from '../../../assets/arrow-left.png';
import arrowRight from '../../../assets/arrow-without-bg-right.png';
import { useSelector } from 'react-redux';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<img src={arrowRight} style={{ ...style, marginLeft: '1rem', zIndex: '2' }} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style, marginRight: '1.5rem', zIndex: '2' }} onClick={onClick}>
			<img src={arrowLeft} style={{ ...style, marginLeft: '-1rem', zIndex: '2' }} />
		</div>
	);
}

const CardSlider = ({ category }) => {
	//console.log(category, 'products ==? ', products);
	console.log('slicder category: ', category);
	let products = useSelector((state) => state.product.product);
	console.log('products', products);
	//products = products.filter((product) => product.categories.includes(category));
	//console.log('slider products', products);

	var settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	};
	return (
		<Container>
			<Slider {...settings}>
				{products &&
					products.map((product, index) => {
						return (
							<Cards>
								<ProductCard
									id={product.product_id}
									discount={product.discount}
									image={product.image}
									//subtitle={product.subtitle}
									description={product.description}
									price={product.price}
								/>
							</Cards>
						);
					})}
			</Slider>
		</Container>
	);
};
{
	/* <Cards>
					<ProductCard
						discount="20"
						image={prod1}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="35"
						image={prod3}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="25"
						image={prod1}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="15"
						image={prod3}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="150"
						image={prod1}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="20"
						image={prod3}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="15"
						image={prod1}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards>
				<Cards>
					<ProductCard
						discount="30"
						image={prod3}
						subtitle="Diabetes"
						description="Befach Rice for Diabetics"
						price="504"
					/>
				</Cards> */
}
{
	/* </Slider>
		</Container>
	);
}; */
}

export default CardSlider;

const Container = styled.div`
	width: 85vw;
	height: auto;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 5rem;
	@media (max-width: 500px) {
		width: 70vw;
	}
`;

export const Cards = styled(Slider)`
  margin-left: 1rem;
  padding-left: 0.1rem;
`;
