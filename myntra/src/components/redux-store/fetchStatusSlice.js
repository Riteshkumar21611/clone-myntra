import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetchingStart: false,
    currentlyFetchingEnd: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStart: (state) => {
      state.currentlyFetchingStart = true;
    },
    markFetchingEnd: (state) => {
      state.currentlyFetchingEnd = true;
    },
  },
});

export const { markFetchDone, markFetchingStart, markFetchingEnd } =
  fetchStatusSlice.actions;

export default fetchStatusSlice;
