import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users:[],
  feedbacks: []
  ,
  name : "Mr.x",
  value : 0,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload ;
    },
    addFeedback : (state,action) => {
      state.feedbacks = action.payload
    },
    increment: (state) => {
      state.value +=10
    },
    decrement: (state) => {
      state.value = 0
    },
    addName: (state, action) => {
      state.name = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFeedback, increment, addUser, decrement, addName } = counterSlice.actions

export default counterSlice.reducer