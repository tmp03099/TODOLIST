import Todo from "./Todo";

function TodoList({todos, addTodo, completeTodo, editTodoText, deleteTodo}){

    return(
        <div>
            <h1>Create Todo </h1>
            {/* "Enter" is name of key. Will call addTodo() when enter */}
            <input type='text' placeholder="add here" onKeyDown={e => e.key === "Enter" && addTodo(e) }/>
        {
            todos.length? (
                <>
                    <h1>Todo Items</h1>
                    <ul className="todoList">
                        {
                            todos.filter(i => !i.completed)
                                 .map((todo)=>{
                                    return <Todo key={todo.id}
                                                 todo={todo} 
                                                 completeTodo={completeTodo}
                                                 editTodoText={editTodoText}
                                                 deleteTodo={deleteTodo}
                                            />;
                                 })
                        }
                    </ul>
                    <h1>Completed Items</h1>
                    <ul className="todoList">
                        {
                            todos.filter(i => i.completed)
                                 .map((todo)=>{
                                    return <Todo key={todo.id}
                                                 todo={todo} 
                                                 completeTodo={completeTodo}
                                                 editTodoText={editTodoText}
                                                 deleteTodo={deleteTodo}

                                            />;
                                 })
                        }
                    </ul>
                </>
            ): (
                <h1>No Todos Added Yet</h1>
            )
        };




        </div>
    )

}
export default TodoList;