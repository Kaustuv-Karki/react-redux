import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/slices/todoSlice'
import { fetchUsers } from './redux/async/asyncCall'
import { Dispatch } from '@reduxjs/toolkit'

function App() {
  const {allTodos} = useSelector((state: any) => state.todos)
  const dispatch: Dispatch<any> = useDispatch()
  console.log("This is the data",allTodos)
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
  dispatch(addTodo({id: allTodos.length + 1, todo}))
  setTodo('')
    console.log("This is the todo",todo)
  }

  useEffect(() => {
    // Fetch todos on component mount
    const data = dispatch(fetchUsers());
    console.log("--", data)
  }, [dispatch]);

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
