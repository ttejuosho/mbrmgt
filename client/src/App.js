import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer'
//import '../src/assets/';

const App = () => {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  )
}

export default App;
