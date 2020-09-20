import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Card from "./Card";
import Footer from "./Footer";
import config from "../../config.json";

const CelebritiesContainer = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6,[col-start] 1fr);
  grid-gap: 1em 1em;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12,[col-start] 1fr);
  }
`;

const CelebritiesComponent = () => {
  const url = `${config.baseUrl}/candidates`;
  const [fetchCelebrities, setFetchCelebrities] = useState(null);

  const fetchGet = async () => {
    try {
      const response = await axios.get(url);
      const { data: { data } } = response;
      setFetchCelebrities(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <CelebritiesContainer>
      {fetchCelebrities && fetchCelebrities.map((celebrity) => (
        <Card
          {...celebrity}
          handleReload={fetchGet}
        />
      ))}
      <Footer />
    </CelebritiesContainer>
  );
};

export default CelebritiesComponent;
