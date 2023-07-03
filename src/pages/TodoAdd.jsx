import { useState } from "react"

export function TodoAdd(props){
    const [todo, setTodo] = useState({
        todotext:''
    })
    
    const {handleAddTodo} = props
    
    /**
     * 
     * @param {SubmitEvent} evt 
     */
    function handleSubmit(evt){
        evt.preventDefault()
        handleAddTodo(todo)
        setTodo({...todo, todotext:''})
    }

    /**
     * 
     * @param {import("react").ChangeEvent} evt 
     */
    function handleChangeAddTodo(evt){
        const {name, value} = evt.target
        setTodo({...todo, [name]: value})
    }

    return(
        <div className="todo-add">
            <h1>Add a <span>Todo.</span></h1>
            <form className="form-todo-add" onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="todotext">
                    Enter entitile of your todo :
                </label>
                <input type="text" name="todotext" id="todotext" value={todo.todotext} onChange={(evt) => handleChangeAddTodo(evt)}/>
                <input type="submit" className="btn" value="Add Todo" />
            </form>
        </div>
    )
}