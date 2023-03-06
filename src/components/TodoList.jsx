import React from 'react'
import {TodoElement} from './';


const ToDoList = ({todos, toggleTodo}) => {
  return (
    <div>
      {
        todos.map((item)=>(
          <TodoElement key={item.id} toggleTodo={toggleTodo} element={item}/>
        ))
      }
    </div>
  )
}

export default ToDoList