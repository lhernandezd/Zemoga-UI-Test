import React, { useState } from "react";

import styled from "styled-components";

import Close from "../../../public/assets/close.svg";

const Message = styled.div`
  align-items: center;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  font-weight: 150;
  font-size: 0.875rem;
  margin: 2rem 0;
  min-height: 100px;
  position: relative;
  width: 100%;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const MessageTitle = styled.h2`
  display: initial;
  font-size: 1.25rem;
  font-weight: 150;
  margin: 0;
  padding: 5px;
  text-align: center;
  width: 50%;
  @media (min-width: 992px) {
    width: 30%;
  }
`;

const MessageTitleSpan = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
`;

const MessageText = styled.p`
  padding: 0.5rem 1rem;
  width: 100%;
  @media (min-width: 992px) {
    padding: 0.5rem 5rem 0.5rem 0.3rem;
  }
`;

const MessageIcon = styled.img`
  align-self: center;
  cursor: pointer;
  height: 1.5rem;
  margin-right: 1.5rem;
  position: absolute;
  right: 0;
  top: 24px;
  width: 1.5rem;
  @media (min-width: 992px) {
    top: auto;
  }
`;

const MessageComponent = () => {
  const [show, setShow] = useState(true);

  const handleCloseClick = () => {
    setShow(false);
  };

  return show && (
    <Message>
      <MessageTitle>
        Speak out. Be heard.
        <MessageTitleSpan>Be counted</MessageTitleSpan>
      </MessageTitle>
      <MessageText>
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </MessageText>
      <MessageIcon
        onClick={handleCloseClick}
        src={Close}
        alt="Close button"
      />
    </Message>
  );
};

export default MessageComponent;
