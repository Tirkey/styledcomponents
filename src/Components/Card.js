import styled from "styled-components";
import {
  Comment,
  DotsVerticalRounded,
  Heart,
} from "@styled-icons/boxicons-regular";

// function Card() {
//   return <CardHeader>Card Header</CardHeader>;
// }

// export default Card;

export const PostCard = styled.div`
  width: 640px;
  display: flex;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  margin: 5px;
  color: #333;
  flex-direction: row;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProfileDetails = styled.div`
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const ProfileName = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const LastActiveTimestamp = styled.div`
  font-size: 10px;
`;

export const PostImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostImage = styled.img`
  height: 400px;
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  vertical-align: bottom;
`;

export const PostInteractWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InterationElements = styled.button`
  background: transparent;
  margin: 5px;
  padding: 0;
  border: none;
`;

export const LikeSection = styled(InterationElements)``;

export const HeartIcon = styled(Heart)`
  height: 32px;
`;

export const CommentSection = styled(InterationElements)``;

export const CommentIcon = styled(Comment)`
  height: 32px;
`;

export const PostHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10px;
`;

export const PostLikedByHistory = styled.div`
  font-size: 12px;
  color: #333;
`;

export const PostCommentedByHistory = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin: 5px 0;
  }
`;

export const AboutImage = styled.div`
  font-size: 14px;
  text-align: left;
  margin-top: 5px;
`;
