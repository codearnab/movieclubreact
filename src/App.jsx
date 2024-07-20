/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

import MovieList from './components/movielist/MovieList';
import FooterApp from './components/footer/Footer';

function App() {

  return (
    <div className="movieapp">
      <Navbar></Navbar>
      <MovieList />
      <FooterApp />
    </div>
  )
}

export default App
