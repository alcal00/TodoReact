import { useState } from "react"

export function TodoAdd(props){
    const [todo, setTodo] = useState({
        title:''
    })
    
    const {handleAddTodo} = props
    
    /**
     * 
     * @param {SubmitEvent} evt 
     */
    function handleSubmit(evt){
        evt.preventDefault()
        handleAddTodo(todo)
        setTodo({...todo, title:''})
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
        <div className="mt-20 max-w-md mx-auto p-4 bg-white rounded shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Add a <span>Todo.</span></h1>
            <form className="flex flex-col m-5 p-2" onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="title" className="block mb-2 font-medium">
                    Enter entitle of your todo :
                </label>
                <input type="text"  className="w-full p-3 my-2 border border-gray-300 rounded" 
                name="title" id="title" value={todo.title} onChange={(evt) => handleChangeAddTodo(evt)}/>
                <input type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" value="Add Todo" />
            </form>
        </div>
    )
}