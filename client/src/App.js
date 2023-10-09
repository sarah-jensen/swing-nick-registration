import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import {Navbar} from './components';

import './styles/App.css';

import { Container } from '@mui/material';


 function App() {
  return (
    <div>
    <Container>
      <Navbar/>
    </Container>
  </div>
  );
}

export default App;