
export function TodoAdd(){
    
    return(
        <div className="todo-add">
            <h1>Add a Todo</h1>
            <form className="form-todo-add">
                <label htmlFor="todoname">
                    Enter entitile of your todo :
                </label>
                <input type="text" name="todoname" id="todoname" />
                <input type="submit" className="btn" value="Add Todo" />
            </form>
        </div>
    )
}