import React from "react";

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import appstore from "../../../assets/app-store-2.png";
import playstore from "../../../assets/play-store-2.png";
import facebook from "../../../assets/fb.png"
import twitter from "../../../assets/twt.png"
import pinterest from "../../../assets/pint.png"
import instagram from "../../../assets/insta.png"
import linkedin from "../../../assets/linked.png"
import truck from "../../../assets/truck.png"
import contact from "../../../assets/contact.png"
import money from "../../../assets/money.png"
import recycle from "../../../assets/return.png"

const Footer = () => {
  return (
    <Container>
      <StyledRow className="">
        <StyledColumn className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold ">
            products
          </Header>
          <Item>Geriatrics</Item>
          <Item>Metabolics</Item>
          <Item>Mother & Child</Item>
          <Item>Organic</Item>
          <Item>Nutraceuticals</Item>
          <Item>Plant based foods</Item>
        </StyledColumn>
        <StyledColumn className="cold-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold">
            Useful Links
          </Header>
          <Item> <Link to="/contact-us" style={{color: 'black'}}> Contact Us </Link></Item>
          <Item> <Link to="/about" style={{color: 'black'}}> About </Link></Item>
          <Item> <Link to="/tos" style={{color: 'black'}}> Terms of Service </Link></Item>
          <Item> <Link to="/refund-policy" style={{color: 'black'}}> Refund Policy </Link></Item>
          <Item> <Link to="/privacy-policy" style={{color: 'black'}}> Privacy Policy </Link></Item>
          <Item> <Link to="/credits" style={{color: 'black'}}> Credits </Link></Item>
        </StyledColumn>
        <StyledColumn className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-4 font-weight-bold">
            Coming Soon- Mobile Apps
          </Header>
          <ImageContainer>
            <Logos src={appstore} />
            <Logos src={playstore} />
          </ImageContainer>
          <Header className="text-uppercase mb-4 font-weight-bold mt-5">
            Keep in Touch
          </Header>
          <ImageContainer>
            <Logos2 src={facebook} />
            <Logos2 src={twitter} />
            <Logos2 src={pinterest} />
            <Logos2 src={instagram} />
            <Logos2 src={linkedin} />
          </ImageContainer>
        </StyledColumn>
        <StyledColumn className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <Header className="text-uppercase mb-2 font-weight-bold">
            <Logos2 src={truck} />Free Shipping
          </Header>
          <Item2>Above Rs500</Item2>
          <Header className="text-uppercase mt-4 mb-2 font-weight-bold">
          <Logos2 src={contact} />Food Tech Grade
          </Header>
          <Item2>100% Guarantee</Item2>
          <Header className="text-uppercase mb-2 font-weight-bold">
          <Logos2 src={money} />Huge Shipping
          </Header>
          <Item2>At Lowest Price</Item2>
          <Header className="text-uppercase mb-2 font-weight-bold">
          <Logos2 src={recycle} />  Easy Returns
          </Header>
          <Item2>No Questions Asked</Item2>
        </StyledColumn>
      </StyledRow>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  max-width: 100vw;
  height: auto;
  text-align: left;
  margin-bottom: 1em;
  overflow: hidden;
`;

const StyledRow = styled(Row)`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const StyledColumn = styled(Col)`
  width: fit-content;
  padding-right: min(2.5rem);
  padding-right: min(2.5rem);
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
`;

const Item = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    width: fit-content;
    &:hover{
        cursor: pointer;
    }
    color: black;
`;

const ImageContainer = styled.div`
    display: flex;
`;

const Logos = styled.img`
    max-width: 40%;
    min-width: 25%;
    height: auto;
    margin-right: 0.7rem;

    &:hover{
        cursor: pointer;
    }
`;

const Logos2 = styled.img`
    width: auto;
    height: auto;
    margin-right: 1.5rem;

    &:hover{
        cursor: pointer;
    }
`;

const Item2 = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-left: 3.2rem;
`;