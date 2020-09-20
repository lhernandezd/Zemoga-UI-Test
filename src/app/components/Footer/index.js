import React from "react";
import styled from "styled-components";

import Icon from "../shared/Icon";
import Facebook from "../../../public/assets/facebook.svg";
import Twitter from "../../../public/assets/twitter.svg";

const Footer = styled.footer`
  align-items: center;
  border-top: 1px dashed #979797;
  display: flex;
  flex-wrap: wrap;
  height: 4rem;
  justify-content: space-between;
  line-height: 5rem;
  margin-top: 2.5rem;
  width: 100%;
`;

const FooterContacts = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 992px) {
    justify-content: flex-start;
    width: 50%;
  }
`;

const FooterMedias = styled(FooterContacts)`
  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`;

const FooterLink = styled.a`
  color: #979797;
  font-size: 0.75rem;
  margin: 0.625rem;
  &:nth-child(0) {
    margin-left: 0;
  }
`;

const FooterComponent = () => (
  <Footer>
    <FooterContacts>
      <FooterLink href="#">
        Terms and Conditions
      </FooterLink>
      <FooterLink href="#">
        Privacy Policy
      </FooterLink>
      <FooterLink href="#">
        Contact Us
      </FooterLink>
    </FooterContacts>
    <FooterMedias>
      <FooterLink href="#">
        Follow Us
      </FooterLink>
      <FooterLink href="#">
        <Icon src={Facebook} alt="Facebook" height="1.8rem" width="1.8rem" style={{ verticalAlign: "middle" }} />
      </FooterLink>
      <FooterLink href="#">
        <Icon src={Twitter} alt="Twitter" height="1.8rem" width="1.8rem" style={{ verticalAlign: "middle" }} />
      </FooterLink>
    </FooterMedias>
  </Footer>
);

export default FooterComponent;
