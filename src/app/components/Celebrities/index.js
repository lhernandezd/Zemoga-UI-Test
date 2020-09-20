import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CelebritiesContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const CelebritiesComponent = () => (
  <CelebritiesContainer>
    <Card
      name="Kanye West"
      category="Entertainment"
      photoURL="https://i.ibb.co/1fSnd3T/kanye.png"
      description="Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero."
    />
  </CelebritiesContainer>
);

export default CelebritiesComponent;
