import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from './slices/todoSlice'

const store = configureStore({
    reducer: {
        // Add reducers here
        todos: todoReducer
    }
})


export default store