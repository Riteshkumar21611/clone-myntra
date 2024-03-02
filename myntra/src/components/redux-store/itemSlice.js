import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../data/item";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    AddInitialItems: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { AddInitialItems } = itemSlice.actions;

export default itemSlice;
