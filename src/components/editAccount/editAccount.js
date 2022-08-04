import React from 'react';

import styled from 'styled-components';
import Header from './../LandingPage/Header/Header.component';
import { H1, P1 } from './../../util/StyledComponent/premadeComponent';
import Comp from './comp';
import Footer from './../LandingPage/FooterWhite/index';
import { NotifySuccess, NotifyDanger, Toastcontainer } from '../../util/notify';

const EditAccount = () => {
	return (
		<React.Fragment>
			<Header />

			<Wrapper2>
				<Wrapper3>
					<P1 color="grey">Home/account</P1>
					<H1 size="30" weight="700">
						{' '}
						Edit Account Details
					</H1>
					<Wrapper>
						<Comp />
					</Wrapper>
				</Wrapper3>
			</Wrapper2>
			<Footer />
		</React.Fragment>
	);
};

export default EditAccount;
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	background-color: #ffff;
	padding: 50px;
	@media (max-width: 900px) {
		flex-direction: column;
		padding: 0px;
	}
`;

const Wrapper2 = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-color: #e8f3db;

	@media (max-width: 500px) {
		padding: 3px;
		width: 100vw;
	}
`;

const Wrapper3 = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffff;
	padding: 20px;
`;
