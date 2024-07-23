import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const {allTodos} = useSelector((state: any) => state.todos)
  console.log("This is the data",allTodos)

  return (
    <>

    </>
  )
}

export default App
