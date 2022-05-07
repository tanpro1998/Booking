import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "details",
  initialState: {
    booking: [],
    room: [],
  },
  reducers: {
    detailRoom: (state, action) => {
      state.room = action.payload;
    },
    detailBooking: (state, action) => {
      state.booking = action.payload;
    },
  },
});

export const { detailRoom, detailBooking } = detailSlice.actions;

export default detailSlice.reducer;
