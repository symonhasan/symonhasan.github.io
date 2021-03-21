import React from 'react';
import {Header} from './components/Header/Header';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/About/About';

function App() {
  return (
    <>
      <Navigation />
      <Header 
        name="Symon Hasan"
        designation="Software Engineer"
        cvHref="SymonHasan.pdf"
      />
      <About />
    </>
  );
}

export default App;
