
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
		background-color: ${(props) => props.background || '#8bc34a'};
		border-radius: 0px;
		width: 174.33px;
		height: 47.33px;
		border: ${props => '1px solid ' + props.border || 'none'};
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 170px;
		font-size: 20px;
		color: ${(props) => props.color || 'white'};
        cursor: pointer;
		text-decoration:none ;

		&:hover{
			color: ${(props) => props.color || 'white'};
		}
`;