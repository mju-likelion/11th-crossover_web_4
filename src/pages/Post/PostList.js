import styled from 'styled-components';
import Post from './Post';
import ContentButton from '../../components/ContentButton';
import { POST_DATA } from '../../assets/data/PostData';
import { useNavigate } from 'react-router-dom';
const PostList = () => {
  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };
  const goPost = (postId) => {
    navigate(`/${postId}`);
  };
  return (
    <AllContainer>
      <PostContainer>
        <WriteButtonWrapper>
          <ContentButton
            children="작성하기"
            isactive="true"
            type="false"
            clickPath={goWrite}
          />
        </WriteButtonWrapper>
        {POST_DATA.map((postData, index) => (
          <Post
            userName={postData.userName}
            title={postData.title}
            content={postData.content}
            time={postData.time}
            key={index}
            onClick={() => goPost(postData.id)}
          />
        ))}
      </PostContainer>
    </AllContainer>
  );
};
const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;
const PostContainer = styled.div`
  width: 783px;
  height: 100%;
  margin: auto;
  /* 컨테이너의 width가 확보되어 margin이 유효할 수 있을 때 */
`;
const WriteButtonWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 23px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default PostList;
