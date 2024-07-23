import { configureStore, Store } from "@reduxjs/toolkit";
import {todoReducer} from './slices/todoSlice.ts'

const store: Store = configureStore({
    reducer: {
        // Add reducers here
        todos: todoReducer
    }
})


export default store