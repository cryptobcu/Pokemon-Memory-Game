import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cardsSlice'

export const store = configureStore({
  reducer: {
    cards:cardsReducer
  },
})