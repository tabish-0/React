import {createSlice, nanoid} from "@reduxjs/toolkit"

const saveTodos = JSON.parse(localStorage.getItem("todos"))

const initialState = {
    todos: saveTodos ? saveTodos : [{id: 1, textValue: "Hello World"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                textValue: action.payload
            }
            state.todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            const {id, newText} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo){
                todo.textValue = newText
                localStorage.setItem("todos", JSON.stringify(state.todos))
            }
        }
    },
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer