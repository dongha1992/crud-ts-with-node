import React, { Suspense } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from '@components/Layout';
import { Loading } from '@components/Loading';
import { Routes } from './routes';

export const App: React.FC = () => {
	return (
		<Wrapper>
			<Router>
				<Suspense fallback={<Loading />}>
					<Routes />
				</Suspense>
			</Router>
		</Wrapper>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
