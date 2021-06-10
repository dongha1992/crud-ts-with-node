import React from 'react';
import { PostItem } from '@components/PostItem';
import styled from 'styled-components';

export interface IPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostLists {
  item: IPostItem;
  onClick: (id: number) => void;
}

interface IPostListsProps {
  postLists: IPostItem[];
  onClick: (id: number) => void;
}

export const PostList: React.FC<IPostListsProps> = ({ postLists, onClick }) => {
  return (
    <Container>
      {postLists.map((item) => (
        <PostItem item={item} key={item.id} onClick={onClick} />
      ))}
    </Container>
  );
};

const Container = styled.div``;
