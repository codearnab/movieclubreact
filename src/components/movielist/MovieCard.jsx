/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import Star from '../../assets/images/star.png'
import './MovieCard.css'

const MovieCard = ({movie}) => {
    // console.log(movie)
  return (
    <a href={`/movie/${movie.id}`} alt={movie.id} className='movie_card_wrapper'>
      <div className="poster_wrapper">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt="image poster" />
      </div>

      <div className="movie_card_details">
        <h2 className='movie_name'>{movie.original_title}</h2>
        <div className="relasedate_rating">
            <p className='release_date'>{movie.release_date}</p>
            <p className="rating_card"><span>{movie.vote_average}</span> <img src={Star} alt="rating star" /></p>
        </div>
        <div className="content_card">
            {movie.overview.slice(0,100) + "..."}
        </div>
      </div>
    </a>
  )
}

export default MovieCard
