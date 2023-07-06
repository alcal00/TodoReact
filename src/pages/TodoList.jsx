import { TodoItem } from "../components/TodoItem"

export function TodoList(props) {

    const { todos, handleDeleteTodo, handleCheckbox } = props
    // const ReversedTodo = todos.slice().reverse()

    return (
        <div className="mt-20">
            <h1 className="text-3xl font-bold text-center"><span>Todo</span> List.</h1>
            <p className="block mb-4 font-medium">Here is your to do list:</p>
            <div >
                {todos.slice().reverse().map((todo) => (
                    <TodoItem todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo} handleCheckbox={handleCheckbox}/>
                )
                )}
            </div>
        </div>
    )
}