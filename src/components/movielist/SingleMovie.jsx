import React, { useEffect, useState } from 'react';

import './SingleMovie.css'
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
    const {movieId} = useParams();

    const [detailsMovie, setDetailMovies] = useState([])

    useEffect(() => {
        fatchMovieDetails()
    },[])

    const fatchMovieDetails = async () => {
        const mDetailsResponsce = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1392b839ccf07566863954b5d7d850a7`);

        const detailsData = await mDetailsResponsce.json()

        console.log('details data',detailsData);

        setDetailMovies(detailsData);
    }

    
    
  return (
    <>
        <div className='single_movieContainer'>
             
             <div className='singleDetailsWrapper'>
                <div className='singleLeftWrap'>
                    <img src={`https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}`}  alt="image poster" />
                </div>
                <div className="singleRightWrap">
                    <h2 className='titleSignleMovieHd'>{detailsMovie.original_title} - {movieId} <span>{detailsMovie.status}</span></h2>

                    <p className='singleSomeDetails'><span>Rating: {detailsMovie.vote_average}</span> <span>Count Of: {detailsMovie.vote_count}</span></p>
                    <p className='singleTitleData'>{detailsMovie.overview}</p>

                    {/* <ul className='genresWrap'>{detailsMovie.genres.map((gener) => 
                        <li key={gener.id}>{gener.name}</li>
                    )}</ul> */}


                </div>
             </div>
        </div>
    </>
  )
}

export default SingleMovie
