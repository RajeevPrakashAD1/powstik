import styled from 'styled-components';
import myImage from '../../../assets/Vector (8).png'

export const HeaderBox = styled.div`
background-color:#FFFFFF;
display:flex;
flex-direction: row;
align-items: center;
margin: 0 2rem;
height:80px ;
@media (max-width: 900px) {
    margin: 0.8rem 3rem;
  }
`;

export const CompanyHeaderName = styled.div`
background-color:#FFFFFF;
width:60%;
height: 100%;
margin: 0.8rem 0;
display:flex ;
color: #8BC34A;
@media (max-width: 900px) {
    width:100% ;
}
`;

export const CompanyNameImage = styled.div`
background-image: url(${myImage}) ;
background-repeat: no-repeat;
width:100%;
height:100% ;
`;

export const HeaderLink = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width: 40%;
@media (max-width: 900px) {
    display: none ;
    width: 30% ;
}
`;

export const HeaderLinks = styled.div`
display:flex ;
justify-content:space-evenly ;
align-items:center ;
cursor: pointer;
`;

export const HamburgerMenu = styled.div`
display:flex ;
margin: 10px 0 ;
cursor: pointer;
@media (min-width: 900px){
    display:none;
}
`;