import React from 'react';
import styled from 'styled-components';
import BuyNowButton from '../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
//images

import bank from '../../../assets/bank.png';
import GButton from '../../../util/buttons/reusableButton/button';
import { Button } from 'react-bootstrap';
const Div = (props) => {
	//console.log(props);

	return (
		<Cd>
			<div className="up">
				<div>
					<H1 size="15" lineHeight="15" className="p1">
						{' '}
						{props.item.title}{' '}
					</H1>
					<P1 size="9" className="p1">
						{' '}
						{props.item.desc}{' '}
					</P1>
				</div>
				<img className="cedimg" src={bank} height="40" alt="icon" />
			</div>
			<div className="down">
				<div>
					<P1 weight="600" size="16">
						Code:
					</P1>
					<P1 weight="600" size="16">
						{props.item.code}
					</P1>
				</div>
				<Button className="mybtn121">copy code</Button>
			</div>
		</Cd>
	);
};
export default Div;

const Cd = styled.div`
	background-color: #e8f3db;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: left;

	margin: 20px;
	margin-left: 0px;
	padding: 10px;
	border-radius: 10px;

	.down {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		margin-top: 20px;
	}
	.cedimg {
		margin-left: 10px;
	}
	.mybtn121 {
		border: none;
		background: #8bc34a;
		border-radius: 5px;
		text-align: center;
		width: 70px;
		height: 20px;
		font-size: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.up {
		display: flex;
		flex-direction: row;
	}
`;
