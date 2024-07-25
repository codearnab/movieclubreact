/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from 'react'

const RatingFilter = ({maxrate, clickRating, ratings}) => {
    // console.log(ratings)
  return (
    <ul className="movie_filter">
        {
            ratings.map(rate => 
                <li className={maxrate === rate ? "movie_filter_item active" : "movie_filter_item"} key={rate} onClick={() => clickRating(rate)}>{rate}+ Star</li>
            )
        }
        {/* <li className={`movie_filter_item ${maxrate === 8 ? "active" : ""}`} onClick={() => clickRating(8)}>8+ Star</li>
        <li className={`movie_filter_item ${maxrate === 7 ? "active" : ""}`} onClick={() => clickRating(7)}>7+ Star</li>
        <li className={`movie_filter_item ${maxrate === 6 ? "active" : ""}`} onClick={() => clickRating(6)}>6+ Star</li> */}
    </ul>
  )
}

export default RatingFilter
