import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './pages/Userlist'
import Addedituser from './pages/Addedituser'
import Flayout from './layout/Flayout'
import Header1 from './component/Header'

const Axios1 = () => {
  return (
    <>
    <BrowserRouter>
    <Header1/>
    <Routes>
     {/* <Route index element={<Flayout/>}> */}
      <Route path='/' element ={<Userlist/>}/>
      <Route path='/add' element ={<Addedituser/>}/>
      <Route path='/edit/:id' element ={<Addedituser/>}/>
     {/* </Route> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Axios1