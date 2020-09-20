import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Footer from "./Footer";

const CelebritiesContainer = styled.section`
  display: grid;
  align-items: center;
  grid-gap: 1em 1em;
  grid-template-columns: repeat(6,[col-start] 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(12,[col-start] 1fr);
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
    <Card
      name="Kanye West"
      category="Entertainment"
      photoURL="https://i.ibb.co/1fSnd3T/kanye.png"
      description="Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero."
    />
    <Card
      name="Kanye West"
      category="Entertainment"
      photoURL="https://i.ibb.co/1fSnd3T/kanye.png"
      description="Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero."
    />
    <Card
      name="Kanye West"
      category="Entertainment"
      photoURL="https://i.ibb.co/1fSnd3T/kanye.png"
      description="Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean eu velit libero."
    />
    <Footer />
  </CelebritiesContainer>
);

export default CelebritiesComponent;
