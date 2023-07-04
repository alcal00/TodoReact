
export function TodoItem(props) {
    const {todo} = props
    return (
        <div className="todo-item"  key={todo.todoid}>
            <ul>
                <input type="checkbox" name="todocheckbox" id="todocheckbox"/>
                <li><div className="text-todo-item">{todo.todotext}</div></li>
                <li>
                    <button className="btn-delete">delete</button>
                </li>
            </ul>
        </div>
    )
}