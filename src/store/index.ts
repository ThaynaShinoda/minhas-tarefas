import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/tasksSlice'
import filterReducer from './reducers/filterSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
