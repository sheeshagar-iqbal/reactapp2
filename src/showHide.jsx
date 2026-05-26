import React, { useState } from 'react'

const ShowHide = () => {
  const [show,setShow] =useState(false)
  const fun=()=>setShow(!show)

  let [count,setCount]= useState(15)
  const addon=()=>{
    count+=1
    setCount(count)
    console.log(count, Math.random());
    
  }
  const removeon=()=>{

    if(count!=0){
      count-=1
      setCount(count)
    }
    console.log(count, Math.random());
    
  }
  return (
    <>
        <button onClick={fun}>{show? 'Hide':'Show'}</button>
      {
        show && <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quisquam dolore repellendus!</h2>
      }

      <button onClick={fun}>{show?'like 🤍': 'liked ❤️'}</button>

      <br />
        <hr />
         <h1 className="text-blue-500">counter : {count}</h1>
    <button onClick={addon}>add</button>
    <button onClick={removeon}>remove</button>
    <ShowHide/>
    </>
  )
}

export default ShowHide