import React from 'react';
import { IPostLists } from '@components/PostList';

import styled from 'styled-components';
import splash from '../../constants/images/splash.jpeg';

export const PostItem = ({ item, onClick }: IPostLists) => {
  return (
    <Container
      onClick={() => {
        onClick(item.id);
      }}
    >
      <Left>
        <Image src={splash} alt="img" />

        <Title>
          제목:
          {item.album.length > 50
            ? item.album.slice(0, 50) + '...'
            : item.album}
        </Title>
      </Left>
      <Right>
        <div>{item.id}</div>
      </Right>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 30px 0px;
`;
const Left = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-left: 10px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Right = styled.div``;
