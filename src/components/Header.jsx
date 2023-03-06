import {React, useState, useRef, useEffect} from 'react'
import { TodoList } from '.';
import { v4 as uuidv4 } from 'uuid';

const Header = () => {
    const LOCAL_STORAGE_KEY ='todoApp.todos';
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    useEffect(()=>{
      const storedTodos =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
    },[])

    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
    },[todos]);

    function toggleTodo(id){
      const newTodos = [...todos];
      const todo = newTodos.find(todo=>todo.id === id);
      todo.complete = !todo.complete;
      setTodos(newTodos);
    }

    function handleAddToDo(e){
      const name =inputRef.current.value;
      if(name==='')return
      setTodos(prevTodos => {
        return [...prevTodos, {id: uuidv4(), name: name, complete:false}]
      })
      inputRef.current.value =null
    }
  
    function handleClearButton(){
      const newTodos =  todos.filter(todo=> !todo.complete);
      setTodos(newTodos)
    }

  return (
    <div>
        <h1>To Do List</h1>
        <div>{todos.filter(todo=> !todo.complete).length} left to do</div>
        <input type="text" ref={inputRef}/>
        <button onClick={handleAddToDo}>Add</button>
        <button onClick={handleClearButton}>Clear Complete</button>
        <TodoList todos={todos} toggleTodo={toggleTodo}/> 
    </div>
  )
}

export default Header