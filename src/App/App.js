import React from "react";
import styled, { css } from "styled-components";
import {
  PostCard,
  CardHeader,
  ProfileImage,
  ProfileDetails,
  ProfileName,
  LastActiveTimestamp,
  PostImageWrapper,
  PostImage,
  PostInteractWrapper,
  LikeSection,
  HeartIcon,
  CommentSection,
  CommentIcon,
  PostHistory,
  PostLikedByHistory,
  PostCommentedByHistory,
} from "../Components/Card";
import ProfileOneImage from "../assets/Pretty.png";
import PostOneSrc from "../assets/plants1.jpeg";

function App() {
  const Button = styled.button`
    color: white;
    background: steelblue;
    border-radius: 5px;
    padding: 10px;
    margin: 1em;

    ${(props) =>
      props.primary &&
      css`
        background: white;
        border: 1px solid orange;
        color: orange;
      `};
  `;

  const Container = styled.div`
    text-align: center;
    display: flex;
  `;

  return (
    <Container>
      {/* <Button>Default Button</Button>
      <Button primary>Primary Button</Button> */}
      <PostCard>
        <CardHeader>
          <ProfileImage src={ProfileOneImage} alt="John Doe" />
          <ProfileDetails>
            <ProfileName>John Doe</ProfileName>
            <LastActiveTimestamp>10 mins ago</LastActiveTimestamp>
          </ProfileDetails>
        </CardHeader>
        <PostImageWrapper>
          <PostImage src={PostOneSrc} alt="xyz plant"></PostImage>
        </PostImageWrapper>
        <PostInteractWrapper>
          <LikeSection>
            <HeartIcon></HeartIcon>
          </LikeSection>
          <CommentSection>
            <CommentIcon></CommentIcon>
          </CommentSection>
        </PostInteractWrapper>
        <PostHistory>
          <PostLikedByHistory>
            You have 10 likes and 4 comments
          </PostLikedByHistory>
          <PostCommentedByHistory>
            <p>
              <strong>User_random_one </strong>Lorem ipsum text
            </p>
            <p>
              <strong>User_random_two </strong>Lorem ipsum text
            </p>
            <p>
              <strong>User_random_three </strong>Lorem ipsum text
            </p>
            <p>
              <strong>User_random_four </strong>Lorem ipsum text
            </p>
          </PostCommentedByHistory>
        </PostHistory>
      </PostCard>
    </Container>
  );
}

export default App;
