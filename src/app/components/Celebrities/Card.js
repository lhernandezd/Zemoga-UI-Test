import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

import Icon from "../shared/Icon";
import config from "../../config.json";

import Thumb from "../../../public/assets/like.svg";

const Card = styled.article`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  grid-column: 6 span;
  height: 35rem;
  margin-bottom: 2.5rem;
  position: relative;
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

const Status = styled.div`
  align-items: center;
  background-color: ${(props) => (props.status ? "rgb(46,188,181)" : "rgb(250,174,48)")};
  display: inline-flex;
  height: 33px;
  justify-content: center;
  width: 33px;
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

const Button = styled.button`
  align-items: center;
  border: none;
  background-color: unset;
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-right: 1.25rem;
`;

const LikeButton = styled(Button)`
  background-color: rgba(46,188,181,0.7);
  cursor: pointer;
  outline-color: ${(props) => (props.active ? "white" : "none")};
`;

const DislikeButton = styled(Button)`
  background-color: rgba(250,174,48,0.7);
  cursor: pointer;
  outline-color: ${(props) => (props.active ? "white" : "none")};
`;

const VoteButton = styled(Button)`
  border: 1px solid white;
  font-size: 0.75rem;
  outline: none;
  text-align: center;
  transition: background-color 0.3s;
  width: 6.25rem;
  &:hover {
    background-color: white;
    color: #3a3a3a;
  }
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
  name, category, photo, description, handleReload, votes, positiveVotes, id, percentage,
}) => {
  const [voted, setVoted] = useState(false);
  const [active, setActive] = useState("none");
  const positive = votes ? percentage : 50;
  const negative = votes ? 100 - percentage : 50;

  const fetchPost = async (payload) => {
    try {
      await axios.put(`${config.baseUrl}/candidates/${id}`, payload);
      handleReload();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleToggleLike = (button) => {
    setActive(button);
  };

  const handleVote = (e, status) => {
    e.preventDefault();
    if (status !== "again") {
      setVoted(true);
      const payload = {
        votes: votes + 1,
      };
      if (active === "like") {
        payload.positiveVotes = positiveVotes + 1;
      }
      fetchPost(payload);
    } else {
      setVoted(false);
    }
  };

  return (
    <Card backgroundImage={photo}>
      <CardContent>
        <Status status={percentage >= 50}>
          <Icon src={Thumb} alt="menu-icon" height="1.25rem" width="1.25rem" flip={percentage < 50} />
        </Status>
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
            {!voted && (
              <>
                <LikeButton active={active === "like"} onClick={() => handleToggleLike("like")}>
                  <Icon src={Thumb} alt="Thumb Up" height="1.25rem" width="1.25rem" />
                </LikeButton>
                <DislikeButton active={active === "dislike"} onClick={() => handleToggleLike("dislike")}>
                  <Icon src={Thumb} alt="Thumb Down" height="1.25rem" width="1.25rem" flip />
                </DislikeButton>
              </>
            )}
            {!voted
              ? <VoteButton onClick={handleVote}>Vote Now</VoteButton>
              : <VoteButton onClick={(e) => handleVote(e, "again")}>Vote Again</VoteButton>}
          </ContentButtons>
        </ContentBody>
      </CardContent>
      <CardProgress>
        <Progress percentage={positive} />
        <ProgressIcon src={Thumb} status="like" rotate={0} />
        <ProgressLikeText>
          {positive}
          %
        </ProgressLikeText>
        <ProgressIcon src={Thumb} status="dislike" rotate={180} />
        <ProgressDislikeText>
          {negative}
          %
        </ProgressDislikeText>
      </CardProgress>
    </Card>
  );
};

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleReload: PropTypes.func.isRequired,
  votes: PropTypes.number.isRequired,
  positiveVotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default CardComponent;
