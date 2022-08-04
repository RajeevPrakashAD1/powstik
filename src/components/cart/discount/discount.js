import React from 'react';
import styled from 'styled-components';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import cartDis from '../../../assets/cartDis.png';
const Discount = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<div className="left">
					<H1 size="22" className="p1">
						First time user? Get 500 off
					</H1>
					<div className="cddiv">
						<P1 size="13" weight="300">
							{' '}
							Apply code : 500{' '}
						</P1>
					</div>
				</div>
				<div>
					<img src={cartDis} alt="dfl" />
				</div>
			</Wrapper>
		</React.Fragment>
	);
};
export default Discount;

const Wrapper = styled.div`
	background-color: #e8f3db;
	height: 100px;
	width: 573px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 80%;
		margin: 20px;
		width: auto;
		height: auto;
	}

	.left {
		text-align: center;
		margin: 10px 30px;
	}
	.cddiv {
		background-color: #ffff;
		margin-top: 10px;
		border: 1px dashed #000000;
		border-radius: 10px;
	}
`;
