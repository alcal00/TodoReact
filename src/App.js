import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import './css/app.css';
import { TodoAdd } from "./pages/TodoAdd";
import { TodoList } from "./pages/TodoList";
import { Home } from "./pages/Home";
import { useState } from "react";
import {v4 as uuidv4, v4} from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  
  /**
   * @param {{text: string}} todo 
   */
  function handleAddTodo(todo){
    setTodos([...todos, {...todo, todoid:uuidv4()}])
  }
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<TodoAdd handleAddTodo={handleAddTodo}/>}/>
        <Route path="/list" element={<TodoList todos={todos}/>}/>
      </Routes>
      
      
     
    </div>
  );
}

export default App;
