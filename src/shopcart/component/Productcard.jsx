import React from 'react'

export const Productcard = ({products}) => {
  return (
    <>
      {products.map(( p,i)=>(
            <div key={p.id} className="border-2 w-fit py-6 px-16 text-center m-4 ">
              <h5 className="p-1">{p.name}</h5>
              <p className="p-1">${p.price}</p>
              <button className=" border-2 p-1 px-2 rounded-2xl bg-bottom bg-blue-300">Add to Cart</button>
         
        </div>
      ))}
           
    </>
  )
}
