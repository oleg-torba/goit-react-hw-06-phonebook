import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
    name: 'filter', 
    initialState: '',
    reducers: {
        addFIlteredContact(state, action){
            state.push(action.payload)
        }
    }
})

export const {addFIlteredContact} = filterSlice.actions

