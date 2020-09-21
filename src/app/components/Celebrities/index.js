import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Card from "./Card";
import Footer from "./Footer";
import Form from "./Form";
import Modal from "../shared/Modal";

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

const CelebritiesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 150;
  grid-column: 6 span;
  text-align: left;
  width: 100%;
  @media (min-width: 768px) {
    grid-column: 12 span;
  }
`;

const CelebritiesComponent = () => {
  const url = `${config.baseUrl}/candidates`;
  const [fetchCelebrities, setFetchCelebrities] = useState(null);
  const [show, setShow] = useState(false);

  const showModal = (status) => {
    setShow(status);
  };

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
      <CelebritiesTitle>Votes</CelebritiesTitle>
      {fetchCelebrities && fetchCelebrities.map((celebrity) => (
        <Card
          key={celebrity.id}
          {...celebrity}
          handleReload={fetchGet}
        />
      ))}
      <Footer showModal={showModal} />
      <Modal show={show} handleModal={showModal} id="modal">
        <Form handleModal={showModal} fetchCandidates={fetchGet} />
      </Modal>
    </CelebritiesContainer>
  );
};

export default CelebritiesComponent;
