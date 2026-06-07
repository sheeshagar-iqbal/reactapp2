import React from 'react'
import { Productcard } from './Productcard'


const products= [
    {id:1,name:'phone', price:800},
    {id:2,name:'phone', price:800},
    {id:3,name:'phone', price:800},
    {id:3,name:'phone', price:800},
    {id:3,name:'phone', price:800},
    {id:3,name:'phone', price:800},
    {id:3,name:'phone', price:800},
    {id:4,name:'phone', price:800}
]

export const Productlists = () => {
  return (
    <>
     <div className=" flex align-middle flex-wrap-reverse">
        
        <Productcard products={products}/>
       
      
      </div>
    </>
  )
}
