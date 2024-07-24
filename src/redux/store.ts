import { configureStore, Store } from "@reduxjs/toolkit";
import {todoReducer} from './slices/todoSlice.ts'
import asyncReducer from './async/asyncCall.ts'

const store: Store = configureStore({
    reducer: {
        // Add reducers here
        todos: todoReducer,
        async: asyncReducer
    }
})


export default store