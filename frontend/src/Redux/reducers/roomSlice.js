import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    room: [],
  },
  reducers: {
    allRooms: (state, action) => {
      state.rooms = action.payload;
    },
  },
});

export const { allRooms } = roomSlice.actions;

export default roomSlice.reducer;
