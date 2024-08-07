/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';


import './MovieList.css';
import Fire from '../../assets/images/fire.png'
import MovieCard from './MovieCard';
import RatingFilter from './RatingFilter';

const MovieList = ({type, title}) => {

//   useEffect(() => {
//      fetch("https://api.themoviedb.org/3/movie/popular?api_key=1392b839ccf07566863954b5d7d850a7").then((res) => res.json()).then((data) => {console.log(data);})
 
//   },[])

const [movies, setMovies] = useState([])
const [filtermovies, setFilterMovies] = useState([])

const [maxrate, setMaxRate] = useState(0);

const [sort, setSort] = useState({
    by: "default",
    order: "asc"
})

useEffect(() => {
    fetcharMovies();

 },[type])



useEffect(() => {
    if(sort.by !== "default"){
        const selectSortedMovies = filtermovies.sort((d,r) => {
            if (sort.by === "release_date") {
                return sort.order === "asc" ? new Date(d[sort.by]) - new Date(r[sort.by]) : 
                new Date(r[sort.by]) - new Date(d[sort.by])
            } else {
                return sort.order === "asc" ? d[sort.by] - r[sort.by] : 
                r[sort.by] - d[sort.by]
            }
        })
        setFilterMovies([...selectSortedMovies])
    }
}, [sort])


  const fetcharMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=1392b839ccf07566863954b5d7d850a7`)

    const data = await response.json();
    console.log(data);
    setMovies(data.results);
    setFilterMovies(data.results)
  }

  
  const handelRating = (rate) => {
    // console.log('Rate', rate);
    if(rate === maxrate){
        setMaxRate(0)
        setFilterMovies(movies)
    }else{
        setMaxRate(rate);
        // console.log('maxrate', maxrate)
        const rateMovie = movies.filter((movie) => movie.vote_average >= rate);
        setFilterMovies(rateMovie);
    }

  }


  const handelsortvalue = (e) => {
    const {name , value} = e.target;
    setSort((prev) => ({...prev, [name]:value}))
  }



  return (
    <section className='movie_list'>
        <header className='movie_list_header'>
            <h2 className="movie_list_heading">
                {title} <img src={Fire} alt="fire emoji" className='navbar_emoji' />
            </h2>

            <div className="movie_list_fs">
                <RatingFilter maxrate={maxrate} clickRating={handelRating} ratings={[8,7,6]} />
                <select name="by" onChange={handelsortvalue} value={sort.by} id="" className='movie_sorting'>
                    <option value="default">Default</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                <select name="order" onChange={handelsortvalue} value={sort.order} id="" className="movie_sorting">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </header>
        <div className="movie_list_card">
            {
                filtermovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    </section>
  )
}

export default MovieList
