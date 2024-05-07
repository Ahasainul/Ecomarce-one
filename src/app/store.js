import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import bradcomSlice from '../features/bradcomSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bradcome:bradcomSlice
  },
})