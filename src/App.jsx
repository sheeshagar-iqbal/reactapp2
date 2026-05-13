import { useState } from "react"

const App=()=>{
  let [count,setCount]= useState(15)
  // let count =6
  const addon=()=>{
    count+=1
    setCount(count)
    console.log(count, Math.random());
    
  }
  const removeon=()=>{
    count-=1
    setCount(count)
    console.log(count, Math.random());
    
  }
  return(
    <>
    <h1>counter : {count}</h1>
    <button onClick={addon}>add</button>
    <button onClick={removeon}>remove</button>
    </>
  )
}
export default App;