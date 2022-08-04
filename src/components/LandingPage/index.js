import React, { useEffect } from 'react';
import BankOffer from './BankOffer/bankoffer';
import Characteristics from './Characteristics/characteristics';

import FeatureBrand from './FeatureBrand';

import Header from './Header/Header.component';
import WebsiteDescription from './WebsiteDescription/WebsiteDescription.components.jsx';
import DiscountBar from './DiscountComponent/Discount.component';
import FooterWhite from './FooterWhite';
import ProductBox from './ProductBox';
//import { add, addMany } from '../../Store/MessageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory, getProduct } from './../../configApi/utilFunction';
const LandingPage = () => {
	useEffect(() => {
		getCategory();
		getProduct();
	}, []);
	return (
		<React.Fragment>

			<DiscountBar />
			<WebsiteDescription />
			<Characteristics />
			<BankOffer />

			<ProductBox />

			<FeatureBrand />
			{/* <Mobile /> */}
			<FooterWhite />
		</React.Fragment>
	);
};

export default LandingPage;
