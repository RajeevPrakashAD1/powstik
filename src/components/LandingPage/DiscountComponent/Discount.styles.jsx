import styled from 'styled-components';

export const DiscountContainer = styled.div`
display:flex ;
align-items:center ;
background-color:#E8F3DB ;
width:90% ;
margin-top:70px ;
margin: 0 auto;
margin-bottom:40px ;
justify-content: space-evenly ;
@media (max-width: 974px){
    flex-direction:column ;
    text-align:center ;
}
`;

export const TicketContainer = styled.div`
display: flex;
align-items:center ;
justify-content:center ;
`;

export const DiscountDescription = styled.div`
display:flex ;
flex-direction:column ;
justify-content:center ;

`;

export const DiscountDownload = styled.div`
display:flex ;
align-items:center ;
justify-content:center ;
@media (max-width:974px){
    margin: 20px 0 ;
}
`;

export const Text1 = styled.span`
color:#8BC34A ;
`;