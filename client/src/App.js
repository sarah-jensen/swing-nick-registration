import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import {Navbar} from './components/Navbar.js';

import './style/App.css';

import { UserInfo } from './components'

import { Container } from 'react-bootstrap';

 function App() {
  return (
    <div>
    <ApolloProvider client={client}>
          <Router>
            <Navbar />
            <Routes></Routes>
          </Router>
    </ApolloProvider>
  </div>
  );
}

export default App;