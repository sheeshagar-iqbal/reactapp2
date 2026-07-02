import React from 'react'
import Header1 from '../component/Header'
import { Outlet } from 'react-router-dom'

const Flayout = () => {
  return (
    <>
    <Header1/>
    <div>
    <Outlet/>

    </div>
    </>
  )
}

export default Flayout
