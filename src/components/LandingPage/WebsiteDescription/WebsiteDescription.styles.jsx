import styled from "styled-components";

export const DescriptionWrapper = styled.div`
display: flex ;
@media (max-width: 974px){
    flex-direction: column-reverse;
    align-items:center ;
    justify-content:center ;
}
`;

export const DescriptionImageContainer = styled.div`
width:90% ;
display: flex ;
align-items:center ;
justify-content:center ;
`;

export const DescriptionImage = styled.div`
background-size:cover ;
background-repeat:no-repeat ;
height:100% ;
`;
export const Description = styled.div`
display:flex ;
flex-direction: column;
padding-top: 40px ;
margin-left:100px ;
@media (max-width: 974px){
    align-items:center ;
    justify-content:center ;
    padding: 0 10px ;
    margin-right: 20px ;
    text-align: center;
    margin-left:0 ;
}
`;

export const Diseases = styled.div`
font-family: 'Merriweather';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
margin-bottom: 10px ;
`;

export const NutritionWork = styled.div`
font-family: 'Merriweather';
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 70px;
`;

export const Rating = styled.div`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
margin: 10px 0; ;
`;

export const ShopButton = styled.div`
height:30px ;
width:120px ;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 12px 24px;
gap: 10px;
background-color:#8BC34A;
border-radius:20px ;
color: white ;
cursor: pointer;
`
export const ShopText = styled.span`
font-family: 'Open Sans',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
`;