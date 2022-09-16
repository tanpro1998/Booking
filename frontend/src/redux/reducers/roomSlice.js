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
    oneRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

export const { allRooms, oneRoom } = roomSlice.actions;

export default roomSlice.reducer;
