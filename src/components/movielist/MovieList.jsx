/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './MovieList.css';
import Fire from '../../assets/images/fire.png'
import MovieCard from './MovieCard';

const MovieList = () => {

//   useEffect(() => {
//      fetch("https://api.themoviedb.org/3/movie/popular?api_key=1392b839ccf07566863954b5d7d850a7").then((res) => res.json()).then((data) => {console.log(data);})
 
//   },[])

const [movies, setMovies] = useState([])

useEffect(() => {
    fetcharMovies();

 },[])

  const fetcharMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1392b839ccf07566863954b5d7d850a7")

    const data = await response.json();
    // console.log(data);
    setMovies(data.results);
  }

  

  return (
    <section className='movie_list'>
        <header className='movie_list_header'>
            <h2 className="movie_list_heading">
            Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' />
            </h2>

            <div className="movie_list_fs">
                <ul className="movie_filter">
                    <li className="movie_filter_item active">8+ Star</li>
                    <li className="movie_filter_item">7+ Star</li>
                    <li className="movie_filter_item">6+ Star</li>
                </ul>
                <select name="" id="" className='movie_sorting'>
                    <option value="">SortBy</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                <select name="" id="" className="movie_sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>
        <div className="movie_list_card">
            {
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    </section>
  )
}

export default MovieList
