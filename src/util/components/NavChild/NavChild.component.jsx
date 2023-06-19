import React from 'react';
import { H1, P1 } from '../../StyledComponent/premadeComponent';
import { CategoryData, CategoryName, Container } from './Navchild.styles';
import { Link } from 'react-router-dom';
const NavChild = ({ data, name }) => {
	return (
		<React.Fragment>
			<Container>
				<CategoryName>
					<Link to="/product">
						<H1 color="rgba(139, 195, 74, 1)" lineHeight={25} size={20}>
							{' '}
							{name}{' '}
						</H1>{' '}
					</Link>{' '}
				</CategoryName>
				<CategoryData>
					{' '}
					{data.map((datas) => (
						<P1
							color=" rgba(74, 74, 74, 1)"
							weight={400}
							lineHeight={22}
							size={15}
							style={{ marginTop: 20 }}
						>
							{' '}
							{datas.title}{' '}
						</P1>
					))}{' '}
				</CategoryData>{' '}
				<hr style={{ color: 'rgba(139, 195, 74, 1)', height: 2 }} />{' '}
			</Container>{' '}
		</React.Fragment>
	);
};

export default NavChild;
