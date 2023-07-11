import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import buttonCart from '../../../assets/buttonCart.svg';
import { Link } from 'react-router-dom';
const BookButton = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Link to="/products">
					<Button className="mybutton" variant="primary" size="lg" block>
						<img src={buttonCart} alt="fb" />
						Shop Now
					</Button>
				</Link>
			</Wrapper>
		</React.Fragment>
	);
};

export default BookButton;
const Wrapper = styled.div`
	.mybutton {
		background-color: #8bc34a;
		border-radius: 5px;
		width: 174.33px;
		height: 47.33px;
		border: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 170px;
		font-size: 20px;
		color: white;
		cursor: pointer;
	}
`;
