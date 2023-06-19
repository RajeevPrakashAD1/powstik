import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NotifySuccess, NotifyDanger, Toastcontainer } from '../../util/notify';
// import BuyNowButton from '../../../util/ShopNowButton/index';
import { H1, P1 } from './../../util/StyledComponent/premadeComponent';
//images
import loginImg from '../../assets/login.png';
import { Input } from './../../util/StyledComponent/input';
import LSButton from './../../util/buttons/LoginButton/loginbutton';
import GoognleButton from './../../util/buttons/googleLoginButton/googlebutton';
import Footer from '../../util/components/FooterWhite';
import Header from '../LandingPage/Header/Header.component';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalStyles } from '../Login/login';
import { baseURL } from '../../configApi/config';
import { Submit } from '../../configApi/function';
const Signup = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const [ user, setUser ] = useState(true);
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		data['type'] = user ? 'customer' : 'seller';
		//console.log(data);

		//const baseURL = 'https://powstik-back-test.azurewebsites.net';
		//const url = baseURL + '/user/register';
		if (data.email.indexOf('@') == -1) {
			NotifyDanger('not valid email');
			return;
		}
		// if (data.terms == false) {
		// 	NotifyDanger('Please accept the terms and conditions');
		// 	return;
		// }
		if (data.password !== data.confirmPassword) {
			NotifyDanger('Password and Confirm Password does not match');
			return;
		}
		if (isNaN(data.phoneNumber)) {
			NotifyDanger('Phone number is not valid');
			return;
		}

		if (data.phoneNumber.length < 10 || data.phoneNumber.length > 13) {
			NotifyDanger('Phone number is not valid');
			return;
		}
		delete data.confirmPassword;
		delete data.terms;
		const data2 = JSON.parse(JSON.stringify(data));
		//console.log(data2);

		const res = await Submit(data2, '/signup', 'post');
		if (res.status === 200 || res.status === 201) {
			NotifySuccess('Successfully registered');
			//alert('Successfully registered');
			setTimeout(function() {
				navigate('/login');
			}, 1000);
		} else {
			NotifyDanger(res.data.message);
		}

		//console.log('res....', res);
	};
	return (
		<React.Fragment>
			<Header />

			<Wrapper>
				<GlobalStyles />
				<Wrapper2>
					<div className="header">
						<P1 color="grey">Home/Account</P1>
						<H1 color="#000" size="30">
							Register / Sign Up Now
						</H1>
					</div>
					<div className="bodyy">
						<div className="left">
							<img className="img" src={loginImg} alt="Login" />
						</div>
						<div className="right">
							{/* <H1 color="#000" size="45" className="wb">
								Welcome Back !
							</H1> */}

							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="fdiv">
									<P1 color="#000"> First Name* </P1>
									<Input placeholder="rajeev" {...register('firstName', { required: true })} />
									{errors.firstName && <span className="fontcolor">This field is required</span>}
									<P1 color="#000"> Last Name *</P1>
									<Input placeholder="prakash" {...register('lastName', { required: true })} />
									{errors.lastName && <span className="fontcolor">This field is required</span>}

									<P1 color="#000">Email Address *</P1>
									<Input
										placeholder="something@gmail.com"
										{...register('email', { required: true })}
									/>
									{errors.email && <span className="fontcolor">This field is required</span>}

									<P1 color="#000"> Phone Number*</P1>
									<Input placeholder="9636282628" {...register('phoneNumber', { required: true })} />
									{errors.phoneNumber && <span className="fontcolor">This field is required</span>}

									<P1 color="#000"> Password*</P1>
									<Input placeholder="****" {...register('password', { required: true })} />
									{errors.password && <span className="fontcolor">This field is required</span>}

									<P1 color="#000"> Confirm Password*</P1>
									<Input placeholder="*****" {...register('confirmPassword', { required: true })} />
									{errors.confirmPassword && (
										<span className="fontcolor">This field is required</span>
									)}

									<div>
										<input
											type="radio"
											name="customer"
											checked={user}
											onChange={() => setUser(!user)}
										/>{' '}
										<span>i am a customer</span>
									</div>
									<div>
										<input
											type="radio"
											name="r1"
											checked={!user}
											onChange={() => setUser(!user)}
										/>{' '}
										<span>I am a vendor</span>
									</div>

									<div>
										<input
											className="ccbox"
											type="checkbox"
											name="cbox"
											style={{ accentColor: 'rgba(139, 195, 74, 0.8)' }}
											{...register('terms')}
										/>
										<Link to="/na"> Accept Terms and condition</Link>
									</div>

									<LSButton title="Register" />
								</div>
							</form>
						</div>
					</div>
				</Wrapper2>
			</Wrapper>
			<Toastcontainer />

			<Footer />
		</React.Fragment>
	);
};
export default Signup;

const Wrapper = styled.div`
	background: rgba(139, 195, 74, 0.2);
	padding: 2rem;
	height: 100vh;
	@media (max-width: 500px) {
		padding: 0;
		height: auto;
	}
	height: 100%;
`;

const Wrapper2 = styled.div`
	background-color: #ffff;
	padding: 20px;

	min-height: 300px;
	.ccbox {
		margin-right: 5px;
	}

	.fontcolor {
		color: red;
	}
	.header {
		margin-top: 20px;
		margin-left: 20px;

		padding-left: 20px;
		margin-bottom: 50px;
	}
	.fdiv {
		min-height: 650px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.left {
		text-align: center;
	}
	.img {
		height: 400px;
		width: 400px;
	}

	.bodyy {
		min-height: 200px;
		display: flex;
		flex-direction: coloumn;
		justify-content: space-around;

		align-items: center;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	.wb {
		margin-bottom: 50px !important;
	}

	.cbox {
		width: 350px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.hrr {
		width: 30%;
		border: 1.5px solid rgba(139, 195, 74, 1);
		background: rgba(139, 195, 74, 1);
	}
	.or {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.gdiv {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		text-align: center;
	}
	@media (max-width: 500px) {
		.img {
			width: 300px;
			height: 300px;
		}
		.right {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
`;
