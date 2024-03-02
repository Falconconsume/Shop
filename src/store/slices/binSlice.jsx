import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
    name: 'bin',
    initialState: [],
    addItem(state, action) {
        state.push(action.payload)
    },
    removeItem(state, action) {
        state.filter((item) => item.id !== action.payload.id)
    },
})

export const { addItem, removeItem } = cardSlice.actions
export default cardSlice.reducer
