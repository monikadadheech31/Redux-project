import { configureStore } from '@reduxjs/toolkit'
import  cardSlice from '../features/CartSlice'

export const store = configureStore({

  reducer: {
    allcard : cardSlice
  },
})

