import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Loading: React.FC = () => {
	return (
		<Container>
			<Content />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
`;

const Content = styled.div``;
