import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    }
  }
});

const counterStore = configureStore({
  reducer:{
     counter: counterSlice.reducer
  }
})

export const counterAction = counterSlice.actions;

export default counterStore;