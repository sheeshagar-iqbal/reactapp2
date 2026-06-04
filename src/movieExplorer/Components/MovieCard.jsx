import React from 'react'
import { Link } from 'react-router-dom'
import notfount from './not.jpg'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <img src={movie.Poster || notfount} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`}>Details</Link>
    </div>
  )
}

export default MovieCard