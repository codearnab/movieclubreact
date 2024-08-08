/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

import MovieList from './components/movielist/MovieList';
import FooterApp from './components/footer/FooterApp';
import { Route, Routes } from 'react-router-dom';
import SingleMovie from './components/movielist/SingleMovie';

function App() {

  return (
    <div className="movieapp">
      <Navbar />
      <main>
      <Routes>
        <Route path='/' element={<MovieList type="popular" title="Popular" />} />
        <Route path='/top_rated' element={<MovieList type="top_rated" title="Top Rated" />} />
        <Route path='/upcoming' element={<MovieList type="upcoming" title="Upcomming" />} />
        <Route path='/movie/:movieId' element={<SingleMovie />} />
      </Routes>
      </main>
   
      <FooterApp />
    </div>
  )
}

export default App
