import { createSlice } from "@reduxjs/toolkit";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addBag: (state, action) => {
      state.push(action.payload);
    },
    removeBag: (state, action) => {
      console.log(action.payload);
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const { addBag, removeBag } = bagSlice.actions;

export default bagSlice;
