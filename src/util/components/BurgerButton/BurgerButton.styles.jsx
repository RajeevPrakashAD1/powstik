import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllLinks = styled.div`
display: ${props => props.open ? 'flex' : 'none'} ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
margin-bottom:10px;
transition: transform 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) ;
@media (min-width: 900px){
    display:none ;
}
`;


export const Links = styled(Link)`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
display:flex ;
flex: none;
order: 0;
flex-grow: 0;
margin-bottom:7px;
cursor: pointer;
`;
