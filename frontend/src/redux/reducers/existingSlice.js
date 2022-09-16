import { createSlice } from "@reduxjs/toolkit";

const existingSlice = createSlice({
  name: "existing",
  initialState: {
    booking: [],
  },
  reducers: {
    getBooking: (state, action) => {
      state.booking = action.payload;
    },
    getAllBooking: (state, action) => {
      state.booking = action.payload;
    },
    delBooking: (state, action) => {
      state.booking.filter((book) => book.confirmation !== action.payload);
    },
  },
});

export const { getBooking, getAllBooking, delBooking } =
  existingSlice.actions;

export default existingSlice.reducer;
