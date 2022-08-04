import styled from 'styled-components';
export const Input = styled.input`
	width: ${(props) => props.width || '350px'};
	height: ${(props) => props.height || '30px'};
	background: ${(props) => props.background || 'rgba(139, 195, 74, 0.2)'};
	border: None;
	padding: 10px;
	&:focus{
		outline:none ;
	}
	@media (max-width: 500px) {
		width: 260px;
	}
`;

export const Checkbox = styled.input`
	width: 20px;
	height: ${(props) => props.height || '20px'};
	accent-color: #8bc34a;
	font-color: "#ffff";
	background-color: #ffff;
	color: #ffff;
`;
