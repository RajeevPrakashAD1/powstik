import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import buttonCart from '../../../assets/buttonCart.svg';
import { Link } from 'react-router-dom';
const LSButton = (props) => {
	return (
		<React.Fragment>
			<Wrapper>
				<Button type="submit" className="mybutton" variant="primary" size="lg" block>
					{props.title}
				</Button>
			</Wrapper>
		</React.Fragment>
	);
};

export default LSButton;
const Wrapper = styled.div`
	${'' /* background-color: ; */} .mybutton {
		background-color: #8bc34a;

		width: 114px;
		height: 34px;
		border: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 170px;
		font-size: 20px;
		color: white;
	}
	.mybutton:hover {
		cursor: pointer;
		scale: 1.1;
	}
`;
