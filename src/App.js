import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  //addTodo should accept the object newTodo
  const addTodo = (ele) =>{

    //check if the input is empty
    if (ele.target.value === "") return;

    //create a newTodo object
    const newTodo ={
      text: ele.target.value,
      id: Date.now(),
      completed: false
    }
    //add the new todo to the array
    setTodos([...todos, newTodo]);

    //reset the input
    ele.target.value = "";
  }

  const completeTodo = (id, e) =>{
    //create a new copy of the todos array
    const todosCopy = [...todos];
    //find the todo that matches the id
    const indexOfTodo = todosCopy.findIndex(i => i.id === id);
    //update the current completed value to the opposite value
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;

    setTodos([...todosCopy]);
  }

  const editTodoText = (id,ele) =>{
    //create a new copy
    const todosCopy = [...todos];
    //find the index of todo check that matches with the id you looking for
    const indexOfTodo= todosCopy.findIndex(i => i.id === id);
    //updated the text equal to event value
    todosCopy[indexOfTodo].text = ele.target.value;
    setTodos([...todosCopy]);
    ele.target.value = "";
  }

  const deleteTodo = (id) =>{
    const todosCopy = [...todos];
    const indexOfTodo= todosCopy.findIndex(i => i.id === id);
    //remove 
    todosCopy.splice(indexOfTodo,1);
    setTodos([...todosCopy]);
  }


  return (
    <div className="App">
      <TodoList todos={todos} addTodo={addTodo} completeTodo={completeTodo} editTodoText={editTodoText} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
