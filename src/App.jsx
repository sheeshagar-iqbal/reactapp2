import { useState } from "react"
import Todo from "./Todo"


const App=()=>{
  let [count,setCount]= useState(15)
  // let count =6
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
  return(
    <>
   
    <h1 className="text-blue-500">counter : {count}</h1>
    <button onClick={addon}>add</button>
    <button onClick={removeon}>remove</button>
    <Todo/>

    </>
  )
}
export default App;