import { Button, Tooltip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import AccountImage from '../../../assets/Group.svg';
import account from '../../../assets/account.png';
import order from '../../../assets/bus.png';
import noti from '../../../assets/ghanti.png';
import logout from '../../../assets/logout.png';

import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Link } from 'react-router-dom';
//images

const Div2 = () => {};
const Navpop = (props) => {
	const handleLogout = () => {
		// Remove the token from local storage
		localStorage.removeItem('token');

		// Refresh the page to clear the application state
		window.location.reload();
	};
	return (
		<React.Fragment>
			<Tippy
				interactive={true}
				interactiveBorder={20}
				content={
					<span>
						<Wrapper>
							{/* <H1>Account</H1>
							<img src={account} width="10px" height="10px" alt="account" /> */}
							<Link to={`/account-details`}>
								<div className="pdiv">
									<img className="cedimg" src={account} alt="a" width="20px" height="20px" />
									<P1>My Account</P1>
								</div>
							</Link>
							<Link to={`/order`}>
								<div className="pdiv">
									<img className="cedimg" src={order} alt="a" width="20px" height="20px" />
									<P1>Order</P1>
								</div>
							</Link>
							<Link to={`/wishlist`}>
								<div className="pdiv">
									<img className="cedimg" src={noti} alt="a" width="20px" height="20px" />
									<P1>Wishlist</P1>
								</div>
							</Link>
							<Link to={`/`}>
								<div className="pdiv" onClick={handleLogout}>
									<img className="cedimg" src={logout} alt="a" width="20px" height="20px" />
									<P1>Logout</P1>
								</div>
							</Link>
						</Wrapper>
					</span>
				}
			>
				<Button>
					<img src={AccountImage} alt="Account" style={{ width: 30, height: 30 }} />
				</Button>
			</Tippy>
		</React.Fragment>
	);
};
export default Navpop;

const Wrapper = styled.div`
	width: 150px;
	height: 120px;
	background-color: white;
	padding: 5px;
	${'' /* box-shadow: 5px 10px #888888; */} filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(4px 0px 4px rgba(139, 195, 74, 0.2));
	.cedimg {
		margin-right: 10px;
	}
	.pdiv {
		display: flex;
		justify-content: left;
		align-items: center;
		flex-direction: row;
	}
`;

{
	/* <Tooltip title="hello">
				<Button>
					<img src={AccountImage} alt="Account" style={{ width: 30, height: 30 }} />
				</Button>
			</Tooltip> */
}
