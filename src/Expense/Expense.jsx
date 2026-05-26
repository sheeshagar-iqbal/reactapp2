import React, { useEffect, useState } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Expense = () => {
    const [expenses ,setExpenses]=useState(()=>{
        const saved= localStorage.getItem('expenses')
        return saved? JSON.parse(saved):[] 
    })
    const addexpense =(expense)=>{
        setExpenses((prev)=>[...prev,expense])
        console.log(expenses);
        

    }
    const deleteexpense=(id)=>{
        const filterexpense= expenses.filter((value)=> value.id!==id)
        setExpenses(filterexpense)
    }

    useEffect(()=>{
        localStorage.setItem('expenses',JSON.stringify(expenses))

    },[expenses])
    const totalexpense = expenses.reduce((sum,item)=> sum +item.Amount,0)
  return (
    <>
      <div className='p-3 border-2 m-auto w-lg my-14 capitalize bg-gray-100 rounded-lg '>
        <h1>expense tracker</h1>
        <ExpenseForm addexpense={addexpense}/>
        <h3>total amount: {totalexpense.toFixed(2)} </h3>
        <ExpenseList expenses={expenses} deleteexpense={deleteexpense}/>
      </div>
    </>
  )
}

export default Expense