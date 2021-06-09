import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('@pages/home'));
const PostDetail = lazy(() => import('@pages/postDetail'));

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route component={Home} path="/" />
			<Route component={PostDetail} path="@pages/postDetail" />
		</Switch>
	);
};
