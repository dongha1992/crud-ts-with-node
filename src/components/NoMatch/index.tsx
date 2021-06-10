import React from 'react';
import styled from 'styled-components';

export const NoMatch: React.FC = () => {
	return <Container>page not found</Container>;
};

export default NoMatch;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;
