import React, { useState } from "react";

function BgChange() {
    const [color,setcolor]=useState('olive')
  return( 
  <>
    <div className="w-full h-screen duration-200 " style={{
        backgroundColor:color
    }}>
        <div className="flex justify-center fixed flex-wrap bottom-5 inset-x-0 px-2">
            <div className="flex justify-center flex-wrap gap-2 shadow-2xl bg-white px-3 py-2 rounded-3xl">
                    <button className="rounded-full shadow outline-none px-4 py-1" style={{backgroundColor:'red'}} onClick={()=>setcolor('red')}>Red</button>
                    <button className="rounded-full shadow outline-none px-4 py-1" style={{backgroundColor:'green'}}  onClick={()=>setcolor('green')}>Green</button>
                    <button className="rounded-full shadow outline-none px-4 py-1" style={{backgroundColor:'blue'}} onClick={()=>setcolor('blue')}>Blue</button>
            </div>

        </div> 
    </div>
  </>
  )
} 

export default BgChange;
