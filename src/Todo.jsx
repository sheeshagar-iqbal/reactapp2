import React, { useState } from 'react'

const Todo = () => {
    const [newtodo, setNewtode] =useState('')
    const [todolist,setTodolist]=useState([])

    const handlefrom=(e)=>{
        e.preventDefault()
        if(newtodo){
            setTodolist([...todolist, {text:newtodo, iscomplate:false}]) 
            setNewtode('')
        }
            
    }

    const handledelete=(index)=>{
        const newtodos= [...todolist]
        todolist[index].iscomplate= !todolist[index].iscomplate
        setTodolist(newtodos)
        
    }

//     const handledelete = (index) => {
//    const filterTodo = todolist.filter((_, i) => i !== index)
//    setTodolist(filterTodo)
// }

  return (
    <>
    <h2>Add item</h2>
     <form onSubmit={handlefrom} >
        <input type="text"
         value={newtodo} 
         onChange={(e)=>setNewtode(e.target.value)}
         placeholder='add new todo'
         className='bg-white border-0 '
         style={{color:'black'}}
          />
          <button type="submit">add</button>
     </form>

     <h1>Todo list</h1>
     <ul className='list-disc pl-5'>
        {todolist.map((value,index)=>(
            <li key={index }><span style={{textDecoration: value.iscomplate==true? 'line-through':'none'}}>{ value.text}</span> <button onClick={()=>handledelete(index)}>Delete</button></li>
        ))}
     </ul>
    
    </>
  )
}

export default Todo