import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import LandingPage from './components/LandingPage';
import Cart from './components/cart/cart';
import EditAccount from './components/editAccount/editAccount';
import AccountDetails from './components/accountDetails/account';
import ProductResults from './components/productResults';
import AddProduct from './components/addProductPage/addProduct';
import UpdateProduct from './components/updateProductPage/updateProductPage';
import AddService from './components/addServicePage/addServicePage';
import UpdateService from './components/updateServicePage/updateServicePage';
import ProductPage from './components/ProductPage';
import ServicePage from './components/servicePage';
import { getCategory, getUserDetails } from './configApi/utilFunction';

import ContactUs from './components/dummyPages/contactUs';
import Tos from './components/dummyPages/termsOfService';
import About from './components/dummyPages/about';
import RefundPolicy from './components/dummyPages/refundPolicy';
import PrivacyPolicy from './components/dummyPages/privacyPolicy';
import Credits from './components/dummyPages/credits';
import NoRoutes from './components/noRoutes/noroutes';
import Header from './components/LandingPage/Header/Header.component';
import ProductOverview from './components/Products/ProductOverview/ProductOverview.component';

import FetchUserDetails from './configApi/fetchUser';

import ProductsPage from './components/ProductCatalog/productCatalog';
import CustomerOrders from './components/orders/order';
import Whislist from './components/wishlist/wishlist';
import Merchantorder from './components/orderReceived/or';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
	const [ isLaptopScreen, setIsLaptopScreen ] = useState(window.innerWidth >= 1024);
	const user = useSelector((state) => state.user.user);
	useEffect(() => {
		getUserDetails();
	}, []);
	useEffect(() => {
		const handleResize = () => {
			setIsLaptopScreen(window.innerWidth >= 1024);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isLaptopScreen ? (
		<Router>
			<div className="App">
				<Header />
				<FetchUserDetails />

				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/edit-account" element={<EditAccount />} />
					<Route path="/account-details" element={<AccountDetails />} />
					{/* <Route path="/products" element={<ProductResults />} /> */}
					{/* <Route path="/addproduct" element={<AddProduct />} /> */}
					<Route path="/updateproduct" element={<UpdateProduct />} />
					<Route path="/addservice" element={<AddService />} />
					<Route path="/updateservice" element={<UpdateService />} />
					<Route path="/products" element={<ProductsPage />} />

					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/service" element={<ServicePage />} />
					{/* <Route path="/product" element={<ProductOverview />} /> */}
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/tos" element={<Tos />} />
					<Route path="/about" element={<About />} />
					<Route path="/refund-policy" element={<RefundPolicy />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/credits" element={<Credits />} />

					{/* <Route path="/addService" element={<AddService />} /> */}
					<Route path="/order" element={<CustomerOrders />} />
					<Route path="/wishlist" element={<Whislist />} />
					{user &&
					user.type === 'seller' && (
						<React.Fragment>
							<Route path="/addProduct" element={<AddProduct />} />
							<Route path="/orderreceived" element={<Merchantorder />} />
						</React.Fragment>
					)}

					<Route path="*" element={<NoRoutes screen={1} />} />
				</Routes>
			</div>
		</Router>
	) : (
		<Router>
			<Routes>
				<Route path="*" element={<NoRoutes screen={0} />} />
			</Routes>
		</Router>
	);
}

export default App;
