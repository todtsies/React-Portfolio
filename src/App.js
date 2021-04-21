import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Wrapper>
        <Intro />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </Wrapper>
      <Footer />
    </HashRouter>
  );
}

export default App;
