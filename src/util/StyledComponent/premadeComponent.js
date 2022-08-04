import styled from 'styled-components';

export const H1 = styled.p`
	font-style: normal;
	font-weight: ${(props) => props.weight || 'bold'};

	font-size: ${(props) => props.size + 'px' || '34px'};
	line-height: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : '46px')};
	margin: 0px !important;
	/* or 128% */
	/* primary */

	color: ${(props) => props.color || '#111111'};

	@media (max-width: 500px) {
		font-size: ${(props) => props.size / 2 + 5 + 'px' || '34px'};
		line-height: 26px;
	}
`;

export const P1 = styled.p`
	font-style: normal;
	font-weight: ${(props) => props.weight || 'normal'};
	font-size: ${(props) => props.size + 'px' || '17px'};

	line-height: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : '26px')};
	/* or 162% */

	/* primary */
	margin: 0px !important;
	color: ${(props) => props.color || '#111111'};
	@media (max-width: 500px) {
		font-size: ${(props) => props.size / 2 + 5 + 'px' || '12px'};
		line-height: 20px;
	}
`;
export const P2 = styled.p`
	font-style: normal;
	font-weight: ${(props) => props.weight || '600'};
	font-size: ${(props) => (props.size ? props.size + 'px' : '17px')};

	line-height: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : '26px')};
	/* or 162% */

	/* primary */
	margin: 0px !important;
	color: ${(props) => props.color || '#111111'};
	@media (max-width: 500px) {
		font-size: ${(props) => (props.size ? props.size / 2 + 5 + 'px' : '12px')};
		line-height: 20px;
	}
`;
