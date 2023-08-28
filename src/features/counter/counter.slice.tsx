import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  counter: number
}

const initialState :counterState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.counter++
    },
    decrease: (state) => {
      state.counter--
    },
    changeByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload
    }
  }
})
const counterReducer = counterSlice.reducer

export const { increase, decrease, changeByAmount } = counterSlice.actions
export default counterReducer
