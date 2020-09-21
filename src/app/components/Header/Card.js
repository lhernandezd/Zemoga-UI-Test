import React from "react";

import styled from "styled-components";

import Icon from "../shared/Icon";

import Wikipedia from "../../../public/assets/wikipedia.svg";
import Thumb from "../../../public/assets/like.svg";

const CardContainer = styled.div`
  position: relative;
`;

const Filter = styled.div`
  background: #3a3a3a35;
  backdrop-filter: blur(10px);
  -webkit-box-shadow: inset 0 0 0 1000px rgba(51, 51, 51, 0.2);
  box-shadow: inset 0 0 0 1000px rgba(51, 51, 51, 0.2);
  height: 100%;
  max-width: 31.25rem;
  position: absolute;
  width: 100%;
`;

const CardSection = styled.div`
  background-color: #3a3a3a35;
  color: white;
  margin-top: 10rem;
  max-width: 31.25rem;
  position: relative;
  width: 100%;
`;

const Card = styled.div`
  font-weight: 150;
  height: 100%;
  min-height: 28.125rem;
  padding: 2.5rem 2.5rem 0 2.5rem;
`;

const CardTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
`;

const UpperTitle = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 150;
`;

const CardText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  @media (min-width: 992px) {
    padding-right: 2rem;
  }
  @media (max-width: 550px) {
    font-size: 1rem;
    max-height: 108px;
  }
`;

const CardLink = styled.a`
  font-size: 0.75rem;
  margin-top: 1rem;
  text-decoration: underline;
`;

const CardQuestion = styled.p`
  font-weight: bold;
  margin-bottom: 5rem;
`;

const CardVoteSection = styled.div`
  bottom: -1px;
  display: inline-flex;
  height: 5rem;
  justify-content: space-between;
  left: 0;
  position: absolute;
  width: 100%;
`;

const Positive = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: rgba(46,188,181,0.8);
`;

const Negative = styled(Positive)`
  background-color: rgba(250,174,48,0.8);
`;

const CardComponent = () => (
  <CardContainer>
    <Filter />
    <CardSection>
      <Card>
        <CardTitle>
          <UpperTitle>What&apos;s your opinion on</UpperTitle>
          {" "}
          Pope Francis?
        </CardTitle>
        <CardText>
          He’s talking tough on clergy sexual abuse, but is he just another papal
          pervert protector? (thumbs down) or a true pedophile punishing pontiff?
          (thumbs up)
        </CardText>
        <CardLink>
          <Icon
            src={Wikipedia}
            alt="wikipedia logo"
            height="1.125rem"
            width="1.125rem"
            style={{ verticalAlign: "middle", marginRight: 5 }}
          />
          More Information
        </CardLink>
        <CardQuestion>What&apos;s your verdict?</CardQuestion>
        <CardVoteSection>
          <Positive>
            <Icon src={Thumb} alt="thumb up" height="2rem" width="2rem" />
          </Positive>
          <Negative>
            <Icon src={Thumb} alt="thumb down" height="2rem" width="2rem" flip />
          </Negative>
        </CardVoteSection>
      </Card>
    </CardSection>
  </CardContainer>
);

export default CardComponent;
