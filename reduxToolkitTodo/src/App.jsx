import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import React, {useState} from 'react'

function App() {
  const [input, setInput] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  return (
    <>
      <h1>Learn about redux toolkit!</h1>
      <AddTodo
      input={input}
      setInput={setInput}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      editId={editId}
      setEditId={setEditId}
      />
      <Todos
      setInput={setInput}
      setIsEditing={setIsEditing}
      setEditId={setEditId}
      />
    </>
  )
}

export default App
