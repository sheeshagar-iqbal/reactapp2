
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './MovieExp.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'

function MovieExp() {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/movie/:id' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
      <div className='container'>
        
        
       

      </div>
    </>
  )
}

export default MovieExp