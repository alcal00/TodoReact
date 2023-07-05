import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import './css/app.css';
import { TodoAdd } from "./pages/TodoAdd";
import { TodoList } from "./pages/TodoList";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";


//import {v4 as uuidv4, v4} from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
 

  
  useEffect(() => {
    fetch("http://localhost:8000/todos", {
      method: 'GET',
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);
  
  /**
   * @param {{text: string}} todo 
   */
  function handleAddTodo(todo){
    setTodos([...todos, {...todo, id:Date.now(), completed:false}])
  }
  function handleDeleteTodo(id){
  setTodos(todos.filter(todo =>(todo.id !== id)))
  }
  
  const handleCheckbox = (todoId, isChecked) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: isChecked } : todo
      )
    );
  };

  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<TodoAdd handleAddTodo={handleAddTodo}/>}/>
        <Route path="/list" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleCheckbox={handleCheckbox}/>}/>
      </Routes>
      
      
     
    </div>
  );
}

export default App;
