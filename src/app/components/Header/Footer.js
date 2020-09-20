import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  background-color: #eaeaea45;
  bottom: 0;
  display: inline-flex;
  height: 3rem;
  left: 0;
  position: absolute;
  width: 100%;
`;

const LeftSection = styled.div`
  background-color: #3a3a3a45;
  position: relative;
  width: 50%;
  &:after {
    border-top: 5px solid transparent;
    border-left: 5px solid  #3a3a3a45;
    border-bottom: 5px solid transparent;
    content: "";
    height: 0;
    left: 100%;
    position: absolute;
    top: 40%;
    width: 0;
    z-index: 1;
  }
`;

const SectionText = styled.p`
  color: white;
  font-size: 0.75rem;
  line-height: 2rem;
  padding-right: 0.625rem;
  text-align: right;
`;

const SectionTextRight = styled.p`
  color: #3a3a3a;
  font-size: 2.25rem;
  font-weight: 150;
  margin: 0;
  line-height: 3rem;
  text-align: left;
`;

const RightSection = styled.div`
  display: flex;
  height: 3rem;
  justify-content: flex-start;
  margin-left: 1rem;
  text-align: left;
  width: 68%;
`;

const SectionFocusText = styled.span`
  font-weight: 500;
  margin-right: 0.5rem;
`;

const FooterComponent = () => (
  <Footer>
    <LeftSection>
      <SectionText>
        CLOSING IN
      </SectionText>
    </LeftSection>
    <RightSection>
      <SectionTextRight>
        <SectionFocusText>22</SectionFocusText>
        days
      </SectionTextRight>
    </RightSection>
  </Footer>
);

export default FooterComponent;
