import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

function App() {

  let todos = [
    'Go to the gym',
    'Learn React',
    'Build a todo app'
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
