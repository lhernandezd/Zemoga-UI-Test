import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Container from "../shared/Container";

import HeaderImage from "../../../public/assets/francis.png";

const Header = styled.header`
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${HeaderImage});
  background-repeat:no-repeat, no-repeat; 
  background-size: 100% 7rem, cover;
  background-position: 0px 0px, center;
  height: 50rem;
  position: relative;
  width: 100%;
`;

const HeaderComponent = () => (
  <Header>
    <Container>
      <Navbar />
    </Container>
  </Header>
);

export default HeaderComponent;
