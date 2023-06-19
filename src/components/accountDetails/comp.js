import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GButton from '../../util/buttons/reusableButton/button';

import { Input } from '../../util/StyledComponent/input';
import { P2, H1, P1 } from './../../util/StyledComponent/premadeComponent';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { bufferToBase64 } from '../../util/utilfunction';

const Comp = (props) => {
	//     fieldname: 'profile_image',
	//     originalname: 'myPic.jpeg',
	//     encoding: '7bit',
	//     mimetype: 'image/jpeg',
	//     destination: './Profile_uploads/',
	//     filename: 'myPic.jpeg',
	//     path: 'Profile_uploads\\myPic.jpeg',
	//     size: 154187
	//   } body [Object: null prototype] {
	//     firstName: 'raj',
	//     lastName: 'fads',
	//     gender: 'mal',
	//     phoneNumber: '983',
	//     email: 'rajeev.prakash2020@vitstudent.ac.in',
	//     country_region: 'dsaf',
	//     town_city: 'df',
	//     street_name: 'df',
	//     doorno: 'dfs',
	//     state: 'dsfa',
	//     pin: '980'
	const navigate = useNavigate();
	const data = useSelector((state) => state.user.user);
	const [ loggedIn, setLoggedIn ] = useState(false);
	//console.log(data);
	var imageSource = '#';
	if (data.first_name != 'Not logged in') {
		imageSource = `data:image/jpeg;base64,${bufferToBase64(data.profilePic.data.data)}`;
	}

	useEffect(
		() => {
			//console.log(data);
			if (data.first_name !== 'Not logged in') {
				setLoggedIn(true);
			}
		},
		[ data ]
	);

	return loggedIn ? (
		<Wrapper>
			<div className="onedivimg">
				<div className="eaimg">
					<img height="100" width="100" src={imageSource} alt="icon" />
				</div>
				<div>
					<H1 size="18" weight="600">
						{data.firstName + ' '}

						{data.lastName}
					</H1>
					<P1 size="14">{data.user_id}</P1>
					<P1 size="14" weight="600" color="#8BC34A">
						{' '}
						{data.type}
					</P1>
				</div>
			</div>

			<div className="pdiv">
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Gender</P2>
						<P2 color="#616161">{data.gender}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Phone</P2>
						<P2 color="#616161">{data.phoneNumber}</P2>
					</div>
				</div>

				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Email Address</P2>
						<P2 color="#616161">{data['email']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Country/Region</P2>
						<P2 color="#616161">{data.address['country']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Town / City</P2>
						<P2 color="#616161">{data.address['city']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Street address</P2>
						<P2 color="#616161">{data.address['street']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Door no / Plot no</P2>
						<P2 color="#616161">{data.address['doorNo']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">State</P2>
						<P2 color="#616161">{data.address['state']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">PIN</P2>
						<P2 color="#616161">{data.address['pin']}</P2>
					</div>
				</div>
			</div>

			<div className="onedivbtn">
				<Link to="/edit-account">
					<GButton title="Edit Account Details" width="300px" bg="#8BC34A" />
				</Link>
			</div>
		</Wrapper>
	) : (
		<Link to="/login"> Plz Login First </Link>
	);
};
export default Comp;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	align-items: left;
	justify-content: space-around;

	padding: 5px;
	margin: 10px;
	@media (max-width: 500px) {
		width: auto;
	}

	img {
		border-radius: 50%;
	}

	.insidediv {
		width: 400px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 20px;
	}
	.onediv {
		margin: 20px;
	}
	.eaimg {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #e8f3db;
		margin-right: 20px;
	}
	.onedivimg {
		display: flex;
		flex-direction: row !important;
		margin-right: 200px;
		margin-bottom: 50px;
		align-items: center;
		width: 300px;
		justify-content: space-around;
	}
	.onedivbtn {
		display: flex;
		flex-direction: row;
		margin-right: 200px;
		margin-bottom: 50px;
		align-items: center;
		justify-content: between;
		margin-top: 20px;
	}
	.Cgbtn {
		background: transparent !important;
		border: 2px solid #8bc34a;
		margin-right: 20px;
		width: 300px;
		color: #8bc34a;
		margin: 20px;
	}

	@media (max-width: 500px) {
		.onedivbtn {
			flex-direction: column;
		}
		.insidediv {
			width: 200px !important;
		}

		.pdiv {
			width: 300px;
		}
	}
`;
