import React from 'react';

interface IPostLists {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface IPostListsProps {
	postLists: IPostLists[];
}

export const PostList: React.FC<IPostListsProps> = ({ postLists }) => {
	console.log(postLists);
	return <div>dd</div>;
};
