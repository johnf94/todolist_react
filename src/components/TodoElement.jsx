import React from 'react'

const TodoElement = ({element, toggleTodo}) => {

function handleTodoClick(){
    toggleTodo(element.id)
}

  return (
    <div>
        <label>     
            <input type="checkbox" checked={element.complete} onChange={handleTodoClick}/>       
            {element.name}
        </label>
    </div>
  )
}

export default TodoElement