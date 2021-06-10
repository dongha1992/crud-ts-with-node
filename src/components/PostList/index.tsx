import React from 'react';
import { PostItem } from '@components/PostItem';
import styled from 'styled-components';

export interface IPostLists {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface IPostListsProps {
	postLists: IPostLists[];
}

export const PostList: React.FC<IPostListsProps> = ({ postLists }) => {
	return (
		<Container>
			{postLists.map((item) => (
				<PostItem item={item} key={item.id} />
			))}
		</Container>
	);
};

const Container = styled.div``;
