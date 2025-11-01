import { useState } from 'react'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

function App() {

  /*  let todos = [
      'Go to the gym',
      'Learn React',
      'Build a todo app'
    ]
    */

  //state hook for todos - stateful variable
  const [todos, setTodos] = useState([ /*'Go to the gym', 'Learn React', 'Build a todo app' */])
  const [todoValue, setTodoValue] = useState('')


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo] //spread out old todod
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
