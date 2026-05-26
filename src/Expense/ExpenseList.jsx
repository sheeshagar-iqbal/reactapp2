import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses, deleteexpense}) => {
  if (expenses.length===0) return <p className='gray text-center'>no expense yet</p>
    
  return (
    <>
      <h2>ExpenseList item</h2>
      {expenses.map((value,index)=>(
                <ExpenseItem key={value.id} value={value} ondelete={deleteexpense}/>
      ))}          
    </>
     
  )
}

export default ExpenseList