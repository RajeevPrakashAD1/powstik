import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import googleIcon from '../../../assets/googleIcon.svg';
import { Link } from 'react-router-dom';
const GoogleButton = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Button className="mybutton" variant="primary" size="lg" block>
					<img src={googleIcon} alt="fb" />
					Sign in with google
				</Button>
			</Wrapper>
		</React.Fragment>
	);
};

export default GoogleButton;
const Wrapper = styled.div`
	.mybutton {
		background-color: rgba(139, 195, 74, 0.2);

		width: 274.33px;
		height: 47.33px;
		border: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;

		font-size: 20px;
		color: black;
	}
	:hover {
		cursor: pointer;
		background-color: #e8f3db;
	}
`;
