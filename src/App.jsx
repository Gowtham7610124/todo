import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoCard } from './components/todoCard'
function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos,setTodos] = useState([
    // { input: 'Hello! Add your first todo!', complete: true }
  ]);
  const [selectedTab,setSelectedTab] = useState('Open');
  // ADD 
  function handelAddTodo(newTodo){
    // console.log("new list single -----  ",newTodo)
    const newTodoList = [...todos,{ input: newTodo, complete: false }];
    console.log(newTodoList)
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  // EDIT
  function handelDoneTodo(index){
    // const newDeleteTodoList = [...todos,afterDeleteTodos]
    let newTodoList = [...todos]
    let completedTodolist = newTodoList[index]
    console.log(completedTodolist)
    completedTodolist['complete'] = true
    newTodoList[index] = completedTodolist
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  // DELETE
  function handelDeleteTodo(index){
    console.log("index",index)
    console.log("todos",todos)
    const deletedTask = todos.filter((val,valIndex)=>{
      return valIndex !== index
    })
    console.log("after delete",deletedTask)
    setTodos(deletedTask)
    handleSaveData(deletedTask)
  }

  // SAVE TO LOCAL STORAGE
   function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

   useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  // CLEAR 
  function clearLocalStorage(){
    localStorage.clear();
    // setTodos(['']);  
  }
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos={todos} selectedTab={selectedTab} handelDeleteTodo={handelDeleteTodo} handelDoneTodo={handelDoneTodo}/>
      <TodoInput todos={todos} handelAddTodo= {handelAddTodo} handelDeleteTodo={handelDeleteTodo}/>
      {/* <button onClick={()=>{clearLocalStorage()}}>clear storage</button> */}
    </>
  )
}

export default App
