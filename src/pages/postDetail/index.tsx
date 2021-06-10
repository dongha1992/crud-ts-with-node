import React, { useEffect } from 'react';
import { api } from '@api/index';

export const PostDetail: React.FC = ({ match }: any) => {
	useEffect(() => {
		getDetail();
	}, []);

	const getDetail = async () => {
		const { id } = match.params;
		const res = await api.getPostItemDetail(id);
		console.log(res);
	};
	return <div>post detail</div>;
};

export default PostDetail;
