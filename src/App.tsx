import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/slices/todoSlice'

function App() {
  const {allTodos} = useSelector((state: any) => state.todos)
  const disptach = useDispatch()
  console.log("This is the data",allTodos)
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
  disptach(addTodo({id: allTodos.length + 1, todo}))
  setTodo('')
    console.log("This is the todo",todo)
  }

  return (
    <>
      {
        allTodos.map((todo: any) => (
          <div key={todo.id}>
            <h1>{todo.todo}</h1>
          </div>
      )
    )}
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter your todo" />
    <button onClick={handleAddTodo}>Add Todo</button>
    </>
  )
}

export default App
