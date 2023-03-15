import { useState} from "react";

function Todo({ todo, completeTodo, editTodoText, deleteTodo} ){
    const [showInput, setShowInput] = useState(false);
 
    return (
        <li>
            <div>
                <h2 onClick={() => setShowInput(!showInput)}>{todo.text}</h2>
                <input onKeyDown={(e) =>{
                    if(e.key === "Enter"){
                        editTodoText(todo.id, e);
                        setShowInput(false);

                    }
                }}
                       style={{display: showInput ? 'block' : 'none' }}
                       type="text" 
                       placeholder="updated list"
                       
                />
            </div>

            <label>
                Complete <input onChange={(e) => completeTodo(todo.id, e)} type="checkbox" checked={todo.completed}/>
            </label>

            <label>
                <button onClick={(e)=>deleteTodo(todo.id)}>DELETE</button>
            </label>

        </li>
    )

}
export default Todo;