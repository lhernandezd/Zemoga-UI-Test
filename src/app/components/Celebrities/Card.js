import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "../shared/Icon";

import Thumb from "../../../public/assets/like.svg";

const Card = styled.article`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  height: 35rem;
  margin-bottom: 2.5rem;
  position: relative;
  max-width: 30rem;
  width: 100%;
`;

const CardContent = styled.div`
  align-items: baseline;
  bottom: 3rem;
  color: white;
  display: flex;
  height: 163px;
  margin-bottom: 2rem;
  position: absolute;
`;

const StatusLike = styled.div`
  align-items: center;
  background-color: rgb(46,188,181);
  display: inline-flex;
  height: 33px;
  justify-content: center;
  width: 33px;
`;

const StatusDislike = styled(StatusLike)`
  background-color: rgb(250,174,48);
`;

const ContentBody = styled.div`
  padding: 0 1rem;
  width: 95%;
`;

const ContentTitle = styled.h3`
  display: inline-block;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  vertical-align: sub;
  width: 100%;
`;

const ContentDescription = styled.p`
  font-size: 0.75rem;
  font-weight: 350;
  margin: 0;
  padding: 0;
`;

const ContentDescriptionSpan = styled.span`
  font-weight: bold;
`;

const ContentText = styled.p`
  display: block;
  font-size: 1rem;
  font-weight: 150;
  min-height: 2.3rem;
  padding: 0;
`;

const ContentButtons = styled.div`
  align-items: center;
  display: inline-flex;
  padding: 0;
  width: 100%;
`;

const Button = styled.div`
  align-items: center;
  border: none;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-right: 1.25rem;
  width: 2rem;
`;

const LikeButton = styled(Button)`
  border: ${(props) => (props.active ? "2px solid white" : "none")};
  background-color: rgba(46,188,181,0.7);
  cursor: pointer;
`;

const DislikeButton = styled(Button)`
  border: ${(props) => (props.active ? "2px solid white" : "none")};
  background-color: rgba(250,174,48,0.7);
  cursor: pointer;
`;

const VoteButton = styled(Button)`
  border: 1px solid white;
  font-size: 0.75rem;
  padding: 0.75rem 1.25rem;
  text-align: center;
  width: 6.25rem;
`;

const CardProgress = styled.div`
  align-items: center;
  background-color: rgba(255, 173, 29, 0.7);
  bottom: 0;
  display: flex;
  height: 3rem;
  position: absolute;
  width: 100%;
`;

const Progress = styled.span`
  background-color: rgba(28, 187, 180, 0.9);
  display: inline-block;
  height: 100%;
  width: ${(props) => props.percentage}%;
`;

const ProgressIcon = styled.img`
  height: 1.5rem;
  left: ${(props) => (props.status === "like" ? "5px" : "unset")};
  position: absolute;
  right: ${(props) => (props.status === "dislike" ? "5px" : "unset")};
  top: 26%;
  transform: rotate(${(props) => props.rotate}deg);
  width: 1.5rem;
`;

const ProgressLikeText = styled.span`
  color: white;
  font-size: 1.8rem;
  font-weight: 100;
  left: 2.5rem;
  position: absolute;
  top: 18%;
`;

const ProgressDislikeText = styled(ProgressLikeText)`
  left: unset;
  right: 2.5rem;
  top: 18%;
`;

const CardComponent = ({
  name, category, photoURL, description,
}) => {
  const hola = "hola";
  return (
    <Card backgroundImage={photoURL}>
      <CardContent>
        <StatusLike>
          <Icon src={Thumb} alt="menu-icon" height="1.25rem" width="1.25rem" />
        </StatusLike>
        <ContentBody>
          <ContentTitle>{name}</ContentTitle>
          <ContentDescription>
            <ContentDescriptionSpan>1 month ago</ContentDescriptionSpan>
            {" "}
            in
            {" "}
            {category}
          </ContentDescription>
          <ContentText>
            {description}
          </ContentText>
          <ContentButtons>
            <LikeButton active>
              <Icon src={Thumb} alt="Thumb Up" height="1.25rem" width="1.25rem" />
            </LikeButton>
            <DislikeButton>
              <Icon src={Thumb} alt="Thumb Down" height="1.25rem" width="1.25rem" flip />
            </DislikeButton>
            <VoteButton active>
              Vote Now
            </VoteButton>
          </ContentButtons>
        </ContentBody>
      </CardContent>
      <CardProgress>
        <Progress percentage={64} />
        <ProgressIcon src={Thumb} status="like" rotate={0} />
        <ProgressLikeText>64%</ProgressLikeText>
        <ProgressIcon src={Thumb} status="dislike" rotate={180} />
        <ProgressDislikeText>36%</ProgressDislikeText>
      </CardProgress>
    </Card>
  );
};

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardComponent;
