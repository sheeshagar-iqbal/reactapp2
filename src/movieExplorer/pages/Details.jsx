import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id}=useParams()
    const [movie, setMovie] = useState([])

    async function getdata(id) {
         const res =await fetch(`http://www.omdbapi.com/?=tt3896198&apikey=af7d9aea&i=${id}`)
        const data= await res.json()
        console.log(data);
        setMovie(data)
        
    }

    useEffect(()=>{
        getdata(id)
    },[id])
  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>
  )
}

export default Details