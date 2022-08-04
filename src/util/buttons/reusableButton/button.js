import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import buttonCart from '../../../assets/buttonCart.svg';
import { Link } from 'react-router-dom';

const GButton = (props) => {
	return (
		<React.Fragment>
			<Wrapper bg={props.bg} width={props.width}>
				<Button className="mybutton" variant="primary" type="submit" size="lg" block>
					{props.title}
				</Button>
			</Wrapper>
		</React.Fragment>
	);
};

export default GButton;

const Wrapper = styled.div`
	.mybutton {
		background-color: ${(props) => props.bg || '#111111'};
		width: ${(props) => props.width || '110px'};
		height: 34px;
		min-width: 110px;
		border: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;

		font-size: 15px;
		color: white;
		padding: 15px;
	}
	.mybutton:hover {
		cursor: pointer;

		background-color: #e8f3db;
	}
`;
