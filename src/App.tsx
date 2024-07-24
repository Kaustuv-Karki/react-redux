import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/slices/todoSlice'
import { fetchUsers } from './redux/async/asyncCall'
import { Dispatch } from '@reduxjs/toolkit'

function App() {
  const {allTodos} = useSelector((state: any) => state.todos)
  const {data} = useSelector((state: any) => state.async)
  const dispatch: Dispatch<any> = useDispatch()
  console.log("This is the data",allTodos, data)
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
  dispatch(addTodo({id: allTodos.length + 1, todo}))
  setTodo('')
    console.log("This is the todo",todo)
  }

  useEffect(() => {
    // Fetch todos on component mount
    // We need to dispatch the fetchUsers action creator beacuse this populates for the useSelector to get the data
    dispatch(fetchUsers());
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
