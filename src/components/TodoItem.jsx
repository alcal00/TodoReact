import { useState } from "react";

export function TodoItem(props) {
    const {todo, handleDeleteTodo, handleCheckbox} = props
    const [completed, setCompleted] = useState(todo.completed);

    const handleCheckboxChange = (evt) => {
      const isChecked = evt.target.checked;
      setCompleted(isChecked);
      handleCheckbox(todo.id, isChecked);
    };
    return (
        <div className={`border border-purple-300 shadow-lg rounded-lg m-6 p-2 ${
            completed ? "line-through text-stone-500" : ""
          }`}
          key={todo.id}>
            <ul className=" flex flex-row justify-between">
                <input type="checkbox" name="todocheckbox" id="todocheckbox" 
              onChange={handleCheckboxChange}
              checked={completed} />
                <li><div className="py-2 px-3">{todo.title}</div></li>
                <li>
                    <button className="bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-full" onClick={() => handleDeleteTodo(todo.id)}>delete</button>
                </li>
            </ul>
        </div>
    )
}