import { TodoCard } from "./todoCard";
export function TodoList(props) {
    const {todos,selectedTab,handelDeleteTodo,handelDoneTodo} = props;
    // const tab = 'All';
    // console.log(todos)
    const filterTodoList = selectedTab === 'All'? todos:
    selectedTab === 'Completed'? todos.filter(val => val.complete):
    todos.filter(val => !val.complete)

    // console.log(filterTodoList)
    return (
        <>
            {filterTodoList.map((todo) => {
                const originalIndex = todos.indexOf(todo); // 🟢 Correct index
                return (
                    <TodoCard
                        key={originalIndex}
                        todo={todo}
                        todoIndex={originalIndex}
                        handelDeleteTodo={handelDeleteTodo}
                        handelDoneTodo={handelDoneTodo}
                    />
                );
            })}
        </>
    );
}
