import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Pages from './components/pages/Pages'
import './Scss/styled.scss';

function App() {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
