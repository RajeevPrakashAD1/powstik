import React from 'react'

import styled from 'styled-components';
import axios from "axios";

const ProductResultBox = () => {
    // const getItem= () => {
    //     axios.get('')
    //     .then(res => {
    //         console.log(res);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

  return (
    <Container>
        <Box>
            <PageName> Home / Products </PageName>
            <PageTitle> Products </PageTitle>
            <button> Get Item </button>
        </Box>
    </Container>
  )
}

export default ProductResultBox;

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: #8BC34A33;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
`;

const Box = styled.div`
    width: 90vw;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 3rem;
    background-color: #FFFFFF;
    overflow: hidden;
    border-radius: 10px;
`;

const PageName = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #616161;
    margin-top: 5rem;
    margin-left: 3rem;
`;

const PageTitle = styled.div`
    font-weight: 600;
    font-size: 34.15px;
    line-height: 42px;
    color: #000000;
    margin-top: 0.5rem;
    margin-left: 3rem;
`;