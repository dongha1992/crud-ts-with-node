import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Wrapper } from '@components/Layout';

const Home = lazy(() => import('@pages/home'));
const PostDetail = lazy(() => import('@pages/postDetail'));

export const Routes: React.FC = () => {
	return (
		<Wrapper>
			<Switch>
				<Route component={Home} exact path="/" />
				<Route component={PostDetail} exact path="/post/:id" />
			</Switch>
		</Wrapper>
	);
};
