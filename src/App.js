import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import './css/app.css';
import { TodoAdd } from "./pages/TodoAdd";
import { TodoList } from "./pages/TodoList";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<TodoAdd/>}/>
        <Route path="/list" element={<TodoList/>}/>
      </Routes>
      
      
     
    </div>
  );
}

export default App;
