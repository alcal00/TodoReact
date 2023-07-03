import { Menu } from "./components/Menu";
import './css/app.css';
import { TodoAdd } from "./pages/TodoAdd";
import { TodoList } from "./pages/TodoList";

function App() {
  return (
    <div>
      <Menu/>
      <TodoAdd/>
      <TodoList/>
    </div>
  );
}

export default App;
