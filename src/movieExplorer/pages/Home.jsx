import React, { useEffect, useRef, useState } from 'react'
import MovieList from '../Components/MovieList'

const Home = () => {
        const [movies,setMovies]=useState([])
        const [loading,setLoading]=useState(false)
        const inputRef= useRef()

        const   fetchmovies= async (query)=>{
                setLoading(true)
                const res =await fetch()
                const data= await res.json()
                console.log(data);
                setMovies(data.Search || [])
                setLoading(false)
        }

        useEffect(()=>{
            fetchmovies('Avengers')

        },[])

        const handleSumbit=(e)=>{
                e.preventDefault()
                const query= inputRef.current.value.trim()
                if(query)  fetchmovies(query)
        }

  return (
    <>
     <div className="home">
		<form  onSubmit={handleSumbit}>
			<input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
			<button type="submit">Search 🔎</button>
		</form>
        {loading? <p>loading...</p>: <MovieList movies={movies}/>}
     
      </div>
    </>
  )
}

export default Home