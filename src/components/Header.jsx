export function Header(props){
    const {todos} = props
    let listLength = todos.filter(val=> !val.complete).length
    // todos.filter(val => !val.complete).length
    let taskPlural;
    if(listLength > 1){
        taskPlural = 'Tasks'
    }else{
        taskPlural = 'Task'
    }
    return(
        <header>
            <h1 className="text-gradient">We have {listLength} open {taskPlural}</h1>
        </header>
    )
}