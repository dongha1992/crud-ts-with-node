import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '@api/index';
import { PostList } from '@components/PostList';
import { Loading } from '@components/Loading';

export const Home: React.FC = () => {
	const [postLists, setPostLists] = useState([]);
	useEffect(() => {
		getPost();
	}, []);

	const getPost = async () => {
		const res = await api.getAllPosts();
		if (res) {
			setPostLists(res);
		}
	};

	if (!postLists.length) <Loading />;

	return (
		<Container>
			<PostList postLists={postLists} />
		</Container>
	);
};

export default Home;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
