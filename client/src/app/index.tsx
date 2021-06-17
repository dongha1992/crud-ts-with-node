import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loading } from '@components/Loading';
import { Routes } from './routes';
import { GlobalStyle } from '@style/GlobalStyles';

export const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <GlobalStyle />
        <Routes />
      </Suspense>
    </Router>
  );
};
