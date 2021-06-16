import React from 'react';
import { IPostLists } from '@components/PostList';
import { dayFormatter } from '@utils/dayFormatter';
import styled from 'styled-components';

export const PostItem = ({ item, onClick }: IPostLists) => {
  return (
    <Container
      onClick={() => {
        onClick(item.id);
      }}
    >
      <Left>
        <ImageWrapper>
          <Image src={item.cover_url} alt="img" />
        </ImageWrapper>
        <Title>{item.album}</Title>
      </Left>
      <Right>
        <div>{item.artist}</div>
        <div>{dayFormatter(item.release_date)}</div>
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
  width: 200px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: fill;
`;
const Right = styled.div``;
