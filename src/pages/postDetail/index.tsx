import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loading } from '@components/Loading';
import { api } from '@api/index';
import splash from '../../constants/images/splash.jpeg';

export const PostDetail: React.FC = ({ match }: any) => {
	const [post, setPost] = useState({});
	useEffect(() => {
		getDetail();
	}, []);

	const getDetail = async () => {
		const { id } = match.params;
		const res = await api.getPostItemDetail(id);
		if (res) {
			setPost(res);
		}
	};
	if (!Object.keys(post).length) return <Loading />;

	return (
		<Container>
			<Background>
				<Image src={splash} alt="img" />
			</Background>
			<Content></Content>
		</Container>
	);
};

export default PostDetail;

const Container = styled.div`
	display: flex;
`;
const Background = styled.div`
	position: relative;
`;
const Image = styled.img`
	opacity: 0.6;
	width: 100%;
	height: 100%;
`;
const Content = styled.div``;
