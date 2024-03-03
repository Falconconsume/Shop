import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        },
    },
})

export const { addItem, removeItem } = cardSlice.actions
export default cardSlice.reducer
