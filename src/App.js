import React from 'react';
import {Header} from './components/Header/Header';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';

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
      <Experience />
    </>
  );
}

export default App;
