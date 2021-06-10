import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '@api/index';
import { PostList } from '@components/PostList';
import { Loading } from '@components/Loading';
import { useHistory } from 'react-router-dom';

export const Home: React.FC = () => {
  const [postLists, setPostLists] = useState([]);
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const res = await api.getAllPosts();
    if (res) {
      setPostLists(res);
    }
  };

  const goToDetail = (id: number) => {
    history.push(`/post/${id}`);
  };

  if (!postLists.length) <Loading />;

  return (
    <Container>
      <PostList postLists={postLists} onClick={goToDetail} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
