import React from 'react'

const ExpenseItem = ({value,ondelete}) => {
  return (
    <div>
        <ul>
                <li key={value.id} className='flex justify-around' ><span>{value.Title}</span><span>{value.Amount}</span><button onClick={()=>ondelete(value.id)} >❌</button></li>
        </ul>
    </div>
  )
}

export default ExpenseItem