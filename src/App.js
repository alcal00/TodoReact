import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu.jsx";
import './css/app.css';
import { TodoAdd } from "./pages/TodoAdd.jsx";
import { TodoList } from "./pages/TodoList.jsx";
import { Home } from "./pages/Home.jsx";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";




//import {v4 as uuidv4, v4} from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const [storedTodo, setStoredTodo] = useLocalStorage('todos', [])

  useEffect(() => {
    fetch("https://65c33f8939055e7482c06bc5.mockapi.io/todos", {
      method: 'GET',
      // mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));

  }, []);

  useEffect(() => {
    console.log(todos)
    setStoredTodo(todos) //on stocke todos dans localStorage
  }, [todos])

  /**
   * @param {{text: string}} todo 
   */
  async function handleAddTodo(todo) {
    const response = await fetch("https://65c33f8939055e7482c06bc5.mockapi.io/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
    const newTodo = await response.json()
    setTodos([...todos, newTodo])
  }
  async function handleDeleteTodo(id) {
    const response = await fetch(`https://65c33f8939055e7482c06bc5.mockapi.io/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos(todos.filter(todo => (todo.id !== id)))
      })
      .catch((e) => {
        console.error(e)
      })
  }

  async function handleCheckbox(todoId, isChecked) {
    await fetch(`https://65c33f8939055e7482c06bc5.mockapi.io/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed: isChecked })
    })
      .then(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: isChecked } : todo
          )
        )
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TodoAdd handleAddTodo={handleAddTodo} />} />
        <Route path="/list" element={<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleCheckbox={handleCheckbox} />} />
      </Routes>



    </div>
  );
}

export default App;
