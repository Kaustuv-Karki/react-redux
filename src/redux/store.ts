import { configureStore, Store } from "@reduxjs/toolkit";
import {todoReducer} from './slices/todoSlice.ts'
import asyncReducer from './async/asyncCall.ts'
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    todos: todoReducer,
    async: asyncReducer
})

const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store: Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

const persistor = persistStore(store)

export {store, persistor}