import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import { useRef } from 'react'

const ExpenseForm = ({addexpense}) => {
        const [title,setTitle]= useState('')
        const [amount,setAmount]= useState('')
        const titleRef =useRef()

        const formhandler=(e)=>{
              e.preventDefault()
              if(!title || !amount) return alert('please fill all fields!')
              const exp={ id: Date.now(),Title:title,Amount:parseFloat(amount )}
              addexpense(exp)
              setTitle('')
              setAmount('')
              titleRef.current?.focus()
              

        }



  return (
    <>
    
    <form onSubmit={formhandler} >
        <input type="text"
        placeholder='expense title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className='border-b'
        ref={titleRef}
         />

         <input type="number"
        placeholder='expense'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        className='border-b'
         />
         <button className='border-t-cyan-300 p-1 rounded-t-md border-2' >Add Expense</button>

    </form>
     
    </>
  )
}

export default ExpenseForm