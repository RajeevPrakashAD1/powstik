import React from 'react';

import styled from 'styled-components';

import Header from '../LandingPage/Header/Header.component';
import Footer from '../LandingPage/FooterWhite';

const PrivacyPolicy = () => {
  return (
    <>
        <Header />
            <Item> More Information on Privacy Policy Coming Soon... </Item>
        <Footer />
    </>
  )
}

export default PrivacyPolicy;

const Item = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;