import React from 'react';
import styled from 'styled-components';
//images
import fb1 from '../../../assets/fb1.svg';
import fb2 from '../../../assets/fb2.svg';
import fb3 from '../../../assets/fb3.svg';
import fb4 from '../../../assets/fb4.svg';
import fb5 from '../../../assets/fb5.svg';
import { H1 } from '../../../util/StyledComponent/premadeComponent';

const Fb = () => {
	return (
		<React.Fragment>
			<MW>
				<H1 size="25"> Brand </H1>
				<Wrapper>
					<img src={fb1} alt="fb" />
					<img src={fb2} alt="fb" />
					<img src={fb3} alt="fb" />
					<img src={fb4} alt="fb" />
					<img src={fb5} alt="fb" />
				</Wrapper>
			</MW>
		</React.Fragment>
	);
};
export default Fb;
const MW = styled.div`padding: 70px;`;

const Wrapper = styled.div`
	${'' /* background-color: ; */} min-height: 100px;
	max-width: 1200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
