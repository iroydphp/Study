import { createSlice } from '@reduxjs/toolkit'

const counterslice = createSlice({
   name: 'counterSlice',
   initialState: { value: 0 }, // state의 초기값
   // reducers : state를 변경
   reducers: {
      up: (state, action) => {
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterslice
