import React from "react";
import styled from "styled-components";

import leaf from "../../../assets/leaf.png";
import prod1 from "../../../assets/prod1.png";
import prod2 from "../../../assets/prod2.png";
import prod3 from "../../../assets/prod3.png";

const Varieties = () => {
  return (
    <Container>
      <LeafContainer>
        <Leaf src={leaf} />
      </LeafContainer>
      <HeaderText>Products Varieties</HeaderText>
      <ProductContainer>
        <Products>
          <ProductImage src={prod1} alt="product1" />
          <ProductHead>Geriatrics</ProductHead>
          <ProductText>
            Nutrition solutions for common health conditions in ageing men and
            women.
          </ProductText>
        </Products>
        <Products>
          <ProductImage src={prod2} alt="product2" />
          <ProductHead>Metabolics</ProductHead>
          <ProductText>
            Research led Low carb substitutes, Proteins etc to tackle Diabetes &
            obesity.
          </ProductText>
        </Products>
        <Products>
          <ProductImage src={prod3} alt="product3" />
          <ProductHead> Mother & Child</ProductHead>
          <ProductText>
            Choicest Groceries, Pulses, Millets, and cereals from around your
            country.
          </ProductText>
        </Products>
      </ProductContainer>
      <More>See More</More>
    </Container>
  );
};

export default Varieties;

const Container = styled.div`
  width: 100vw;
  height: auto;
`;

const LeafContainer = styled.div`
  text-align: center;
`;

const Leaf = styled.img`
  margin-top: 2%;
  height: auto;
  width: auto;
`;

const HeaderText = styled.div`
  //styleName: MW-B-34;
  font-family: Merriweather;
  font-size: 34px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 1%;
  margin-bottom: 1%;
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
`;

const ProductContainer = styled.div`
  width: fit-content;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: #c4c4c4;
  border-radius: 10px;
  display: flex;

  /* For iphone */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    flex-direction: column;
  }

  /* For galaxy phones */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 2) {
    flex-direction: column;
  }

  /* For HTC Phones */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
    flex-direction: column;
  }

  /* For Pixel Phones */
  @media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
    flex-direction: column;
  }

  /* For iPad */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    flex-direction: column;
  }

  /* For Kindle */
  @media only screen and (min-device-width: 800px) and (max-device-width: 1280px) and (-webkit-min-device-pixel-ratio: 1.5) {
    flex-direction: column;
  }

  /* ----------- Non-Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  }

  /* ----------- Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  }
`;

const Products = styled.div`
  width: auto;
  height: auto;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 2%;
  margin-bottom: 2%;
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: auto;
  height: auto;
`;

const ProductHead = styled.div`
  //styleName: MW-B-34;
  font-family: Merriweather;
  font-size: 34px;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  width: auto;
  height: auto;
  margin-top: 3%;
`;

const ProductText = styled.div`
  //styleName: OS-SB-14;
  //font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  padding: 3%;
  max-width: 100%;
  width: auto;
  height: auto;
  margin-bottom: 12%;
`;

const More = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  text-align: center;
  color: #8bc34a;
  cursor: pointer;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  margin-bottom: 1%; ;
`;
