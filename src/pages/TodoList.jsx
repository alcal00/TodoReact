import { TodoItem } from "../components/TodoItem"

export function TodoList(props) {

    const { todos } = props

    return (
        <div className="todo-list">
            <h1><span>Todo</span> List.</h1>
            <p>Here is your to do list:</p>
            <div >
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.todoid}/>
                )
                )}
            </div>
        </div>
    )
}