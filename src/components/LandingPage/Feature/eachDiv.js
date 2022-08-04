import React from 'react';
import styled from 'styled-components';
import BuyNowButton from '../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
//images
import fb1 from '../../../assets/fb1.svg';
import fb2 from '../../../assets/fb2.svg';
import fb3 from '../../../assets/fb3.svg';
import fb4 from '../../../assets/fb4.svg';
import fb5 from '../../../assets/fb5.svg';
const Div = (props) => {
	// console.log(props);

	return (
		<Cd>
			<div>
				<img src={props.item.icon} height="20" alt="icon" />
			</div>
			<div className="right">
				<P1 className="p1"> {props.item.txt1} </P1>
				<P1 className="p1"> {props.item.txt2} </P1>
			</div>
		</Cd>
	);
};
export default Div;

const Cd = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #ffff;
	padding: 20px;
	width: 250px;
	height: 78px;
	margin: 20px;
	.p1 {
		color: black;
	}
	.right {
		margin-left: 20px;
	}
`;
