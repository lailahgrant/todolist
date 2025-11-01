import { useState, useEffect } from 'react' //react hooks
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


  //localstorage fn
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo] //spread out old todos
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // localStorage
  //useEffect take a depedency array as 2nd argument that listens to different events and run code based on when those events happen
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, []) //empty dependency array means run only once when page reloads

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
