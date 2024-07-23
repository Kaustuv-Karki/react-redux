import { createSlice } from "@reduxjs/toolkit";

const intialState ={
    allTodos: <any>["This is the data"]
}

const todoSlice = createSlice({
    name : 'todos',
    initialState: intialState,
    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.allTodos = state.allTodos.map((item) =>
              item.id === action.payload.id ? { ...item, todo: action.payload.todo } : item
            );
          },
        }
})


export const { addTodo, removeTodo, editTodo } = todoSlice.actions
export const todoReducer =  todoSlice.reducer