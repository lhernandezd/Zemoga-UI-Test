import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FooterImage from "../../../public/assets/people.png";

const Footer = styled.div`
  align-items: center;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${FooterImage});
  background-size: auto, auto;
  display: flex;
  flex-direction: column;
  grid-column: 6 span;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 5rem;
    grid-column: 12 span;
  }
`;

const FooterText = styled.p`
  font-weight: 150;
  font-size: 1.5rem;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 1.7rem;
    text-align: right;
  }
`;

const FooterLink = styled.button`
  border: 3px solid #3a3a3a;
  color: #3a3a3a;
  font-size: 1rem;
  padding: 0.625rem 2rem;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 1.25rem;
    margin-right: 1.5rem
  }
`;

const FooterComponent = ({ showModal }) => (
  <Footer>
    <FooterText>Is there anyone else you would want us to add?</FooterText>
    <FooterLink id="submit-candidate" onClick={() => showModal(true)}>Submit a Name</FooterLink>
  </Footer>
);

FooterComponent.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default FooterComponent;
