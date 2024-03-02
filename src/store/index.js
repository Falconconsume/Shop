import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import cardReducer from './slices/binSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        card: cardReducer,
    },
})
