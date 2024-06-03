import React from 'react'
import TodoCard from './TodoCard'

export default function Todolist() {
  let todos=[
    'Go to the Gym',
    'Make Food',
    'Drink More Water'
  ]
  return (
    <ul className='main'>
      {todos.map((todo,todoIndex)=>{
        return(
          <TodoCard key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

 