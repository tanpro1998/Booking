import { createSlice } from "@reduxjs/toolkit";

const confirmSlice = createSlice({
  name: "confirm",
  initialState: {
    confirmation: [],
  },
  reducers: {
    confirm: (state, action) => {
      state.confirmation = action.payload;
    },
  },
});

export const { confirm } = confirmSlice.actions;

export default confirmSlice.reducer;
