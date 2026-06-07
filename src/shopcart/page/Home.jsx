import React from 'react'
import { Productlists } from '../component/Productlists'

export const Home = () => {
  return (
    <>
     <div className="p-5 px-40">
      <h1 className="font-bold"> Shop Products</h1>
     <Productlists/>
    </div>
    </>
  )
}
