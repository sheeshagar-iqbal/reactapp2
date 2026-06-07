import React from 'react'
import {Home} from './page/Home'
import { Navbar1 } from './component/Navbar1'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { AddtoCard } from './page/AddtoCard'

const Shopcart = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/addtocard' element={<AddtoCard/>}/>
    </Routes>
    </BrowserRouter>
    
       
    </>
  )
}

export default Shopcart