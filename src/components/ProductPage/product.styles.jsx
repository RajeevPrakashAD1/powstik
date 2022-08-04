import styled from 'styled-components';

export const Container = styled.div`
display:flex ;
justify-content:center ;
width:100% ;
height: max-content ;
background-color:rgba(139, 195, 74, 0.2);
`;

export const ProductContainer = styled.div`
width: 90% ;
display:flex ;
flex-direction:column ;
justify-content:center ;
background-color:#ffffff ;
margin: 30px 0 ;
padding: 20px 20px ;
`;

export const BuyContainer = styled.div`
display:flex ;
margin-bottom: 50px ;
@media(max-width:1170px){
    flex-direction:column ;
    align-items:center ;

}
`;

export const ImagePreview = styled.div`
display:flex ;
flex-direction:column ;
margin-right: 20px ;
`;

export const ImageShow = styled.div`
display:flex ;
background: rgba(139, 195, 74, 0.2);
margin-right: 40px ;
position:relative ;
`;

export const ImageContainer = styled.div`
display:flex ;
height: 410px ;
`;


export const Cards = styled.div`
  margin: 0.2rem;
`;

export const CardsContainer = styled.div`
display:flex ;
flex-wrap:wrap ;
margin:20px auto ;
`;

export const DiscountContainer = styled.div`
display:flex ;
justify-content:flex-start ;
width:120px ;
height:40px ;
clip-path: polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0);
background: rgba(139, 195, 74, 1);
position:absolute ;
top: 25px;
font-size:22px ;
color: #ffffff;
align-items:center ;
font-weight: 600 ;
`;

export const DiscountContent = styled.span`
margin-left:15px ;
`;