import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "./Icon";

import Close from "../../../public/assets/white_close.svg";

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: ${(props) => (props.display ? "block" : "none")};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const ModalBody = styled.section`
  background: #3a3a3a;
  height: auto;
  max-width: 525px;
  left: 50%;
  position: fixed;
  transform: translate(-50%,-50%);
  top: 50%;
  width: 60%;
  @media (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
`;

const Button = styled.button`
  background: unset;
  border: unset;
  position: absolute;
  right: 0;
  top: 0.5rem;
`;

const ModalComponent = ({ handleModal, show, children }) => (
  <Modal display={show}>
    <ModalBody>
      <Button onClick={() => handleModal(false)}>
        <Icon src={Close} alt="Close Modal icon" height="1.5rem" width="1.5rem" />
      </Button>
      {children}
    </ModalBody>
  </Modal>
);

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  handleModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ModalComponent;
