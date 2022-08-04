import styled from 'styled-components';

export const DescriptionContainer = styled.div`
display: flex ;
flex-direction:column ;

@media(max-width:1170px){
    flex-direction:column ;
    align-items:center ;
    margin-top: 30px;
}
`;

export const PageInfo = styled.div`
display:flex ;
align-items:center ;
margin-bottom:20px  ;
margin-top:5px ;
width:400px ;
justify-content:space-between;
`;

export const PageInfoButton = styled.div`
display:flex ;
align-items: center ;
justify-content:center ;
background-color:rgba(139, 195, 74, 0.2) ;
border-radius: 50px ;
width:200px ;
height:35px ;
margin-right: 20px ;
color: #616161;
`;

export const Itemcounter = styled.div`
background-color: #8BC34A;
width: 40px;
height:25px ;
display:flex ;
align-content:center ;
justify-content:center ;
color:white ;
margin:0 10px ;
`;

export const ButtonContainer = styled.div`
width: 400px ;
display:flex ;
justify-content:space-between ;
margin-top: 40px ;
`;

