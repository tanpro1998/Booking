import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    booking: [],
  },
  reducers: {
    availableBooking: (state, action) => {
      state.booking = action.payload;
    },
  },
});

export const { availableBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
