import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    countZero: (state, action) => {
      state.value = 0;   
    },
  }
});

export const { increment, decrement, incrementByAmount ,countZero } = counterSlice.actions;
export default counterSlice.reducer;
