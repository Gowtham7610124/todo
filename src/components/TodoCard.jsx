export function TodoCard(props){
    const {todo,handelDeleteTodo,todoIndex,handelDoneTodo } = props
    // console.log(handelDeleteTodo)
    // const todo = todos[todoIndex];
    // console.log(todo.todoIndex)
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={()=>{
                    handelDoneTodo(todoIndex)
                }} disabled={todo.complete}>
                    <h6 >Done</h6>
                </button>

                <button disabled={todo.complete} onClick={()=>{handelDeleteTodo(todoIndex)}}>
                    <h6>Delete</h6>
                </button>
                
            </div>
        </div>
    )
}