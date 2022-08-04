import React from "react";

import styled from "styled-components";

const CardHeaders = (props) => {
  return (
    <Container>
      <MainHeader>{props.main}</MainHeader>
      <SubHeader>{props.sub} </SubHeader>
    </Container>
  );
};

export default CardHeaders;

const Container = styled.div`
  max-width: 100vw;
  height: auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 4rem;
`;

const MainHeader = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;
  font-family: 'Merriweather';
  font-style: normal;
`;

const SubHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(51, 51, 51, 0.75);
  font-family: 'Merriweather';
  font-style: normal;
`;
